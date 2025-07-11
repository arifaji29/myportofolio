// app/projects/[slug]/page.tsx
import { allProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';
import { FaBehanceSquare, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Metadata } from 'next';
import { use } from 'react'; // <-- TAMBAHKAN IMPOR INI

// Tipe untuk props, kita biarkan seperti ini untuk generateMetadata
type Props = {
  params: { slug: string };
};

// --- FUNGSI generateStaticParams (BIARKAN SEPERTI INI) ---
export async function generateStaticParams() {
  const projects = allProjects;
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- FUNGSI generateMetadata (BIARKAN SEPERTI INI) ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Proyek Tidak Ditemukan' };
  }

  return {
    title: `${project.title} | Portofolio Arif`,
    description: project.fullDescription.substring(0, 160),
  };
}


// --- KOMPONEN HALAMAN DENGAN PERUBAHAN ---
const ProjectDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  // 1. Kita secara eksplisit menerima 'params' sebagai sebuah Promise
  // 2. Gunakan hook 'use' untuk "membuka" nilai dari Promise tersebut
  const { slug } = use(params);

  // Mulai dari sini, kode kembali normal karena 'slug' sudah berupa string
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.category}>{project.category}</p>
      </header>
      
      <div className={styles.mainImageContainer}>
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
        <main className={styles.description}>
          <h2>Tentang Proyek</h2>
          <p>{project.fullDescription}</p>
        </main>
        <aside className={styles.sidebar}>
          <h3>Detail</h3>
          <div className={styles.links}>
            {project.liveUrl && <Link href={project.liveUrl} target="_blank" className={styles.link}><FaExternalLinkAlt /> Live View</Link>}
            {project.githubUrl && <Link href={project.githubUrl} target="_blank" className={styles.link}><FaGithub /> GitHub</Link>}
            {project.behanceUrl && <Link href={project.behanceUrl} target="_blank" className={styles.link}><FaBehanceSquare /> Behance</Link>}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetailPage;