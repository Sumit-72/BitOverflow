"use client";

import { useEffect } from 'react';
import { animations } from '../lib/animation';

export default function ClientSideEffects() {
  useEffect(() => {
    // Add animations stylesheet
    const style = document.createElement('style');
    style.textContent = animations;
    document.head.appendChild(style);

    // Update page title
    document.title = 'BitOverflow';

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component only runs side effects
}
