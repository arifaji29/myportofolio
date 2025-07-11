// components/Skills.tsx
import React from 'react';
import styles from './Skills.module.css';

// --- Mengimpor Ikon ---
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiCoreldraw, 
  SiCanva 
} from 'react-icons/si';
import { FaFigma, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

// --- Data Skill Diperbarui ---
const skillsData = [
  { name: 'Figma', icon: <FaFigma size={50} /> },
  { 
    name: 'Web Development', 
    icon: [
      <FaHtml5 key="html" size={40} />, 
      <FaCss3Alt key="css" size={40} />, 
      <FaJsSquare key="js" size={40} />
    ] 
  },
  { name: 'Adobe Photoshop', icon: <SiAdobephotoshop size={50} /> },
  { name: 'Adobe Illustrator', icon: <SiAdobeillustrator size={50} /> },
  { name: 'CorelDRAW', icon: <SiCoreldraw size={50} /> },
  { name: 'Canva', icon: <SiCanva size={50} /> },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        {/* Animasi untuk judul */}
        <h2 className={styles.title} data-aos="fade-down">Software & Keahlian</h2>
        
        <div className={styles.skillsGrid}>
          {/* Tambahkan 'index' untuk membuat delay animasi */}
          {skillsData.map((skill, index) => (
            // Animasi untuk setiap kartu
            <div 
              key={skill.name} 
              className={styles.skillCard} 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              {Array.isArray(skill.icon) ? (
                <div className={styles.iconGroup}>
                  {skill.icon}
                </div>
              ) : (
                skill.icon
              )}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;