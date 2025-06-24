// components/Contact.tsx
'use client';
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  // State untuk mengelola input form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State untuk mengelola status pengiriman
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(''); // 'success' atau 'error'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Error: Access Key tidak ditemukan. Pastikan file .env.local sudah benar.");
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", accessKey);
    formData.append("subject", `New Contact Form Submission from ${name}`);
    formData.append("from_name", "Arif's Portfolio");


    try {
      // 'res' dideklarasikan di sini...
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // ...dan 'res' DIGUNAKAN di sini untuk mendapatkan 'data'
      const data = await res.json();

      if (data.success) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.log("Error from Web3Forms:", data);
        setSubmissionStatus('error');
      }
    } catch (_error) { // Variabel 'error' diberi awalan '_' karena tidak dipakai
      console.log("Fetch error:", _error); // Opsional: log error untuk debugging
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Hubungi Saya</h2>
        <p className={styles.subtitle}>
          Punya pertanyaan atau ingin berkolaborasi? Isi form di bawah ini!
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nama</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Pesan</label>
            <textarea 
              id="message" 
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
              rows={5}
              className={styles.textarea}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>
        
        {/* Pesan status setelah submit */}
        {submissionStatus === 'success' && (
          <p className={`${styles.statusMessage} ${styles.success}`}>
            Pesan terkirim! Terima kasih telah menghubungi saya.
          </p>
        )}
        {submissionStatus === 'error' && (
           <p className={`${styles.statusMessage} ${styles.error}`}>
            Oops! Terjadi kesalahan. Silakan coba lagi.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;