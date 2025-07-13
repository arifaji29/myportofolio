// app/projects/[slug]/page.tsx
import { allProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';
import { FaGithub, FaExternalLinkAlt, FaBehanceSquare } from 'react-icons/fa';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Fungsi generateStaticParams (TIDAK BERUBAH)
export async function generateStaticParams() {
  const projects = allProjects;
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Fungsi generateMetadata (TIDAK BERUBAH)
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: 'Proyek Tidak Ditemukan' };
  }

  return {
    title: `${project.title} | Portofolio Arif`,
    description: project.fullDescription.substring(0, 160),
  };
}

// Komponen Halaman (Ditambahkan AOS)
export default async function ProjectDetailPage(props: Props) {
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
          <h2>Tentang Proyek</h2>
          <p>{project.fullDescription}</p>
        </main>
        <aside className={styles.sidebar} data-aos="fade-left" data-aos-delay="500">
          <h3>Detail</h3>
          <div className={styles.links}>
            {project.liveUrl && <Link href={project.liveUrl} target="_blank" className={styles.link}><FaExternalLinkAlt /> Live View</Link>}
            {project.githubUrl && <Link href={project.githubUrl} target="_blank" className={styles.link}><FaGithub /> GitHub</Link>}
          </div>
        </aside>
      </div>
    </div>
  );
}