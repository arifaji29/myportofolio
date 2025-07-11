// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

// Interface sekarang hanya butuh ini
interface ProjectCardProps {
  image: string;
  title: string;
  slug: string;
}

const ProjectCard = ({ image, title, slug }: ProjectCardProps) => {
  return (
    // Seluruh kartu sekarang adalah sebuah link ke halaman detail
    <Link href={`/projects/${slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image 
            src={image} 
            alt={title} 
            width={500} 
            height={300} 
            className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;