// components/About.tsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>Tentang Saya</h2>
        <p className={styles.description}>
         Saya seoarang Graphic Designer dengan pengalaman bekerja lebih dari 4 tahun di industri kreatif. Saya juga memiliki ketertarikan dalam dunia UI UX Design dan Web Development. Beberapa project telah saya hasilkan selama saya bekerja baik dari pekerjaan utama, freelance maupun dari project pribadi. Saya juga masih terus belajar dan mengupgrade skill saya dalam bidang-bidang tersebut untuk menghasilkan project/karya yang lebih baik untuk kedepannya.
        </p>
      </div>
    </section>
  );
};
export default About;
