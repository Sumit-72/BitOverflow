"use client";
import { Sparkles, Zap, Shield, Code, PieChart, Smartphone, MapPin, HousePlus, ChartNoAxesCombined } from 'lucide-react';
import FeatureCardClientWrapper from './FeatureCardClientWrapper'; // client wrapper
import { useAuthStore } from "@/store/Auth";
import slugify from "@/utils/slugify"; // if you have a slugify util
import { link } from 'fs';


export default function Features() {
  const { user } = useAuthStore();
  const features = [
    {
      icon: 'Sparkles',
      title: "Personalised Dashboard",
      description: "View your questions, clubs, upcoming events, and activity stats — all tailored to your interests and involvement.",
      link: user ? `/users/${user.$id}/${slugify(user.name)}` : "#",
      linkText: "View Profile",
      requireAuth: true
    },
    {
      icon: 'Code',
      title: "Questions",
      description: "Post detailed questions with images or code snippets, get real-time peer responses, and build a culture of collaborative learning.",
      link: "/questions",
      linkText: "Explore Questions",
    },
    {
      icon: 'HousePlus',
      title: "Clubs",
      description: "Explore a vibrant ecosystem of student clubs, follow updates, join discussions, and never miss an opportunity to get involved.",
      link: "/club",
      linkText: "Explore Clubs",
    },
    {
      icon: 'Zap',
      title: "Events",
      description: "From tech talks to cultural fests, discover, bookmark, and RSVP to events that shape your college experience.",
      link: "/events",
      linkText: "View Upcoming Events",
    },
    {
      icon: 'MapPin',
      title: "Remap",
      description: "Interactive map guides you through departments, clubs, venues, and more.",
      link: "https://re-maps.vercel.app/",
      linkText: "Remaps – Campus Navigator",
    },
    {
      icon: 'ChartNoAxesCombined',
      title: "Leaderboard",
      description: "Get noticed and earn credibility by rising through the ranks as you ask thoughtful questions, share answers.",
      link: "/leaderboard",
      linkText: "See Top Contributors",
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

      </div>
    </section>
  );
}