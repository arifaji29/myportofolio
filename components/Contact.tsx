// components/Contact.tsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Hubungi Saya</h2>
        <p className={styles.subtitle}>
          Saya terbuka untuk diskusi, kolaborasi, atau peluang kerja. 
          Jangan ragu untuk menghubungi saya!
        </p>
        <a href="mailto:arif@example.com" className={styles.emailLink}>
          arif@example.com
        </a>
      </div>
    </section>
  );
};

export default Contact;