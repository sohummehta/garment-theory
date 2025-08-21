'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/tryon', label: 'Try-On', icon: '👕' },
    { href: '/closet', label: 'Closet', icon: '👔' },
    { href: '/swipe', label: 'Swipe', icon: '💫' },
  ];

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">👗</div>
            <span className="text-xl font-bold text-gray-900">Garment Theory</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-50 rounded-lg border-2 border-blue-200"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="text-xl">🔍</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="text-xl">❤️</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="text-xl">👤</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
