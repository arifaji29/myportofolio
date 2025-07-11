// components/UiUxProjects.tsx
'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/data/projects'; // Impor data terpusat

// Filter hanya proyek UI/UX
const uiUxProjectsData = allProjects.filter(p => p.category === 'UI/UX');

const UiUxProjects = () => {
  return (
    // Tambahkan kelas 'alternate' untuk latar belakang berbeda
    <section id="ui-ux" className={`${styles.projectSection} ${styles.alternate}`}>
      <div className="container">
        {/* Animasi untuk judul */}
        <h2 className={styles.title} data-aos="fade-down">UI/UX Design</h2>
        
        <div className={styles.grid}>
          {/* Tambahkan 'index' untuk delay animasi */}
          {uiUxProjectsData.map((project, index) => (
            // Animasi untuk setiap kartu proyek
            <div data-aos="fade-up" data-aos-delay={index * 100} key={project.slug}>
              <ProjectCard 
                slug={project.slug}
                image={project.image}
                title={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UiUxProjects;