// components/About.tsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>Tentang Saya</h2>
        <p className={styles.description}>
 Saya seorang Graphic Designer dengan ketertarikan kuat pada pengembangan antarmuka digital (UI/UX) dan Web Development.
Memiliki pengalaman dalam desain visual untuk berbagai kebutuhan branding dan komunikasi digital, serta sedang memperluas keahlian ke bidang desain pengalaman pengguna.
Aktif mengembangkan portofolio yang menggabungkan estetika visual dengan fungsi dan kenyamanan pengguna.
Terbuka untuk peluang di bidang desain digital, UI/UX, dan front-end development.
</p>
      </div>
    </section>
  );
};
export default About;
