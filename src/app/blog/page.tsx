import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { getAllBlogPosts } from '@/data/blogData';

export const metadata: Metadata = {
    title: 'Blog | Develi Pide Kebap - Sanayi Lezzeti ve Ankara Yemek Rehberi',
    description: 'İvedik OSB ve Ankara sanayi bölgelerinde yemek rehberi. Develi Pide ile geleneksel lezzetler, taş fırın pideleri ve kebap çeşitleri hakkında her şey.',
    keywords: 'ivedik osb ne yenir, sanayide ne yenir, ankara sanayi lezzeti, develi pide blog, ankara yemek rehberi',
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-b from-black via-develi-dark to-develi-dark">
                <div className="absolute inset-0 bg-[url('/header.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-4">
                    <ScrollReveal>
                        <span className="text-develi-khaki uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-semibold">
                            Lezzet Rehberi
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Develi Pide <span className="italic text-develi-gold">Blog</span>
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                            İvedik OSB ve Ankara sanayi bölgelerinde lezzet rehberiniz
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-develi-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <ScrollReveal key={post.slug}>
                                <article className="group bg-black/40 backdrop-blur-sm border border-develi-khaki/20 overflow-hidden hover:border-develi-gold/50 transition-all duration-500">
                                    <Link href={`/blog/${post.slug}`}>
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Date */}
                                            <time className="text-develi-khaki text-sm tracking-wider uppercase">
                                                {new Date(post.date).toLocaleDateString('tr-TR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </time>

                                            {/* Title */}
                                            <h2 className="text-2xl font-serif text-white mt-3 mb-4 group-hover:text-develi-gold transition-colors duration-300 line-clamp-2">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                                {post.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div className="flex items-center text-develi-gold group-hover:text-develi-khaki transition-colors duration-300">
                                                <span className="text-sm tracking-widest uppercase font-semibold">
                                                    Devamını Oku
                                                </span>
                                                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="bg-black text-white py-16 border-t border-develi-khaki/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
                        {/* Brand */}
                        <div>
                            <h4 className="text-3xl font-newsreader font-bold text-white mb-2">DEVELİ</h4>
                            <span className="text-develi-khaki tracking-widest text-sm">PİDE & KEBAP</span>
                            <p className="text-gray-500 mt-4 text-sm">
                                Ankara İvedik OSB'de sanayi lezzeti sunan Develi Pide Kebap, geleneksel taş fırın pideleri ve kebaplarıyla hizmet vermektedir.
                            </p>
                        </div>

                        {/* Info */}
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <a href="tel:03953951849" className="flex items-center space-x-3 text-develi-gold hover:text-develi-khaki transition-colors">
                                <i className="fas fa-phone-alt text-xl"></i>
                                <span className="text-2xl font-newsreader">395 18 49 – 50</span>
                            </a>
                            <div className="text-gray-400 text-sm max-w-xs text-center">
                                <i className="fas fa-map-marker-alt text-develi-khaki mr-2"></i>
                                Develi Pide Kebap, Ostim Mh, 1344. Sk. No:21, 06374 Yenimahalle/Ankara
                            </div>

                            {/* Google Reviews & Directions Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                <a
                                    href="https://share.google/fACpOwYHWMQBIPtT9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-develi-khaki text-white hover:bg-develi-gold transition-all px-4 py-2 text-sm font-medium"
                                >
                                    <i className="fas fa-star"></i>
                                    Google Yorumları
                                </a>
                                <a
                                    href="https://www.google.com/maps/dir//Develi+Pide+Kebap,+Ostim+Mh,+1344.+Sk.+No:21,+06374+Yenimahalle%2FAnkara/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14d34a2cd24c708b:0xb8c9f748c9b99e20?sa=X&ved=1t:57443&hl=tr-TR&ictx=111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 border border-develi-khaki text-develi-khaki hover:bg-develi-khaki hover:text-white transition-all px-4 py-2 text-sm font-medium"
                                >
                                    <i className="fas fa-directions"></i>
                                    Yol Tarifi
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-900 mt-12 pt-8 text-center">
                        <p className="text-gray-600 text-xs">
                            &copy; 2026 Develi Pide Kebap. Tüm hakları saklıdır.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
