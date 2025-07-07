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
  onImageClick?: (imageUrl: string) => void; // PROPERTI BARU: untuk handle klik gambar
}

const ProjectCard = ({ image, title, fullDescription, behanceUrl, onImageClick }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Fungsi yang akan dijalankan saat gambar di-klik
  const handleImageClick = () => {
    // Hanya jalankan jika prop onImageClick diberikan
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <div className={styles.card}>
      {/* --- PERUBAHAN DI SINI --- */}
      <div onClick={handleImageClick} className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          width={500} 
          height={300} 
          className={styles.image} 
        />
      </div>
      {/* ------------------------ */}

      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {isExpanded && (
          <p className={styles.caption}>
            {fullDescription}
          </p>
        )}
        
        <div onClick={() => setIsExpanded(!isExpanded)} className={styles.readMoreContainer}>
          <span className={styles.readMore}>
            {isExpanded ? 'Tutup' : 'Selengkapnya...'}
          </span>
        </div>
        
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