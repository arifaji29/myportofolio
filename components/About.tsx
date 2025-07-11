// components/About.tsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* Animasi "fade-down" untuk judul */}
        <h2 className={styles.title} data-aos="fade-down">
          Tentang Saya
        </h2>
        
        {/* Animasi "fade-up" untuk paragraf */}
        <p className={styles.description} data-aos="fade-up" data-aos-delay="200">
          Saya seoarang Graphic Designer dengan pengalaman bekerja lebih dari 4 tahun di industri kreatif. Saya juga memiliki ketertarikan dalam dunia UI UX Design dan Web Development. Beberapa project telah saya hasilkan selama saya bekerja baik dari pekerjaan utama, freelance maupun dari project pribadi. Saya juga masih terus belajar dan mengupgrade skill saya dalam bidang-bidang tersebut untuk menghasilkan project/karya yang lebih baik untuk kedepannya.
        </p>
      </div>
    </section>
  );
};

export default About;