// components/Contact.tsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Hubungi Saya</h2>
        <p className={styles.subtitle}>
          Tertarik untuk berkolaborasi atau punya pertanyaan?
          <br />
          Jangan ragu untuk mengirimkan saya email.
        </p>
        
        {/* INI BAGIAN UTAMANYA: SEBUAH LINK BIASA YANG DIBERI GAYA */}
        <a 
          href="mailto:arifajif@gmail.com" 
          className={styles.emailButton}
        >
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default Contact;