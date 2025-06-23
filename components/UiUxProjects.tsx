// components/UiUxProjects.tsx
import React from 'react';
import styles from './ProjectsSection.module.css'; // Pakai CSS yang sama
import ProjectCard from './ProjectCard'; // Pakai Kartu yang sama

const uiUxProjectsData = [
  {
    image: '/images/uiux1.png',
    title: 'Redesain Aplikasi PLN Mobile',
    fullDescription: 'Studi kasus ini berfokus pada identifikasi masalah pengguna dalam aplikasi yang ada dan merancang ulang alur transaksi agar lebih cepat dan intuitif. Proses meliputi riset, pembuatan user journey, wireframe, hingga prototipe hi-fi.',
    behanceUrl: 'https://www.behance.net/your-profile', // Ganti dengan link Behance Anda
  },
   {
    image: '/images/uiux2.png',
    title: 'Aplikasi jual beli online',
    fullDescription: 'Studi kasus ini berfokus pada identifikasi masalah pengguna dalam aplikasi yang ada dan merancang ulang alur transaksi agar lebih cepat dan intuitif. Proses meliputi riset, pembuatan user journey, wireframe, hingga prototipe hi-fi.',
    behanceUrl: 'https://www.behance.net/your-profile', // Ganti dengan link Behance Anda
  }
  // Tambahkan proyek UI/UX lainnya di sini
];

const UiUxProjects = () => {
  return (
    // Tambahkan className 'alternate' untuk latar belakang berbeda
    <section id="ui-ux" className={`${styles.projectSection} ${styles.alternate}`}>
      <div className="container">
        <h2 className={styles.title}>UI/UX Design</h2>
        <div className={styles.grid}>
          {uiUxProjectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              fullDescription={project.fullDescription}
              behanceUrl={project.behanceUrl} // Kita passing prop baru ini
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UiUxProjects;