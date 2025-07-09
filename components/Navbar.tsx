// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
// Tambahkan ikon panah untuk dropdown
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // State baru untuk dropdown di desktop
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.logo}>Arif.dev</span>
        </Link>

        {/* --- MENU DESKTOP --- */}
        <ul className={styles.menuDesktop}>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          
          {/* --- ITEM DROPDOWN PROJECTS --- */}
          <li 
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={styles.dropdownToggle}>
              Projects <IoIosArrowDown />
            </span>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/#graphic-design">Graphic Design</Link></li>
                <li><Link href="/#ui-ux">UI/UX</Link></li>
                <li><Link href="/#web-dev">Web Dev</Link></li>
              </ul>
            )}
          </li>
          {/* ----------------------------- */}
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        {/* Tombol Hamburger untuk Mobile */}
        <div onClick={handleNav} className={styles.menuIcon}>
          {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        
        {/* --- MENU MOBILE --- */}
        <div className={
            menuOpen
              ? `${styles.menuMobile} ${styles.menuMobileOpen}`
              : styles.menuMobile
          }>
          <ul>
            <li onClick={() => setMenuOpen(false)}><Link href="/#about">About</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link href="/#skills">Skills</Link></li>
            
            {/* --- AKORDEON PROJECTS UNTUK MOBILE --- */}
            <li className={styles.dropdownMobile}>
              <div 
                className={styles.dropdownToggleMobile} 
                onClick={() => setDropdownOpen(!dropdownOpen)} // Pakai state yang sama, tapi dengan click
              >
                Projects <IoIosArrowDown className={`${styles.arrowMobile} ${dropdownOpen ? styles.arrowMobileOpen : ''}`} />
              </div>
              {dropdownOpen && (
                <ul className={styles.dropdownMenuMobile}>
                  <li onClick={() => setMenuOpen(false)}><Link href="/#graphic-design">Graphic Design</Link></li>
                  <li onClick={() => setMenuOpen(false)}><Link href="/#ui-ux">UI/UX</Link></li>
                  <li onClick={() => setMenuOpen(false)}><Link href="/#web-dev">Web Dev</Link></li>
                </ul>
              )}
            </li>
            {/* ------------------------------------- */}

            <li onClick={() => setMenuOpen(false)}><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;