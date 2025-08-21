'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Garment } from '@/types/garment';
import { mockGarments } from '@/lib/garment-data';

export default function ClosetPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Garment['category'] | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'brand'>('name');

  // Get unique brands
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(mockGarments.map(garment => garment.brand))];
    return uniqueBrands.sort();
  }, []);

  // Filter and sort garments
  const filteredGarments = useMemo(() => {
    let filtered = mockGarments.filter(garment => {
      const matchesSearch = garment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           garment.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || garment.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || garment.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Sort garments
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Closet</h1>
          <p className="text-gray-600">Browse our curated collection of high-quality garments</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search garments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Garment['category'] | 'all')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="tops">Tops</option>
                <option value="outerwear">Outerwear</option>
                <option value="dresses">Dresses</option>
              </select>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'brand')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="brand">Brand</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGarments.length} of {mockGarments.length} garments
          </p>
        </div>

        {/* Garments Grid */}
        {filteredGarments.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No garments found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGarments.map((garment, index) => (
              <motion.div
                key={garment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-gray-100 relative">
                  <img
                    src={garment.colorways[0].imageUrl}
                    alt={garment.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold capitalize">
                      {garment.category}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white transition-colors">
                      🤍
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{garment.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{garment.brand}</p>
                  <p className="text-lg font-bold text-blue-600 mb-3">${garment.price}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{garment.material}</span>
                    <span className="capitalize">{garment.thickness}</span>
                  </div>
                  
                  <div className="mt-3 flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Try On
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
