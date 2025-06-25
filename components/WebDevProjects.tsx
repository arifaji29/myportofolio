// components/WebDevProjects.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectsSection.module.css'; // Pakai CSS dasar yang sama
import cardStyles from './WebDevCard.module.css'; // CSS khusus untuk kartu ini
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const webDevProjectsData = [
  {
    image: '/images/web-dev1.jpg',
    title: 'Aplikasi Web - Daftar Belanja Emak',
    description: '"Daftar Belanja Emak" adalah aplikasi web front-end interaktif yang berfungsi sebagai daftar belanjaan digital. Didesain dengan antarmuka yang modern dan mudah digunakan, aplikasi ini membantu pengguna untuk mencatat, melacak, dan mengelola daftar barang yang perlu dibeli secara efisien. Proyek ini dibangun sepenuhnya menggunakan teknologi web fundamental: HTML, CSS, dan JavaScript.',
    githubUrl: 'https://github.com/arifaji29/My-List',
    liveUrl: 'https://belanjaemak.vercel.app/',
  },
   {
    image: '/images/web-dev1.jpg',
    title: 'Aplikasi Web - Daftar Belanja Emak',
    description: '"Daftar Belanja Emak" adalah aplikasi web front-end interaktif yang berfungsi sebagai daftar belanjaan digital. Didesain dengan antarmuka yang modern dan mudah digunakan, aplikasi ini membantu pengguna untuk mencatat, melacak, dan mengelola daftar barang yang perlu dibeli secara efisien. Proyek ini dibangun sepenuhnya menggunakan teknologi web fundamental: HTML, CSS, dan JavaScript.',
    githubUrl: 'https://github.com/arifaji29/My-List',
    liveUrl: 'https://belanjaemak.vercel.app/',
  },
  // Tambahkan proyek web dev lainnya
];

const WebDevProjects = () => {
  return (
    <section id="web-dev" className={styles.projectSection}>
      <div className="container">
        <h2 className={styles.title}>Web Development</h2>
        <div className={styles.grid}>
          {webDevProjectsData.map((project, index) => (
            <div key={index} className={cardStyles.card}>
              <Image src={project.image} alt={project.title} width={500} height={300} className={cardStyles.image} />
              <div className={cardStyles.content}>
                <h3 className={cardStyles.title}>{project.title}</h3>
                <p className={cardStyles.description}>{project.description}</p>
                <div className={cardStyles.links}>
                  <Link href={project.githubUrl} target="_blank" className={cardStyles.link}>
                    <FaGithub /> GitHub
                  </Link>
                  <Link href={project.liveUrl} target="_blank" className={cardStyles.link}>
                    <FaExternalLinkAlt /> Live View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProjects;