// components/WebDevProjects.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectsSection.module.css'; // Pakai CSS dasar yang sama
import cardStyles from './WebDevCard.module.css'; // CSS khusus untuk kartu ini
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const webDevProjectsData = [
  {
    image: '/images/project-web-dev.jpg',
    title: 'Personal Portfolio Website',
    description: 'Proyek personal untuk mendalami web development, dirancang di Figma dan dibangun dengan Next.js & React.',
    githubUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
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