'use client';

import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Garment } from '@/types/garment';
import { mockGarments } from '@/lib/garment-data';

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedGarments, setLikedGarments] = useState<string[]>([]);
  const [dislikedGarments, setDislikedGarments] = useState<string[]>([]);

  const currentGarment = mockGarments[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setLikedGarments(prev => [...prev, currentGarment.id]);
    } else {
      setDislikedGarments(prev => [...prev, currentGarment.id]);
    }
    
    setCurrentIndex(prev => Math.min(prev + 1, mockGarments.length - 1));
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 100;
    
    if (info.offset.x > swipeThreshold) {
      handleSwipe('right');
    } else if (info.offset.x < -swipeThreshold) {
      handleSwipe('left');
    }
  };

  const resetSwipe = () => {
    setCurrentIndex(0);
    setLikedGarments([]);
    setDislikedGarments([]);
  };

  if (!currentGarment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">You've seen all garments!</h2>
          <p className="text-gray-600 mb-6">
            You liked {likedGarments.length} and passed on {dislikedGarments.length} garments.
          </p>
          <button
            onClick={resetSwipe}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Swipe Through Garments</h1>
          <p className="text-gray-600">Swipe right to like, left to pass</p>
        </div>

        {/* Progress */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{currentIndex + 1} of {mockGarments.length}</span>
            <span>{likedGarments.length} liked</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / mockGarments.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card Container */}
        <div className="max-w-sm mx-auto relative">
          <motion.div
            key={currentGarment.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-grab active:cursor-grabbing"
          >
            {/* Garment Image */}
            <div className="aspect-[3/4] bg-gray-100 relative">
              <img
                src={currentGarment.colorways[0].imageUrl}
                alt={currentGarment.name}
                className="w-full h-full object-cover"
              />
              
              {/* Like/Dislike Overlays */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0 }}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg text-2xl font-bold transform rotate-12"
                >
                  LIKE
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0 }}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg text-2xl font-bold transform -rotate-12"
                >
                  PASS
                </motion.div>
              </div>
            </div>

            {/* Garment Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{currentGarment.name}</h3>
                  <p className="text-gray-600">{currentGarment.brand}</p>
                </div>
                <span className="text-2xl font-bold text-blue-600">${currentGarment.price}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium capitalize">{currentGarment.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Material:</span>
                  <span className="font-medium">{currentGarment.material}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Fit:</span>
                  <span className="font-medium capitalize">{currentGarment.sizes[1].fit}</span>
                </div>
              </div>

              {/* Colorways */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Available Colors:</p>
                <div className="flex space-x-2">
                  {currentGarment.colorways.map((colorway) => (
                    <div
                      key={colorway.id}
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: colorway.hexCode }}
                      title={colorway.name}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleSwipe('left')}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  ❌ Pass
                </button>
                <button
                  onClick={() => handleSwipe('right')}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  ❤️ Like
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            💡 <strong>Tip:</strong> You can also drag the card left or right to swipe
          </p>
        </div>
      </div>
    </div>
  );
}
