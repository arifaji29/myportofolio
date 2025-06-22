// components/Navbar.tsx
'use client'; // Tambahkan ini di paling atas!

import React, { useState } from 'react';
import Link from 'next/link'; // Gunakan Link dari Next.js
import styles from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icon untuk hamburger menu

const Navbar = () => {
  // State untuk mengontrol buka/tutup menu di mobile
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.logo}>Arif's Portofolio</span>
        </Link>

        {/* Menu untuk Desktop */}
        <ul className={styles.menuDesktop}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Tombol Hamburger untuk Mobile */}
        <div onClick={handleNav} className={styles.menuIcon}>
          {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        
        {/* Menu untuk Mobile */}
        <div className={
            menuOpen
              ? `${styles.menuMobile} ${styles.menuMobileOpen}`
              : styles.menuMobile
          }>
          <ul>
            <li onClick={() => setMenuOpen(false)}><Link href="#about">About</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link href="#skills">Skills</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link href="#projects">Projects</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;