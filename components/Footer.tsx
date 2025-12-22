// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
// Impor ikon yang dibutuhkan
import { FaInstagram, FaBehance, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Kontainer baru untuk ikon media sosial */}
      <div className={styles.socialLinks}>
        <Link href="https://www.instagram.com/arifaji29/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={20} />
        </Link>
        <Link href="https://www.behance.net/arifajifadilah29" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <FaBehance size={20} />
        </Link>
        <Link href="https://github.com/arifaji29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={20} />
        </Link>
      </div>

      <p className={styles.copyright}>
        &copy; {currentYear} Arif.dev. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;