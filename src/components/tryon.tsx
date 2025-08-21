'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Garment, GarmentColorway, GarmentSize, UserMeasurements, PoseQualityCheck } from '@/types/garment';
import { mockGarments, getGarmentsByCategory } from '@/lib/garment-data';

interface TryOnProps {
  className?: string;
}

export default function TryOn({ className = '' }: TryOnProps) {
  // State management
  const [currentStep, setCurrentStep] = useState<'capture' | 'measurements' | 'selection' | 'result'>('capture');
  const [bodyScanUrl, setBodyScanUrl] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState<UserMeasurements>({
    chest: 38,
    length: 29,
    sleeve: 8.5
  });
  const [selectedGarment, setSelectedGarment] = useState<Garment | null>(null);
  const [selectedColorway, setSelectedColorway] = useState<GarmentColorway | null>(null);
  const [selectedSize, setSelectedSize] = useState<GarmentSize | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [poseQuality, setPoseQuality] = useState<PoseQualityCheck | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [tryOnHistory, setTryOnHistory] = useState<string[]>([]);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Camera setup
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment', // Prefer rear camera
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      // Fallback to front camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'user',
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          }
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        }
      } catch (fallbackError) {
        console.error('Error accessing front camera:', fallbackError);
      }
    }
  }, []);

  // Stop camera
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, []);

  // Capture photo
  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    const imageUrl = canvas.toDataURL('image/jpeg', 0.9);
    setBodyScanUrl(imageUrl);
    
    // Simulate pose quality check
    const qualityCheck: PoseQualityCheck = {
      isGoodPose: Math.random() > 0.3,
      isGoodLighting: Math.random() > 0.2,
      isFaceVisible: Math.random() > 0.1,
      isTorsoVisible: Math.random() > 0.1,
      warnings: [],
      score: Math.floor(Math.random() * 40) + 60 // 60-100
    };

    if (!qualityCheck.isGoodPose) qualityCheck.warnings.push('Please stand with arms slightly away from body');
    if (!qualityCheck.isGoodLighting) qualityCheck.warnings.push('Better lighting will improve results');
    if (!qualityCheck.isFaceVisible) qualityCheck.warnings.push('Face should be clearly visible');
    if (!qualityCheck.isTorsoVisible) qualityCheck.warnings.push('Torso should be unobstructed');

    setPoseQuality(qualityCheck);
    setCurrentStep('measurements');
    stopCamera();
  }, [stopCamera]);

  // Generate try-on result
  const generateTryOn = useCallback(() => {
    if (!bodyScanUrl || !selectedGarment || !selectedColorway) return;

    // Simulate AI try-on processing
    setIsCapturing(true);
    
    setTimeout(() => {
      // For demo, we'll create a simple composite
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 800;
      canvas.height = 1000;

      // Load body scan
      const bodyImg = new Image();
      bodyImg.onload = () => {
        ctx.drawImage(bodyImg, 0, 0, canvas.width, canvas.height);
        
        // Simulate garment overlay
        ctx.fillStyle = selectedColorway.hexCode;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(200, 150, 400, 600);
        ctx.globalAlpha = 1.0;

        const resultUrl = canvas.toDataURL('image/jpeg', 0.9);
        setResultUrl(resultUrl);
        setIsCapturing(false);
        setCurrentStep('result');
        
        // Add to history
        setTryOnHistory(prev => [...prev, selectedGarment.id]);
      };
      bodyImg.src = bodyScanUrl;
    }, 2000);
  }, [bodyScanUrl, selectedGarment, selectedColorway]);

  // Add to wishlist
  const addToWishlist = useCallback((garmentId: string) => {
    setWishlist(prev => prev.includes(garmentId) ? prev : [...prev, garmentId]);
  }, []);

  // Remove from wishlist
  const removeFromWishlist = useCallback((garmentId: string) => {
    setWishlist(prev => prev.filter(id => id !== garmentId));
  }, []);

  // Reset session
  const resetSession = useCallback(() => {
    setBodyScanUrl(null);
    setSelectedGarment(null);
    setSelectedColorway(null);
    setSelectedSize(null);
    setResultUrl(null);
    setPoseQuality(null);
    setCurrentStep('capture');
  }, []);

  // Effects
  useEffect(() => {
    if (currentStep === 'capture') {
      startCamera();
    }
    
    return () => {
      if (currentStep !== 'capture') {
        stopCamera();
      }
    };
  }, [currentStep, startCamera, stopCamera]);

  // Render capture step
  const renderCaptureStep = () => (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-96 object-cover"
        />
        
        {/* Capture guide overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg">
            <h3 className="font-semibold mb-2">📸 Capture Guide</h3>
            <ul className="text-sm space-y-1">
              <li>• Stand 3-6 feet from camera</li>
              <li>• Arms slightly away from body</li>
              <li>• Good lighting, face visible</li>
              <li>• Wear form-fitting clothes</li>
            </ul>
          </div>
          
          {/* Pose outline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-80 border-2 border-white/50 rounded-lg"></div>
          </div>
        </div>

        {/* Privacy notice */}
        {showPrivacyNotice && (
          <div className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🔒 Privacy Notice</h4>
            <p className="text-sm mb-3">
              Your photo is processed locally and not stored. We use it only to create your virtual try-on.
            </p>
            <button
              onClick={() => setShowPrivacyNotice(false)}
              className="bg-white text-blue-600 px-4 py-2 rounded font-semibold"
            >
              I Understand
            </button>
          </div>
        )}
      </div>

      <button
        onClick={capturePhoto}
        disabled={isCapturing}
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
      >
        {isCapturing ? 'Capturing...' : '📸 Capture Photo'}
      </button>
    </div>
  );

  // Render measurements step
  const renderMeasurementsStep = () => (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Your Measurements</h2>
        <p className="text-gray-600">For the most accurate fit, please provide your measurements</p>
      </div>

      {poseQuality && poseQuality.warnings.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Quality Warnings</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            {poseQuality.warnings.map((warning, index) => (
              <li key={index}>• {warning}</li>
            ))}
          </ul>
          <p className="text-xs text-yellow-600 mt-2">
            Quality score: {poseQuality.score}/100
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Chest (inches)
          </label>
          <input
            type="number"
            value={measurements.chest}
            onChange={(e) => setMeasurements(prev => ({ ...prev, chest: Number(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            min="30"
            max="50"
            step="0.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Length (inches)
          </label>
          <input
            type="number"
            value={measurements.length}
            onChange={(e) => setMeasurements(prev => ({ ...prev, length: Number(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            min="25"
            max="35"
            step="0.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sleeve (inches)
          </label>
          <input
            type="number"
            value={measurements.sleeve}
            onChange={(e) => setMeasurements(prev => ({ ...prev, sleeve: Number(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            min="7"
            max="12"
            step="0.5"
          />
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => setCurrentStep('capture')}
          className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300"
        >
          ← Back
        </button>
        <button
          onClick={() => setCurrentStep('selection')}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Continue →
        </button>
      </div>
    </div>
  );

  // Render garment selection step
  const renderSelectionStep = () => (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Choose Your Garment</h2>
        <p className="text-gray-600">Select from our curated collection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGarments.map((garment) => (
          <motion.div
            key={garment.id}
            whileHover={{ scale: 1.02 }}
            className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border-2 ${
              selectedGarment?.id === garment.id ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => {
              setSelectedGarment(garment);
              setSelectedColorway(garment.colorways[0]);
              setSelectedSize(garment.sizes[1]); // Default to medium
            }}
          >
            <div className="aspect-[3/4] bg-gray-100 relative">
              <img
                src={garment.colorways[0].imageUrl}
                alt={garment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (wishlist.includes(garment.id)) {
                      removeFromWishlist(garment.id);
                    } else {
                      addToWishlist(garment.id);
                    }
                  }}
                  className={`p-2 rounded-full ${
                    wishlist.includes(garment.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600'
                  }`}
                >
                  {wishlist.includes(garment.id) ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{garment.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{garment.brand}</p>
              <p className="text-lg font-bold text-blue-600">${garment.price}</p>
              
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-500 capitalize">{garment.category}</span>
                <span className="text-xs text-gray-500">{garment.material}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedGarment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-bold mb-4">{selectedGarment.name}</h3>
          
          {/* Colorway selection */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Color</h4>
            <div className="flex space-x-3">
              {selectedGarment.colorways.map((colorway) => (
                <button
                  key={colorway.id}
                  onClick={() => setSelectedColorway(colorway)}
                  className={`w-12 h-12 rounded-full border-2 ${
                    selectedColorway?.id === colorway.id ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: colorway.hexCode }}
                  title={colorway.name}
                />
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Size</h4>
            <div className="grid grid-cols-4 gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => {
                const sizeData = selectedGarment.sizeChart[size];
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(sizeData)}
                    className={`py-2 px-4 rounded-lg border-2 font-semibold ${
                      selectedSize?.chest === sizeData.chest ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setCurrentStep('measurements')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300"
            >
              ← Back
            </button>
            <button
              onClick={generateTryOn}
              disabled={!selectedColorway || !selectedSize || isCapturing}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {isCapturing ? 'Generating...' : 'Try It On'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );

  // Render result step
  const renderResultStep = () => (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Your Virtual Try-On</h2>
        <p className="text-gray-600">How does it look?</p>
      </div>

      {resultUrl && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-semibold text-lg mb-3 text-center">Before</h3>
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={bodyScanUrl!}
                alt="Original photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* After */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-semibold text-lg mb-3 text-center">After</h3>
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src={resultUrl}
                alt="Try-on result"
                className="w-full h-full object-cover"
              />
              
              {/* Fit guidance */}
              <div className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white p-3 rounded-lg">
                <p className="text-sm">
                  💡 <strong>Fit & Size Guidance:</strong> Modelled on your body; fit may vary
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
          🛒 Add to Cart
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          📱 Share
        </button>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700">
          💾 Save
        </button>
        <button
          onClick={resetSession}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700"
        >
          🔄 Try Another
        </button>
      </div>

      {/* Garment details */}
      {selectedGarment && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Garment Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Brand:</span>
              <p className="font-medium">{selectedGarment.brand}</p>
            </div>
            <div>
              <span className="text-gray-600">Material:</span>
              <p className="font-medium">{selectedGarment.material}</p>
            </div>
            <div>
              <span className="text-gray-600">Fit:</span>
              <p className="font-medium capitalize">{selectedSize?.fit}</p>
            </div>
            <div>
              <span className="text-gray-600">Price:</span>
              <p className="font-medium text-blue-600">${selectedGarment.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Virtual Try-On</h1>
          <p className="text-gray-600">Experience clothes before you buy them</p>
        </div>

        {/* Progress indicator */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between">
            {['capture', 'measurements', 'selection', 'result'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep === step
                      ? 'bg-blue-600 text-white'
                      : index < ['capture', 'measurements', 'selection', 'result'].indexOf(currentStep)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                {index < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      index < ['capture', 'measurements', 'selection', 'result'].indexOf(currentStep)
                        ? 'bg-green-500'
                        : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 'capture' && renderCaptureStep()}
            {currentStep === 'measurements' && renderMeasurementsStep()}
            {currentStep === 'selection' && renderSelectionStep()}
            {currentStep === 'result' && renderResultStep()}
          </motion.div>
        </AnimatePresence>

        {/* Hidden canvas for photo capture */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
