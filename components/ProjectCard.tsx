// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  image: string;
  title: string;
  slug: string;
  category: string;
  liveUrl?: string;
}

const ProjectCard = ({ image, title, slug, category, liveUrl }: ProjectCardProps) => {
  // Cek apakah ini Web Development dan memiliki URL Live
  const isWebDev = category === 'Web Development';
  const hasLiveUrl = !!liveUrl;
  const isExternalLink = isWebDev && hasLiveUrl;

  // Jika Web Dev arahkan ke liveUrl, jika tidak arahkan ke slug detail
  const finalHref = isExternalLink ? liveUrl : `/projects/${slug}`;

  return (
    <Link 
      href={finalHref} 
      className={styles.cardLink}
      // Buka di tab baru hanya jika mengarah ke link eksternal (Web Dev)
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : ""}
    >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image 
            src={image} 
            alt={title} 
            width={500} 
            height={300} 
            className={styles.image} 
            priority
          />
          
        </div>
        <div className={styles.content}>
          <span className={styles.categoryLabel}>{category}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;