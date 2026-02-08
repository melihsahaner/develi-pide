import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { getBlogPost, getAllBlogPosts } from '@/data/blogData';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: 'Blog Yazısı Bulunamadı | Develi Pide Kebap',
        };
    }

    return {
        title: `${post.title} | Develi Pide Kebap Blog`,
        description: post.metaDescription,
        keywords: post.keywords.join(', '),
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    // Convert markdown-style content to HTML-friendly format
    const renderContent = (content: string) => {
        const lines = content.trim().split('\n');
        const elements: React.ReactElement[] = [];
        let key = 0;

        lines.forEach((line, index) => {
            // Skip empty lines
            if (!line.trim()) return;

            // Headers
            if (line.startsWith('# ')) {
                elements.push(
                    <h1 key={key++} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 mt-12 first:mt-0">
                        {line.replace('# ', '')}
                    </h1>
                );
            } else if (line.startsWith('## ')) {
                elements.push(
                    <h2 key={key++} className="text-3xl md:text-4xl font-serif font-bold text-develi-gold mb-5 mt-10">
                        {line.replace('## ', '')}
                    </h2>
                );
            } else if (line.startsWith('### ')) {
                elements.push(
                    <h3 key={key++} className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4 mt-8">
                        {line.replace('### ', '')}
                    </h3>
                );
            } else if (line.startsWith('#### ')) {
                elements.push(
                    <h4 key={key++} className="text-xl md:text-2xl font-serif font-semibold text-develi-khaki mb-4 mt-6">
                        {line.replace('#### ', '')}
                    </h4>
                );
            }
            // Bold text within paragraphs
            else if (line.startsWith('**') && line.endsWith('**')) {
                const text = line.replace(/\*\*/g, '');
                elements.push(
                    <p key={key++} className="text-lg text-white font-semibold mb-4 leading-relaxed">
                        {text}
                    </p>
                );
            }
            // List items
            else if (line.startsWith('- ')) {
                const text = line.replace('- ', '');
                // Check if it contains bold markdown
                const parts = text.split('**');
                if (parts.length > 1) {
                    elements.push(
                        <li key={key++} className="flex items-start mb-3">
                            <i className="fas fa-check text-develi-khaki mt-1.5 mr-3 text-sm"></i>
                            <span className="text-gray-300 leading-relaxed">
                                {parts.map((part, i) =>
                                    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                                )}
                            </span>
                        </li>
                    );
                } else {
                    elements.push(
                        <li key={key++} className="flex items-start mb-3">
                            <i className="fas fa-check text-develi-khaki mt-1.5 mr-3 text-sm"></i>
                            <span className="text-gray-300 leading-relaxed">{text}</span>
                        </li>
                    );
                }
            }
            // Regular paragraphs
            else {
                // Check if it contains bold markdown
                const parts = line.split('**');
                if (parts.length > 1) {
                    elements.push(
                        <p key={key++} className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {parts.map((part, i) =>
                                i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                            )}
                        </p>
                    );
                } else {
                    elements.push(
                        <p key={key++} className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {line}
                        </p>
                    );
                }
            }
        });

        // Wrap consecutive list items in ul
        const grouped: React.ReactElement[] = [];
        let currentList: React.ReactElement[] = [];

        elements.forEach((element) => {
            if (element.type === 'li') {
                currentList.push(element);
            } else {
                if (currentList.length > 0) {
                    grouped.push(
                        <ul key={`list-${grouped.length}`} className="mb-8 space-y-3">
                            {currentList}
                        </ul>
                    );
                    currentList = [];
                }
                grouped.push(element);
            }
        });

        if (currentList.length > 0) {
            grouped.push(
                <ul key={`list-${grouped.length}`} className="mb-8 space-y-3">
                    {currentList}
                </ul>
            );
        }

        return grouped;
    };

    return (
        <>
            <Navbar />

            {/* Hero Section with Featured Image */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.image}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <ScrollReveal>
                        {/* Back to Blog */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-develi-khaki hover:text-develi-gold transition-colors mb-6 text-sm uppercase tracking-wider font-semibold"
                        >
                            <i className="fas fa-arrow-left mr-2"></i>
                            Blog'a Dön
                        </Link>

                        {/* Date */}
                        <time className="block text-develi-khaki text-sm tracking-wider uppercase mb-4">
                            {new Date(post.date).toLocaleDateString('tr-TR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* Blog Content */}
            <article className="py-16 bg-develi-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="prose prose-invert prose-lg max-w-none">
                            {renderContent(post.content)}
                        </div>
                    </ScrollReveal>

                    {/* CTA Section */}
                    <ScrollReveal>
                        <div className="mt-16 p-8 border-2 border-develi-khaki/30 bg-black/40 backdrop-blur-sm text-center">
                            <h3 className="text-2xl md:text-3xl font-serif text-develi-gold mb-4">
                                Develi Pide'yi Keşfedin
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                İvedik OSB'de taş fırın lezzetlerimizi ve mangal kebaplarımızı denemeye hazır mısınız?
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#menu"
                                    className="inline-block border border-develi-khaki bg-develi-khaki text-white hover:bg-develi-gold hover:border-develi-gold transition-all duration-300 py-3 px-8 tracking-widest text-sm uppercase font-semibold"
                                >
                                    Menüyü İncele
                                </Link>
                                <a
                                    href="tel:03953951849"
                                    className="inline-block border border-develi-khaki text-develi-khaki hover:bg-develi-khaki hover:text-white transition-all duration-300 py-3 px-8 tracking-widest text-sm uppercase font-semibold"
                                >
                                    Hemen Ara
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Back to Blog */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-develi-gold hover:text-develi-khaki transition-colors text-sm uppercase tracking-wider font-semibold"
                        >
                            <i className="fas fa-arrow-left mr-2"></i>
                            Tüm Blog Yazılarını Gör
                        </Link>
                    </div>
                </div>
            </article>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.metaDescription,
                        image: post.image,
                        datePublished: post.date,
                        dateModified: post.date,
                        author: {
                            '@type': 'Organization',
                            name: post.author,
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Develi Pide Kebap',
                            logo: {
                                '@type': 'ImageObject',
                                url: '/mehmetsahaner_favicon.PNG',
                            },
                        },
                        keywords: post.keywords.join(', '),
                    }),
                }}
            />

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
