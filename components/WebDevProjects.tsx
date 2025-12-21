// components/WebDevProjects.tsx
'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/data/projects'; // Impor data terpusat

// Filter hanya proyek Web Development
const webDevProjectsData = allProjects.filter(p => p.category === 'Web Development');

const WebDevProjects = () => {
  return (
    <section id="web-dev" className={styles.projectSection}>
      <div className="container">
        {/* Animasi untuk judul */}
        <h2 className={styles.title} data-aos="fade-down">Web Development</h2>
        
        <div className={styles.grid}>
          {/* Tambahkan 'index' untuk delay animasi */}
          {webDevProjectsData.map((project, index) => (
            // Animasi untuk setiap kartu proyek
            <div data-aos="fade-up" data-aos-delay={index * 100} key={project.slug}>
              <ProjectCard 
                slug={project.slug}
                image={project.image}
                title={project.title}
                category={project.category} 
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProjects;