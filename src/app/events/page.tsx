"use client";
import React from "react";
import Carousel from "@/components/ui/carousel";
import Particles from "@/components/magicui/particles";
import { FocusCards } from "@/components/ui/focus-cards";
const page = () => {
  return (
    <div className="top-8">
  <Particles
    className="fixed inset-0 h-full w-full"
    quantity={500}
    ease={100}
    color="#ffffff"
    refresh
  />
  {/* <div className="relative overflow-hidden w-full h-full py-20">
  <Carousel slides={slideData} />
</div> */}
<div className="h-10"></div>
  <div className="mt-10"> {/* Increased `mt-10` to `mt-20` */}
    <FocusCards cards={cards} />
  </div>
</div>

  )
}

export default page
const cards = [
  {
    title: "Megaproject",
    src: "/Megaproject.png",
  },
  {
    title: "Logic Lounge 2.0",
    src: "/logicLounge.png",
  },
  {
    title: "SWE Quest",
    src: "/SWEquest.png",
  },
  {
    title: "ACM ICPC regionals",
    src: "/ICPCregionals.png",
  },
  {
    title: "Lead 5.0",
    src: "/Lead.png",
  },
  
];
const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

