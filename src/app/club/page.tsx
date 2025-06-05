"use client";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { HoverEffect } from "../../components/ui/card-hover-effect";
import { image } from "@uiw/react-md-editor";
import Particles from "@/components/magicui/particles";

const page = () => {
  return (
    <div>
      <Particles
        className="fixed inset-0 h-full w-full"
        quantity={500}
        ease={100}
        color="#ffffff"
        refresh
      />
      <div className="max-w-5xl mx-auto px-8 ">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default page;

const projects = [
  {
    title: "ACM",
    description:
      "The world’s largest technical professional organization dedicated to advancing technology. IEEE empowers students to innovate, learn, and connect through workshops, conferences, competitions, and cutting-edge projects.",
    link: "https://www.instagram.com/acmbitm/",
    image: "/ACMlogo.png",
  },
  {
    title: "IEEE",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "/IEEElogo.png",
  },
  {
    title: "PSoc",
    description:
      "A creative community for photo enthusiasts to explore, learn, and capture moments. From workshops to photo walks and exhibitions, we bring stories to life through the lens.",
    link: "https://google.com",
    image: "/PSOClogo.png",
  },
  {
    title: "IET",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: "/IETlogo.png",
  },
  {
    title: "Ehsaas",
    description:
      "The official social welfare club, Ehsaas is driven by compassion and action. We work to create meaningful change through community outreach, awareness drives, and service initiatives that reflect the true spirit of empathy.",
    link: "https://amazon.com",
    image: "/ehsaaslogo.png",
  },
  {
    title: "Robolution",
    description:
      "A robotics and automation club where innovation meets engineering. From building bots to competing in tech challenges, Robolution empowers students to design, code, and create the future of robotics.",
    link: "https://microsoft.com",
    image: "/robolutionlogo.png",
  },
  {
    title: "AeroSoc",
    description:
      "A student-led club dedicated to the world of aviation and aerospace. From model aircraft to aerodynamics and space tech, AeroSoc fuels curiosity through hands-on projects, workshops, and competitions.",
    link: "https://microsoft.com",
    image: "Aerosoclogo.png",
  },
  {
    title: "180 DC",
    description:
      "180DC is the world’s largest university-based consultancy, providing high-quality, socially conscious consulting services to nonprofits and social enterprises. It empowers students to create real impact by solving real-world challenges.",
    link: "https://microsoft.com",
    image: "/180DClogo.png",
  },
  {
    title: "Leo",
    description:
      "A youth wing of Lions Clubs International, Leo Club focuses on Leadership, Experience, and Opportunity. It empowers young people to serve the community, develop skills, and grow as future leaders through volunteer work and social initiatives.",
    link: "https://microsoft.com",
    image: "/LEOlogo.png",
  },
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
