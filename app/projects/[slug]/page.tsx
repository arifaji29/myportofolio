// app/projects/[slug]/page.tsx
import { allProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';
import { FaBehanceSquare, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Metadata } from 'next';

// Tipe untuk props, termasuk params
type Props = {
  params: { slug: string };
};

// --- FUNGSI UNTUK METADATA DINAMIS ---
// UBAH CARA KITA MENERIMA PROPS DI SINI
export async function generateMetadata(props: Props): Promise<Metadata> {
  // Lakukan destructuring di dalam fungsi
  const { params } = props;
  const slug = params.slug;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan',
    };
  }

  return {
    title: `${project.title} | Portofolio Arif`,
    description: project.fullDescription.substring(0, 160),
  };
}
// ------------------------------------


// --- KOMPONEN HALAMAN (TIDAK PERLU ASYNC) ---
const ProjectDetailPage = ({ params }: Props) => {
  const project = allProjects.find((p) => p.slug === params.slug);

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