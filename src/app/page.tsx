import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center parallax bg-hero text-center px-4"
      >
        <div className="reveal active z-10">
          <p className="text-develi-khaki uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-semibold">
            Taş Fırından Gelen Efsane
          </p>
          <a
            href="https://share.google/fACpOwYHWMQBIPtT9"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-90 transition-opacity"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Develi Lezzetinin <br />{' '}
              <span className="italic text-develi-gold">Ankara'daki Adresi</span>
            </h1>
          </a>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg font-light shadow-black drop-shadow-md">
            Yüzyıllık Develi geleneği, özel taş fırınımızda, en kaliteli malzemelerle yeniden
            hayat buluyor.
          </p>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-develi-dark border-b border-develi-khaki/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-develi-khaki text-sm tracking-widest uppercase font-bold">
              Biz Kimiz?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-6">Hikayemiz</h2>
            <div className="w-24 h-0.5 bg-develi-gold mx-auto mb-10"></div>

            <div className="relative p-8 border border-develi-khaki/20 rounded-sm bg-black/20 backdrop-blur-sm">
              <i className="fas fa-quote-left absolute -top-4 -left-2 text-3xl text-develi-khaki opacity-30"></i>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                1957 yılında bir simit fırını olarak başlayan yolculuğumuz,{' '}
                <span className="text-develi-gold font-serif font-semibold">Mehmet Şahaner</span>'in
                lezzet tutkusu ve ustalığı ile Develi Pide adını alarak büyüdü. İvedik OSB'de açılan
                restoranımız, geleneksel Develi lezzetlerini Ankara'nın kalbine taşıdı.
                Bugün{' '}
                <span className="text-develi-gold font-serif font-semibold">Hüseyin Şahaner</span>{' '}
                ile 2. kuşak olarak devam eden ailemiz, taş fırınımızda pişen pideleri ve mangalda
                hazırlanan kebaplarımızla Develi Lezzeti'nin İvedik OSB'deki tek adresi olmaya devam ediyor.
              </p>

              <i className="fas fa-quote-right absolute -bottom-4 -right-2 text-3xl text-develi-khaki opacity-30"></i>
            </div>

            <div className="mt-12 flex justify-center space-x-8 text-develi-khaki/40">
              <i className="fas fa-utensils text-2xl"></i>
              <i className="fas fa-fire text-2xl"></i>
              <i className="fas fa-star text-2xl"></i>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Özel Lezzetlerimiz Section */}
      <section
        id="specialties"
        className="py-24 bg-develi-dark relative overflow-hidden bg-civikli parallax"
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Section Title */}
          <div className="text-center mb-20">
            <ScrollReveal>
              <span className="text-develi-khaki text-sm tracking-widest uppercase font-bold">
                Özel Tariflerimiz
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mt-2">Özel Lezzetlerimiz</h2>
              <div className="w-24 h-0.5 bg-develi-gold mx-auto mt-6"></div>
            </ScrollReveal>
          </div>

          {/* Develi Cıvıklısı */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Image Grid */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-develi-khaki/30 z-0"></div>
                <img
                  src="/develi cıvıklısı.png"
                  alt="Develi Cıvıklısı"
                  className="relative z-10 w-full h-[500px] object-cover transition-all duration-700 shadow-2xl"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal>
              <div>
                <h3 className="text-develi-gold font-serif text-4xl md:text-5xl mb-6">
                  Develi Cıvıklısı
                </h3>
                <div className="h-1 w-20 bg-develi-khaki mb-8"></div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Kayseri'nin Develi ilçesinden doğan ve Osmanlı saray mutfağına kadar uzanan bu
                  eşsiz lezzet, sıradan bir kıymalı pide değildir. Develi Cıvıklısı, adını
                  pişerken etin ve yağın bıraktığı o muazzam sesten ve kıvamdan alır.
                </p>

                <h4 className="text-white font-serif text-xl mb-4">Sırrı Nedir?</h4>
                <ul className="space-y-4 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">Zırh Kıyması:</strong> Makine değil, elde çift
                      bıçakla (zırh) çekilen taze kuzu eti.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">Taş Fırın:</strong> Meşe odunu ateşinde, çıtır
                      hamur ve sulu iç harcın mükemmel uyumu.
                    </span>
                  </li>
                </ul>

                <p className="text-sm text-develi-khaki italic">
                  &quot;Bir diliminde asırların ustalığını tadacaksınız.&quot;
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Ankara Döneri */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content - Left side for variety */}
            <ScrollReveal>
              <div>
                <h3 className="text-develi-gold font-serif text-4xl md:text-5xl mb-6">
                  Ankara Döneri
                </h3>
                <div className="h-1 w-20 bg-develi-khaki mb-8"></div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Başkentimizin eşsiz lezzeti Ankara Döneri, ustamızın özenle seçtiği ve lezzetini yıllardır
                  koruyan et ile hazırlanır. Geleneksel ustalık ve özel tarifimizle
                  birleştirilen bu lezzet, damakta unutulmaz bir tat bırakır.
                </p>

                <h4 className="text-white font-serif text-xl mb-4">Öne Çıkan Özellikleri</h4>
                <ul className="space-y-4 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">%100 Dana Eti:</strong> Özenle seçilen
                      en kaliteli dana etinden hazırlanır.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">Yaprak Gibi İncelik:</strong> Ustaca
                      yaprak gibi ince dilimler halinde kesilir.
                    </span>
                  </li>
                </ul>

                <p className="text-sm text-develi-khaki italic">
                  &quot;Ankara'nın vazgeçilmez lezzeti, sofranızda.&quot;
                </p>
              </div>
            </ScrollReveal>

            {/* Image Grid - Right side */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-develi-khaki/30 z-0"></div>
                <img
                  src="/döner.png"
                  alt="Ankara Döneri"
                  className="relative z-10 w-full h-[500px] object-cover transition-all duration-700 shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Kebap Çeşitlerimiz */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-32">
            {/* Image Grid */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-develi-khaki/30 z-0"></div>
                <img
                  src="/kebap.png"
                  alt="Kebap Çeşitleri"
                  className="relative z-10 w-full h-[500px] object-cover transition-all duration-700 shadow-2xl"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal>
              <div>
                <h3 className="text-develi-gold font-serif text-4xl md:text-5xl mb-6">
                  Kebap Çeşitlerimiz
                </h3>
                <div className="h-1 w-20 bg-develi-khaki mb-8"></div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mangalın sıcaklığında, ustalarımızın deneyimiyle hazırlanan özel kebaplarımız.
                  Her biri özenle marine edilmiş, en taze etlerden hazırlanır.
                </p>

                <h4 className="text-white font-serif text-xl mb-4">Lezzet Çeşitlerimiz</h4>
                <ul className="space-y-4 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">Adana Kebap:</strong> Acılı ve baharatlı,
                      geleneksel Adana usulü kebap.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">Urfa Kebap:</strong> Acısız, yumuşak ve
                      lezzetli Urfa kebabı.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-develi-khaki mt-1 mr-3"></i>
                    <span>
                      <strong className="text-white">Kiremit Kebap:</strong> Özel kiremitte
                      pişirilen eşsiz kebap deneyimi.
                    </span>
                  </li>
                </ul>

                <p className="text-sm text-develi-khaki italic">
                  "Mangalın ateşinde, ustalığın lezzeti."
                </p>
              </div>
            </ScrollReveal>
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
              {/* Blog Link */}
              <div className="mt-6">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-develi-gold hover:text-develi-khaki transition-colors text-sm font-medium"
                >
                  <i className="fas fa-newspaper"></i>
                  Blog Yazılarımız
                </a>
              </div>
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

