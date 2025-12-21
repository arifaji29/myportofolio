// data/projects.ts
export type ContentBlock = 
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string };
  
export interface Project {
  slug: string;
  category: 'Graphic Design' | 'UI/UX' | 'Web Development';
  title: string;
  image: string;
  content: ContentBlock[];
  liveUrl?: string;
}

export const allProjects: Project[] = [
    // --- Proyek Desain Grafis ---

    // --- Desain Logo ---
    {
        slug: 'logo-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/cover-logo.png',
        title: 'Logo & Branding',
           content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Giggle Outen' 
      },
      { 
        type: 'image', 
        src: '/images/logo-giggle.png', 
        alt: 'logo giggle outen' 
      },
       { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Gruvio ID' 
      },
      { 
        type: 'image', 
        src: '/images/logo-gruvio.png', 
        alt: 'logo gruuvio' 
      },
       { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Alfiyah Beauty' 
      },
      { 
        type: 'image', 
        src: '/images/logo-alfiyah.png', 
        alt: 'logo alfiyah' 
      },
    ]
    },
    
    // --- Desain Katalog Kaos ---
    {
        slug: 'feed-instagram-design', 
        category: 'Graphic Design',
        image: '/images/cover-katalog-kaos.png',
        title: 'Tshirt Catalogue Design',
        content: [
      
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'katalog kaosenzo.com' 
      },
      { 
        type: 'image', 
        src: '/images/katalog-1.png', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
    
    ]


    // --- Desain Sosial Media ---

    },
    {
        slug: 'social-media-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/cover-sosmed.png',
        title: 'Social Media Design',
        content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Jiecos' 
      },
      { 
        type: 'image', 
        src: '/images/sosmed-1.png', // Gambar detail di dalam "blog"
        alt: 'okee' 
      },
       { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Story Enzo Cafedia' 
      },
      { 
        type: 'image', 
        src: '/images/sosmed-2.png', // Gambar detail di dalam "blog"
        alt: 'okee' 
      },
       { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Rapihin ID' 
      },
      { 
        type: 'image', 
        src: '/images/sosmed-3.png', // Gambar detail di dalam "blog"
        alt: 'okee' 
      },
      
      
    ]
    },


    {
        slug: 'Other-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/cover-lainnya.png',
        title: 'Other Design',
        content: [
      { 
        type: 'heading', 
        level: 2, 
        text: 'Banner Marketplace' 
      },
      { 
        type: 'image', 
        src: '/images/lainnya-1.png', // Gambar detail di dalam "blog"
        alt: 'Banner Marketplace' 
      },
      { 
        type: 'paragraph', 
        text: '' 
      },
    ]
    },





    // --- Proyek UI/UX ---
    {
        slug: 'redesain-pln-mobile',
        category: 'UI/UX',
        image: '/images/uiux1.png',
        title: 'Redesain Aplikasi PLN Mobile',
        content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'PLN Mobile' 
      },
      { 
        type: 'paragraph', 
        text: 'pln mobile adalah' 
      },
    ]
       
    },
    {
        slug: 'recom-gadget',
        category: 'UI/UX',
        image: '/images/uiux2.png',
        title: 'Recom Gadget',
       content: [
      { 
        type: 'heading', 
        level: 2, 
        text: 'Recom Gadget' 
      },
      { 
        type: 'paragraph', 
        text: 'Recom Gadget adalah' 
      },
    ]
       
    },




    // --- Proyek Web Development ---
   {
        slug: 'website-portofolio-pribadi',
        category: 'Web Development',
        image: '/images/web-dev1.png',
        title: 'Aplikasi Web Siabsor - Sistem Absensi & Monitoring Siswa TPQ ',
        liveUrl: 'https://siabsor-werdi.vercel.app/', 
        content: [
            { type: 'paragraph', text: 'Deskripsi proyek tetap ada sebagai cadangan.' }
        ]
    },
    {
        slug: 'website-undangan-digital',
        category: 'Web Development',
        image: '/images/web-dev2.png',
        title: 'website undangan digital dengan Next Js',
        liveUrl: 'https://undangan-digital-nextjs.vercel.app/?to=Arif%20Aji',
        content: [
            { type: 'heading', level: 2, text: 'Proses Desain' },
            { type: 'paragraph', text: 'Deskripsi singkat...' }
        ]
    },
];