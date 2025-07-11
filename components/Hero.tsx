// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css'; // Pastikan ini diimpor
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Kontainer untuk teks dengan animasi */}
      <div data-aos="fade-right">
        <h1 className={styles.heroTitle}>Halo, saya Arif</h1>
        <p className={styles.heroSubtitle}>Graphic Designer, UI/UX & Web Development Enthusiast</p>
        
        <Link href="#graphic-design" className={styles.heroButton}>
          Lihat Proyek Saya
        </Link>
      </div>
      
      {/* Kontainer untuk gambar dengan animasi */}
      <div className={styles.heroImageContainer} data-aos="fade-left" data-aos-delay="200">
        <Image
          src="/images/profile-picture.png" // Ganti dengan path gambar Anda di folder /public
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