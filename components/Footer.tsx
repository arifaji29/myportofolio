// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini secara dinamis

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} Arif.dev. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;