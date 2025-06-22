// components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

// Ganti data ini dengan proyek Anda sendiri
// Ganti data ini dengan studi kasus proyek desain Anda
const projectsData = [
    {
    title: 'Desain Feed Instagram',
    description: 'Studi kasus ini berfokus pada identifikasi masalah pengguna dalam aplikasi yang ada dan merancang ulang alur transaksi agar lebih cepat dan intuitif. Proses meliputi riset, pembuatan user journey, wireframe, hingga prototipe hi-fi.',
    image: '/images/design1.png', // Ganti dengan gambar desain Anda
    tags: ['Social Media', 'Prototyping', 'Figma', 'Mobile App'],
    liveUrl: 'https://www.behance.net/arifajifadilah29', // Ganti dengan link ke prototipe Figma/InVision
    githubUrl: '#', // Ganti dengan link ke studi kasus lengkap (misal: Behance/Medium)
  },

  {
    title: 'Redesain Aplikasi PLN Mobile',
    description: 'Studi kasus ini berfokus pada identifikasi masalah pengguna dalam aplikasi yang ada dan merancang ulang alur transaksi agar lebih cepat dan intuitif. Proses meliputi riset, pembuatan user journey, wireframe, hingga prototipe hi-fi.',
    image: '/images/project-design1.png', // Ganti dengan gambar desain Anda
    tags: ['UI/UX Research', 'Prototyping', 'Figma', 'Mobile App'],
    liveUrl: 'https://www.behance.net/arifajifadilah29', // Ganti dengan link ke prototipe Figma/InVision
    githubUrl: '#', // Ganti dengan link ke studi kasus lengkap (misal: Behance/Medium)
  },
  {
    title: 'Desain Website Landing Page NGO',
    description: 'Merancang landing page untuk produk baru dengan tujuan utama meningkatkan konversi pendaftaran. Fokus pada copywriting yang jelas, visual yang menarik, dan Call-to-Action (CTA) yang strategis.',
    image: '/images/project-design2.png', // Ganti dengan gambar desain Anda
    tags: ['UI Design', 'Landing Page', 'Conversion Rate'],
    liveUrl: 'https://www.behance.net/arifajifadilah29',
    githubUrl: '#',
  },
];

// ... di dalam komponen Projects ...
// Ganti juga teks pada link-nya agar lebih sesuai



const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.title}>Proyek Saya</h2>
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <Image src={project.image} alt={project.title} width={500} height={300} className={styles.projectImage}/>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <div className={styles.projectLinks}>
  <Link href={project.liveUrl} target="_blank" className={styles.link}>Lihat Prototipe</Link>
  <Link href={project.githubUrl} target="_blank" className={styles.link}>Studi Kasus</Link>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;