// components/ParticlesBg.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { type ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme(); // Gunakan resolvedTheme agar lebih akurat

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

 const options: ISourceOptions = useMemo(() => ({
  fullScreen: { enable: false },
  fpsLimit: 120,
  particles: {
    // Menggunakan warna putih dan ungu agar sesuai dengan brand Anda
    color: { 
      value: resolvedTheme === "dark" ? ["#ffffff", "#DC43B0"] : "#475569" 
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.4 }, // Gerakan sangat lambat agar elegan
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    number: {
      density: { enable: true, area: 800 },
      value: 50, // Jumlah lebih sedikit tapi lebih berkualitas (berpendar)
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }, // Opacity lebih tinggi agar pendaran terlihat
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
        startValue: "random",
      }
    },
    size: {
      value: { min: 1, max: 4 }, // Variasi ukuran bola cahaya
    },
    // --- KUNCI EFEK BERPENDAR (GLOW) ---
    shadow: {
      enable: true,
      color: resolvedTheme === "dark" ? "#DC43B0" : "#94a3b8",
      blur: 15, // Semakin tinggi angka ini, semakin lebar pendarannya
    },
  },
  detectRetina: true,
}), [resolvedTheme]);

  if (init) {
    return (
      <Particles 
        id="tsparticles" 
        options={options} 
        style={{ width: "100%", height: "100%" }}
      />
    );
  }

  return null;
};

export default ParticlesBg;