'use client';

import { Check, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for casual shoppers',
      features: [
        'Rate up to 10 products/month',
        'Follow up to 50 users',
        'Basic trending insights',
        'Mobile app access',
        'Community support',
      ],
      icon: Zap,
      popular: false,
    },
    {
      name: 'Premium',
      price: '$29',
      description: 'For serious shoppers and influencers',
      features: [
        'Unlimited product ratings',
        'Unlimited follows',
        'Advanced trending analytics',
        'Priority customer support',
        'Ad-free experience',
        'Early access to new features',
        'Verified badge',
        'Custom collections',
      ],
      icon: Crown,
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that's right for you. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                  plan.popular ? 'bg-gradient-to-br from-blue-500 to-purple-500' : 'bg-gray-100'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.popular ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-6xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== '$0' && <span className="text-gray-600">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Get Premium Now
                </a>
              ) : (
                <button className="block w-full bg-gray-100 text-gray-900 text-center py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300">
                  Start Free
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3">
              <Check className="h-6 w-6 text-green-500" />
              <span className="text-gray-700 font-medium">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-6 w-6 text-green-500" />
              <span className="text-gray-700 font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-6 w-6 text-green-500" />
              <span className="text-gray-700 font-medium">No hidden fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}