// components/GraphicProjects.tsx
'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/data/projects'; // Impor data terpusat

// Filter hanya proyek Graphic Design
const graphicProjectsData = allProjects.filter(p => p.category === 'Graphic Design');

const GraphicProjects = () => {
  return (
    <section id="graphic-design" className={styles.projectSection}>
      <div className="container">
        <h2 className={styles.title}>Graphic Design</h2>
        <div className={styles.grid}>
          {graphicProjectsData.map((project) => (
            <ProjectCard 
              key={project.slug}
              slug={project.slug}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicProjects;