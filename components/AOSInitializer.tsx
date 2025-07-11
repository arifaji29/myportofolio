// components/AOSInitializer.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 750, // Durasi animasi dalam milidetik
      once: true,    // Apakah animasi hanya berjalan sekali saat scroll
      offset: 100,     // Jarak dari bawah layar sebelum animasi dimulai
    });
  }, []);

  return null;
};