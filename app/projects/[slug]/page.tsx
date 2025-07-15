// app/projects/[slug]/page.tsx
import { allProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';
import { FaGithub, FaExternalLinkAlt, FaBehanceSquare } from 'react-icons/fa';
import type { Metadata } from 'next';

// --- Tipe Props Diperbarui Sesuai Dokumentasi ---
// 'params' sekarang didefinisikan sebagai sebuah Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// --- FUNGSI generateStaticParams (TIDAK BERUBAH) ---
export async function generateStaticParams() {
  const projects = allProjects;
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- FUNGSI generateMetadata DENGAN POLA BARU ---
export async function generateMetadata(props: Props): Promise<Metadata> {
  // Tunggu (await) hingga props.params (Promise) selesai, lalu ambil nilainya
  const params = await props.params;
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: 'Proyek Tidak Ditemukan' };
  }

  const descriptionText = project.content.find(block => block.type === 'paragraph')?.text || 'Deskripsi proyek';

  return {
    title: `${project.title} | Portofolio Arif`,
    description: descriptionText.substring(0, 160),
  };
}


// --- KOMPONEN HALAMAN DENGAN POLA BARU (MENJADI ASYNC) ---
export default async function ProjectDetailPage(props: Props) {
  // Tunggu (await) hingga props.params (Promise) selesai, lalu ambil nilainya
  const params = await props.params;
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header} data-aos="fade-down">
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.category}>{project.category}</p>
      </header>
      
      <div className={styles.mainImageContainer} data-aos="zoom-in" data-aos-delay="200">
        <Image 
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className={styles.mainImage}
          priority
        />
      </div>

      <div className={styles.contentWrapper}>
        <main className={styles.description} data-aos="fade-right" data-aos-delay="400">
          {project.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                if (block.level === 2) return <h2 key={index}>{block.text}</h2>;
                if (block.level === 3) return <h3 key={index}>{block.text}</h3>;
                return null;
              
              case 'paragraph':
                return <p key={index}>{block.text}</p>;

              case 'image':
                return (
                  <div key={index} className={styles.contentImageContainer}>
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={800}
                      height={450}
                      className={styles.contentImage}
                    />
                  </div>
                );

              default:
                return null;
            }
          })}
        </main>
      </div>
    </div>
  );
}