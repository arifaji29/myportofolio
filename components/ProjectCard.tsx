// components/ProjectCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';
import { FaBehanceSquare } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  title: string;
  fullDescription: string;
  behanceUrl?: string;
}

const ProjectCard = ({ image, title, fullDescription, behanceUrl }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={500} height={300} className={styles.image} />
      <div className={styles.content}>
        
        {/* --- PERUBAHAN UTAMA DI SINI --- */}

        {/* 1. Judul sekarang menggunakan tag <h3> dan selalu terlihat */}
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {/* 2. Deskripsi hanya muncul jika isExpanded adalah true */}
        {isExpanded && (
          <p className={styles.caption}>
            {fullDescription}
          </p>
        )}

        {/* 3. Teks "Selengkapnya" / "Tutup" untuk memicu state */}
        <div onClick={() => setIsExpanded(!isExpanded)} className={styles.readMoreContainer}>
          <span className={styles.readMore}>
            {isExpanded ? 'Tutup' : 'Selengkapnya...'}
          </span>
        </div>

        {/* ------------------------------------ */}
        
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