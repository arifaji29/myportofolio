// components/GraphicProjects.tsx
'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/data/projects';

const graphicProjectsData = allProjects.filter(p => p.category === 'Graphic Design');

const GraphicProjects = () => {
  return (
    <section id="graphic-design" className={styles.projectSection}>
      <div className="container">
        {/* Animasi untuk judul */}
        <h2 className={styles.title} data-aos="fade-down">Graphic Design</h2>
        
        {/* Animasi untuk grid */}
        <div className={styles.grid} data-aos="fade-up">
          {graphicProjectsData.map((project) => (
            <ProjectCard 
              key={project.slug}
              slug={project.slug}
              image={project.image}
              title={project.title}
              category={project.category} 
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicProjects;