'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.logo}>Arif.dev</span>
        </Link>

        {/* --- KONTROL KANAN --- */}
        <div className={styles.controlsContainer}>
          {/* Menu Desktop */}
          <ul className={styles.menuDesktop}>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
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
            <li><Link href="/#contact">Contact</Link></li>
          </ul>

          {/* ThemeToggle + Hamburger */}
          <div className={styles.actionGroup}>
            <div className={styles.actionIcons}>
              <ThemeToggle />
            </div>
            <div onClick={handleNav} className={styles.menuIcon}>
              {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
          </div>
        </div>

        {/* --- MENU MOBILE FLYOUT --- */}
        <div className={
          menuOpen
            ? `${styles.menuMobile} ${styles.menuMobileOpen}`
            : styles.menuMobile
        }>
          <ul>
            <li onClick={closeAllMenus}><Link href="/#about">About</Link></li>
            <li onClick={closeAllMenus}><Link href="/#skills">Skills</Link></li>
            <li className={styles.dropdownMobile}>
              <div
                className={styles.dropdownToggleMobile}
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Projects <IoIosArrowDown className={`${styles.arrowMobile} ${mobileDropdownOpen ? styles.arrowMobileOpen : ''}`} />
              </div>
              {mobileDropdownOpen && (
                <ul className={styles.dropdownMenuMobile}>
                  <li onClick={closeAllMenus}><Link href="/#graphic-design">Graphic Design</Link></li>
                  <li onClick={closeAllMenus}><Link href="/#ui-ux">UI/UX</Link></li>
                  <li onClick={closeAllMenus}><Link href="/#web-dev">Web Dev</Link></li>
                </ul>
              )}
            </li>
            <li onClick={closeAllMenus}><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
