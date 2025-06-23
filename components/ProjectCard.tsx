// components/ProjectCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';
import { FaBehanceSquare } from "react-icons/fa";

// --- DEFINISIKAN TIPE PROPS DI SINI ---
// Ini akan memberitahu komponen lain props apa saja yang dibutuhkan.
interface ProjectCardProps {
  image: string;
  title: string;
  fullDescription: string;
  behanceUrl?: string; // Tanda tanya (?) membuat prop ini OPSIONAL
}

// Gunakan tipe yang sudah didefinisikan di sini
const ProjectCard = ({ image, title, fullDescription, behanceUrl }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={500} height={300} className={styles.image} />
      <div className={styles.content}>
        <div onClick={() => setIsExpanded(!isExpanded)} className={styles.captionContainer}>
          <p className={styles.caption}>
            {isExpanded ? fullDescription : title}
          </p>
          <span className={styles.readMore}>
            {isExpanded ? 'Tutup' : 'Selengkapnya...'}
          </span>
        </div>

        {/* Tombol Behance (hanya muncul jika behanceUrl ada) */}
        {behanceUrl && (
          <Link href={behanceUrl} target="_blank" className={styles.behanceButton}>
            <FaBehanceSquare size={20} />
            Lihat di Behance
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;