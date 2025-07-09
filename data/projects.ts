// Kita definisikan tipe data untuk setiap proyek agar konsisten
export interface Project {
    slug: string;
    category: 'Graphic Design' | 'UI/UX' | 'Web Development';
    title: string;
    image: string;
    fullDescription: string;
    // Properti opsional
    behanceUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export const allProjects: Project[] = [
    // --- Proyek Desain Grafis ---
    {
        slug: 'logo-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design2.png',
        title: 'Logo Design',
        fullDescription: 'Salah satu project yang saya kerjakan adalah pembuatan logo untuk produk edukatif anak bernama GIGGLE OUTEN. Produk ini berupa busy board mainan edukatif yang dirancang untuk melatih sensorik dan motorik anak-anak. Saya merancang logo yang mencerminkan kesan ceria, aman, dan ramah anak, sesuai dengan karakter produk dan target audiensnya.',
    },

    {
        slug: 'feed-instagram-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design1.png',
        title: 'Feed Instagram Design',
        fullDescription: 'Salah satu project yang sering saya kerjakan adalah membuat feed atau carousel di Instagram. Salah satu project yang saya kerjakan dalah feed Instagram JIECOS BEAUTY. Produk skincare pendatang baru yang memulai brandingnya melalui sosial media ',
    },
    {
        slug: 'post-stories-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design6.png',
        title: 'Post Stories Design',
        fullDescription: 'Salah satu project yang sering saya kerjakan adalah membuat feed atau carousel di Instagram. Salah satu project yang saya kerjakan dalah feed Instagram JIECOS BEAUTY. Produk skincare pendatang baru yang memulai brandingnya melalui sosial media ',
    },
    {
        slug: 'marketpalce-banner-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design5.png',
        title: 'Marketplace Banner Design',
        fullDescription: 'Salah satu project yang sering saya kerjakan adalah membuat feed atau carousel di Instagram. Salah satu project yang saya kerjakan dalah feed Instagram JIECOS BEAUTY. Produk skincare pendatang baru yang memulai brandingnya melalui sosial media ',
    },
    {
        slug: 'web-katalog-design', // <-- TAMBAHKAN INI
        category: 'Graphic Design',
        image: '/images/design4.png',
        title: 'Katalogue Design',
        fullDescription: 'Salah satu project yang sering saya kerjakan adalah membuat feed atau carousel di Instagram. Salah satu project yang saya kerjakan dalah feed Instagram JIECOS BEAUTY. Produk skincare pendatang baru baru yang memulai brandingnya melalui sosial media ',
    },







    // --- Proyek UI/UX ---
    {
        slug: 'desain-ulang-aplikasi-pln-mobile',
        category: 'UI/UX',
        image: '/images/uiux1.png',
        title: 'Redesain Aplikasi PLN Mobile',
        fullDescription: 'Studi kasus ini berfokus pada identifikasi masalah pengguna dalam aplikasi yang ada dan merancang ulang alur transaksi agar lebih cepat dan intuitif. Proses meliputi riset, pembuatan user journey, wireframe, hingga prototipe hi-fi.',
        behanceUrl: 'https://www.behance.net/your-profile', // Ganti dengan link Behance Anda
    },
    {
        slug: 'toko-online-khusus-gadget',
        category: 'UI/UX',
        image: '/images/uiux2.png',
        title: 'Aplikasi jual beli online',
        fullDescription: 'Studi kasus ini berfokus pada identifikasi masalah pengguna dalam aplikasi yang ada dan merancang ulang alur transaksi agar lebih cepat dan intuitif. Proses meliputi riset, pembuatan user journey, wireframe, hingga prototipe hi-fi.',
        behanceUrl: 'https://www.behance.net/your-profile', // Ganti dengan link Behance Anda
    },

    // --- Proyek Web Development ---
    {
        slug: 'website-portofolio-pribadi',
        category: 'Web Development',
        image: '/images/web-dev1.jpg',
        title: 'Aplikasi Web - Daftar Belanja Emak',
        fullDescription: '"Daftar Belanja Emak" adalah aplikasi web front-end interaktif yang berfungsi sebagai daftar belanjaan digital. Didesain dengan antarmuka yang modern dan mudah digunakan, aplikasi ini membantu pengguna untuk mencatat, melacak, dan mengelola daftar barang yang perlu dibeli secara efisien. Proyek ini dibangun sepenuhnya menggunakan teknologi web fundamental: HTML, CSS, dan JavaScript.',
        githubUrl: 'https://github.com/arifaji29/My-List',
        liveUrl: 'https://belanjaemak.vercel.app/',
    },
    {
        slug: 'website-portofolio-pribadi',
        category: 'Web Development',
        image: '/images/web-dev1.jpg',
        title: 'Aplikasi Web - Daftar Belanja Emak',
        fullDescription: '"Daftar Belanja Emak" adalah aplikasi web front-end interaktif yang berfungsi sebagai daftar belanjaan digital. Didesain dengan antarmuka yang modern dan mudah digunakan, aplikasi ini membantu pengguna untuk mencatat, melacak, dan mengelola daftar barang yang perlu dibeli secara efisien. Proyek ini dibangun sepenuhnya menggunakan teknologi web fundamental: HTML, CSS, dan JavaScript.',
        githubUrl: 'https://github.com/arifaji29/My-List',
        liveUrl: 'https://belanjaemak.vercel.app/',
    },
];