'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'RetailHub has completely changed how I shop online. The rating system is so reliable, and I love following my friends to see what they\'re buying!',
    },
    {
      name: 'Michael Chen',
      role: 'Tech Reviewer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'As someone who reviews products professionally, I appreciate the verified buyer system. It ensures authentic reviews and builds real trust.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The trending section helps me stay on top of what customers want. I\'ve discovered so many products through this platform that I now stock in my store.',
    },
    {
      name: 'David Park',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The mobile app is fantastic! I can rate products right after my workouts. The personalized feed knows exactly what gear I need.',
    },
    {
      name: 'Jessica Taylor',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Social discovery is a game-changer. I follow other designers and get inspired by their finds. It\'s like having a personal shopping assistant.',
    },
    {
      name: 'Robert Kim',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The data insights from RetailHub help me understand consumer trends better than any other platform. Absolutely essential for my work.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Millions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of satisfied shoppers who have transformed their online shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-200">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, i) => (
                <img
                  key={i}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-700 font-medium">Join 2M+ happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}