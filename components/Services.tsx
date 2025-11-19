'use client';

import { Star, Users, TrendingUp, Download, Heart, Shield } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Star,
      title: 'Smart Rating System',
      description:
        'Rate and review products with our intuitive 5-star system. Your voice helps millions make better shopping decisions.',
      color: 'bg-yellow-500',
    },
    {
      icon: Users,
      title: 'Social Discovery',
      description:
        'Follow friends and influencers to see what they love. Build your shopping community and discover hidden gems together.',
      color: 'bg-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Trending Products',
      description:
        'Stay ahead with real-time trending products. See what\'s hot right now and never miss the next big thing.',
      color: 'bg-purple-500',
    },
    {
      icon: Download,
      title: 'Mobile App',
      description:
        'Shop on the go with our iOS and Android apps. Seamless experience across all your devices with offline mode.',
      color: 'bg-green-500',
    },
    {
      icon: Heart,
      title: 'Personalized Feed',
      description:
        'Get product recommendations tailored to your taste. Our AI learns what you love and surfaces perfect matches.',
      color: 'bg-pink-500',
    },
    {
      icon: Shield,
      title: 'Verified Reviews',
      description:
        'Trust in authentic reviews from verified buyers. We fight fake reviews so you can shop with confidence.',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Shop Smarter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to transform how you discover, evaluate, and purchase products online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`${feature.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Download className="h-5 w-5" />
            <span>Download Now - It's Free</span>
          </a>
        </div>
      </div>
    </section>
  );
}