// components/Hero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation'; // Impor library

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div data-aos="fade-right">
        <h1 className={`${styles.heroTitle} ${styles.heroName}`}>
          {/* Gunakan komponen TypeAnimation di sini */}
          <TypeAnimation
            sequence={[
              // Teks yang sama dengan jeda di akhir
              'Halo, saya Arif',
              900, // Jeda 1 detik
            ]}
            wrapper="span"
            speed={10} // Kecepatan mengetik
            style={{ display: 'inline-block' }}
            repeat={0} // Ulangi 0 kali (hanya sekali jalan)
          />
        </h1>
        <p className={styles.heroSubtitle}>Graphic Designer, UI/UX & Web Development Enthusiast</p>
        
        <Link href="#graphic-design" className={styles.heroButton}>
          Lihat Proyek Saya
        </Link>
      </div>
      
      <div className={styles.heroImageContainer} data-aos="fade-left" data-aos-delay="200">
        <Image
          src="/images/profile-picture.png"
          alt="Foto Profil Arif"
          width={250}
          height={250}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;