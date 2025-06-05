"use client";

import { Sparkles, Zap, Shield, Code, PieChart, Smartphone, MapPin, HousePlus, ChartNoAxesCombined } from 'lucide-react';
import FeatureCardClientWrapper from './FeatureCardClientWrapper'; // client wrapper
import { useAuthStore } from "@/store/Auth";
import slugify from "@/utils/slugify"; // if you have a slugify util

export default function Features() {
  const { user } = useAuthStore();

  const features = [
    {
      icon: 'Sparkles',
      title: "Personalised Dashboard",
      description: "View your questions, clubs, upcoming events, and activity stats — all tailored to your interests and involvement.",
      href: user ? `/users/${user.$id}/${slugify(user.name)}` : "#",
      requireAuth: true
    },
    {
      icon: 'Code',
      title: "Questions",
      description: "Post detailed questions with images or code snippets, get real-time peer responses, and build a culture of collaborative learning.",
      href: "/questions"
    },
    {
      icon: 'HousePlus',
      title: "Clubs",
      description: "Explore a vibrant ecosystem of student clubs, follow updates, join discussions, and never miss an opportunity to get involved.",
      href: "/clubs"
    },
    {
      icon: 'Zap',
      title: "Events",
      description: "From tech talks to cultural fests, discover, bookmark, and RSVP to events that shape your college experience.",
      href: "/events"
    },
    {
      icon: 'MapPin',
      title: "Remap",
      description: "Interactive map guides you through departments, clubs, venues, and more.",
      href: "https://remaps.netlify.app/"
    },
    {
      icon: 'ChartNoAxesCombined',
      title: "Leaderboard",
      description: "Get noticed and earn credibility by rising through the ranks as you ask thoughtful questions, share answers.",
      href: "/leaderboard"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Make connections!
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Explore, share, and thrive with your peers in one seamless community hub
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
          Connecting every club, event, and question on campus. 
          </p>
        </div>

        <FeatureCardClientWrapper features={features} />

        {/* <div className="mt-20 md:mt-32 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950 rounded-2xl p-8 md:p-12 shadow-xl">
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
        </div> */}
      </div>
    </section>
  );
}