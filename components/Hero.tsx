'use client';

import { ArrowRight, Star, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-purple-900/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <TrendingUp className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Trending #1 Retail Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Discover Products
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              You'll Love
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join millions of shoppers discovering, rating, and sharing the best products. 
            Your next favorite find is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>Start Shopping Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Explore Features
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?w=100&h=100&fit=crop`}
                    alt="User"
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-200">2M+ Active Users</p>
              </div>
            </div>

            <div className="text-left">
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-gray-200">Average Rating</p>
            </div>

            <div className="text-left">
              <p className="text-3xl font-bold text-white">50K+</p>
              <p className="text-sm text-gray-200">Products Rated</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}