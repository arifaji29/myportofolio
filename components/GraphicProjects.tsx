// components/GraphicProjects.tsx
'use client';

import React, { useState } from 'react';
import styles from './ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import ImagePreviewModal from './ImagePreviewModal'; // Impor modal baru

const graphicProjectsData = [

   {
    image: '/images/design2.png',
    title: 'Giggle Outen Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
   {
    image: '/images/design3.png',
    title: 'Gruvio Logo Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
    {
    image: '/images/design1.png',
    title: 'Jiecos Social Media Design',
    fullDescription: 'Salah satu project yang sering saya kerjakan adalah membuat feed atau carousel di Instagram. Salah satu project yang saya kerjakan dalah feed Instagram JIECOS BEAUTY. Produk skincare pendatang baru yang memulai brandingnya melalui sosial media ',
  },
   {
    image: '/images/design4.png',
    title: 'Kaosenzo katalogue',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
  {
    image: '/images/design5.png',
    title: 'Marketplace Banner',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  },
   {
    image: '/images/design6.png',
    title: 'Instagram Stories Design',
    fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
  }
  // Tambahkan proyek desain grafis lainnya di sini
];

const GraphicProjects = () => {
  // State untuk mengelola modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState('');

  // Fungsi untuk membuka modal
  const openPreviewModal = (imageUrl: string) => {
    setPreviewImageUrl(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Mencegah scroll di background
  };

  // Fungsi untuk menutup modal
  const closePreviewModal = () => {
    setIsModalOpen(false);
    setPreviewImageUrl('');
    document.body.style.overflow = 'auto'; // Mengembalikan scroll
  };

  return (
    <>
      <section id="graphic-design" className={styles.projectSection}>
        <div className="container">
          <h2 className={styles.title}>Graphic Design</h2>
          <div className={styles.grid}>
            {graphicProjectsData.map((project, index) => (
              // Bungkus kartu dengan div yang bisa diklik
              <div key={index} onClick={() => openPreviewModal(project.image)} style={{ cursor: 'pointer' }}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  fullDescription={project.fullDescription}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render komponen modal secara kondisional */}
      {isModalOpen && (
        <ImagePreviewModal imageUrl={previewImageUrl} onClose={closePreviewModal} />
      )}
    </>
  );
};

export default GraphicProjects;