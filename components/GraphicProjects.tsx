// components/GraphicProjects.tsx
import React from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard'; // Impor kartu pintar kita

const graphicProjectsData = [

   {
    image: '/images/design2.png',
    title: 'Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
   {
    image: '/images/design3.png',
    title: 'Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
    {
    image: '/images/design1.png',
    title: 'Social Media Design',
    fullDescription: 'Salah satu project yang sering saya kerjakan adalah membuat feed atau carousel di Instagram. Salah satu project yang saya kerjakan dalah feed Instagram JIECOS BEAUTY. Produk skincare pendatang baru yang memulai brandingnya melalui sosial media ',
  },
   {
    image: '/images/design4.png',
    title: 'Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
  {
    image: '/images/design5.png',
    title: 'Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
   {
    image: '/images/design6.png',
    title: 'Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  }
  // Tambahkan proyek desain grafis lainnya di sini
];

const GraphicProjects = () => {
  return (
    <section id="graphic-design" className={styles.projectSection}>
      <div className="container">
        <h2 className={styles.title}>Graphic Design</h2>
        <div className={styles.grid}>
          {graphicProjectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              fullDescription={project.fullDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicProjects;