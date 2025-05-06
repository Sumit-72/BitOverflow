import React, { useEffect, useRef } from 'react';
import { Sparkles, Zap, Shield, Code, PieChart, Smartphone } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const features = entry.target.querySelectorAll('.feature-card');
          features.forEach((feature, index) => {
            setTimeout(() => {
              feature.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Design",
      description: "Harness the power of artificial intelligence to create stunning designs in seconds."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with near-instant loading times and smooth interactions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption to keep your data safe."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Well-documented APIs and SDKs that make integration a breeze."
    },
    {
      icon: PieChart,
      title: "Advanced Analytics",
      description: "Gain valuable insights with comprehensive analytics and reporting."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Fully responsive design ensures a perfect experience on any device."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to build amazing products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform provides all the tools and features you need to create beautiful, high-performing digital experiences that your users will love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="feature-card opacity-0 translate-y-8">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to get started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of teams who are already using our platform to build better products faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-blue-400/20 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform rotate-3">
                <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mt-4"></div>
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;