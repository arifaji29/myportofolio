// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css'; // Pastikan ini diimpor
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.heroTitle}>Halo, saya Arif</h1>
       <p className={styles.heroSubtitle}>Graphic Designer & Digital Experiences Enthusiast</p>
        
        {/* Pastikan menggunakan styles.heroButton */}
        <Link href="#projects" className={styles.heroButton}>
          Lihat Proyek Saya
        </Link>
      </div>
      <div className={styles.heroImageContainer}>
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