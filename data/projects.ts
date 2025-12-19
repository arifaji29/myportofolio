// Kita definisikan tipe data untuk setiap proyek agar konsisten

type ContentBlock = 
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string };
  
export interface Project {
  slug: string;
  category: 'Graphic Design' | 'UI/UX' | 'Web Development';
  title: string;
  image: string; // Ini akan menjadi gambar utama/thumbnail
  content: ContentBlock[]; // Ganti fullDescription dengan ini
  // Properti opsional
  githubUrl?: string;
  liveUrl?: string;
}

export const allProjects: Project[] = [
    // --- Proyek Desain Grafis ---

    // --- Desain Logo ---
    {
        slug: 'logo-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/banner-logo.png',
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
        image: '/images/katalog-kaos.png',
        title: 'Tshirt Catalogue Design',
        content: [
      
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'katalog kaosenzo.com' 
      },
      { 
        type: 'image', 
        src: '/images/katalog-enzo.png', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
    
    ]


    // --- Desain Stories ---

    },
    {
        slug: 'post-stories-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design6.png',
        title: 'Post Stories Design',
        content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Enzocafedia Stories' 
      },
      { 
        type: 'image', 
        src: '/images/detail-kopi-1.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
      { 
        type: 'paragraph', 
        text: 'Enzoacafedia adalah brand' 
      },
    ]
    },
    {
        slug: 'marketpalce-banner-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design5.png',
        title: 'Marketplace Banner Design',
        content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Enzcocafedia Banner Shopee' 
      },
      { 
        type: 'image', 
        src: '/images/detail-kopi-1.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
      { 
        type: 'paragraph', 
        text: 'Shopee adalah' 
      },
    ]
    },





    // --- Proyek UI/UX ---
    {
        slug: 'desain-ulang-aplikasi-pln-mobile',
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
        slug: 'toko-online-khusus-gadget',
        category: 'UI/UX',
        image: '/images/uiux2.png',
        title: 'Aplikasi jual beli online',
       content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
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
        image: '/images/web-dev1.jpg',
        title: 'Aplikasi Web - Daftar Belanja Emak',
        githubUrl: 'https://github.com/arifaji29/My-List',
        liveUrl: 'https://belanjaemak.vercel.app/',
        content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Proses Desain' 
      },
      { 
        type: 'paragraph', 
        text: 'Hasil akhirnya adalah sebuah sistem identitas yang fleksibel, dapat diterapkan pada kemasan, menu, media sosial, dan merchandise, menciptakan pengalaman merek yang kohesif.' 
      },
    ]
    },
    {
        slug: 'website-undangan-digital',
        category: 'Web Development',
        image: '/images/web-dev1.jpg',
        title: 'website undangan digital dengan Next Js',
        githubUrl: 'https://github.com/arifaji29/undangan-digital-nextjs',
        liveUrl: 'https://undangan-digital-nextjs.vercel.app/?to=Arif%20Aji',
        content: [
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Proses Desain' 
      },
      { 
        type: 'paragraph', 
        text: 'Hasil akhirnya adalah sebuah sistem identitas yang fleksibel, dapat diterapkan pada kemasan, menu, media sosial, dan merchandise, menciptakan pengalaman merek yang kohesif.' 
      },
    ]
    },
];