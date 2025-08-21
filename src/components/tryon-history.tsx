'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Garment } from '@/types/garment';
import { mockGarments } from '@/lib/garment-data';

interface TryOnHistoryProps {
  historyItems: string[];
  onTryOn: (garment: Garment) => void;
  className?: string;
}

export default function TryOnHistory({ 
  historyItems, 
  onTryOn,
  className = '' 
}: TryOnHistoryProps) {
  const historyGarments = mockGarments.filter(garment => 
    historyItems.includes(garment.id)
  );

  if (historyGarments.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-6xl mb-4">📸</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Try-On History</h3>
        <p className="text-gray-600">Start trying on clothes to see your history here!</p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Try-On History</h2>
        <p className="text-gray-600">{historyGarments.length} items tried on</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historyGarments.map((garment, index) => (
          <motion.div
            key={garment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="aspect-[3/4] bg-gray-100 relative">
              <img
                src={garment.colorways[0].imageUrl}
                alt={garment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  #{historyItems.length - index}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{garment.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{garment.brand}</p>
              <p className="text-lg font-bold text-blue-600 mb-3">${garment.price}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 capitalize">{garment.category}</span>
                <button
                  onClick={() => onTryOn(garment)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
