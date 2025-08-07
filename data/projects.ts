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
        src: '/images/giggle.png', 
        alt: 'logo giggle outen' 
      },
      // { 
      //   type: 'paragraph', 
      //   text: 'Giggle outem adalah brand untuk mainan kayu edukatif untuk anak.' 
      // },
    ]
    },

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
      // { 
      //   type: 'paragraph', 
      //   text: 'Jiecos adalah brand skincare' 
      // },
    ]
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
    {
        slug: 'web-katalog-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design4.png',
        title: 'Katalogue Design',
       content: [
    
      { 
        type: 'heading', 
        level: 2, // Ini akan menjadi tag <h2>
        text: 'Katalog Kaos Enzo' 
      },
      { 
        type: 'image', 
        src: '/images/detail-blogaku1.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
      { 
        type: 'paragraph', 
        text: 'kaosenzo adalah' 
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
        type: 'image', 
        src: '/images/detail-kopi-1.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
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
        type: 'image', 
        src: '/images/detail-kopi-1.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
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
        type: 'image', 
        src: '/images/detail-kopi-1.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
      { 
        type: 'paragraph', 
        text: 'Hasil akhirnya adalah sebuah sistem identitas yang fleksibel, dapat diterapkan pada kemasan, menu, media sosial, dan merchandise, menciptakan pengalaman merek yang kohesif.' 
      },
    ]
    },
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
        type: 'image', 
        src: '/images/desing2.jpg', // Gambar detail di dalam "blog"
        alt: 'Proses sketsa logo kopi' 
      },
      { 
        type: 'paragraph', 
        text: 'Hasil akhirnya adalah sebuah sistem identitas yang fleksibel, dapat diterapkan pada kemasan, menu, media sosial, dan merchandise, menciptakan pengalaman merek yang kohesif.' 
      },
    ]
    },
];