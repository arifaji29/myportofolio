// components/ImagePreviewModal.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ImagePreviewModal.module.css';
import { FaTimes } from 'react-icons/fa';

interface ImagePreviewModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePreviewModal = ({ imageUrl, onClose }: ImagePreviewModalProps) => {
  // Menutup modal saat mengklik latar belakang gelap
  const handleOverlayClick = () => {
    onClose();
  };
  
  // Mencegah modal tertutup saat mengklik area gambar
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <Image 
          src={imageUrl} 
          alt="Image Preview" 
          width={1200} 
          height={800} 
          className={styles.previewImage}
        />
      </div>
    </div>
  );
};

export default ImagePreviewModal;