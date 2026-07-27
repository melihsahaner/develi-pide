import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menü | Develi Pide Kebap',
  description: 'Develi Pide Kebap menüsü - Pide, kebap, döner ve içecek fiyatları. Ankara İvedik OSB.',
};

export default function MenuPage() {
  return (
    <>
      <style>{`
        .menu-page {
          font-family: 'Montserrat', sans-serif;
          background-color: #0a0a0a;
          color: #e5e5e5;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .menu-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
          z-index: 0;
          pointer-events: none;
        }

        .menu-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1rem;
          position: relative;
          z-index: 1;
        }

        .menu-header {
          text-align: center;
          padding: 2.5rem 1rem 1rem;
          margin-bottom: 2rem;
        }

        .menu-header .brand {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          letter-spacing: 0.15em;
          margin-bottom: 0.25rem;
        }

        .menu-header .brand-sub {
          font-size: 0.7rem;
          color: #d4af37;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .menu-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: white;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .menu-header .divider {
          width: 80px;
          height: 2px;
          background: #d4af37;
          margin: 1rem auto 0.75rem;
        }

        .menu-header .subtitle {
          font-size: 0.85rem;
          color: #9ca3af;
          font-weight: 300;
        }

        .portion-header {
          display: flex;
          justify-content: flex-end;
          gap: 1.5rem;
          padding: 0 0.5rem 0.75rem;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
        }

        .portion-header span {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #d4af37;
          font-weight: 600;
          width: 60px;
          text-align: right;
        }

        .category {
          margin-bottom: 2.5rem;
          animation: menuFadeUp 0.6s ease-out both;
        }

        .category:nth-child(2) { animation-delay: 0.1s; }
        .category:nth-child(3) { animation-delay: 0.2s; }
        .category:nth-child(4) { animation-delay: 0.3s; }
        .category:nth-child(5) { animation-delay: 0.4s; }

        .category-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: #d4af37;
          text-align: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: #d4af37;
        }

        .menu-item {
          display: flex;
          align-items: baseline;
          padding: 0.6rem 0.5rem;
          transition: background 0.2s ease;
          border-radius: 4px;
        }

        .menu-item:hover {
          background: rgba(212, 175, 55, 0.15);
        }

        .item-name {
          font-size: 1rem;
          color: #e5e5e5;
          white-space: nowrap;
        }

        .item-dots {
          flex-grow: 1;
          border-bottom: 1px dotted rgba(212, 175, 55, 0.3);
          margin: 0 12px;
          position: relative;
          top: -4px;
        }

        .item-prices {
          display: flex;
          gap: 1.5rem;
          flex-shrink: 0;
        }

        .item-price {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem;
          color: #d4af37;
          font-weight: 600;
          width: 60px;
          text-align: right;
        }

        .item-price.single {
          width: auto;
        }

        .menu-footer {
          text-align: center;
          padding: 2rem 1rem;
          margin-top: 1rem;
          border-top: 1px solid rgba(212, 175, 55, 0.15);
        }

        .menu-footer .phone {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          color: #d4af37;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          transition: opacity 0.2s;
        }

        .menu-footer .phone:hover { opacity: 0.8; }

        .menu-footer .address {
          font-size: 0.8rem;
          color: #9ca3af;
          max-width: 400px;
          margin: 0 auto;
        }

        .menu-footer .copyright {
          font-size: 0.7rem;
          color: #444;
          margin-top: 1.5rem;
        }

        @keyframes menuFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .menu-header h1 { font-size: 2.2rem; }
          .category-title { font-size: 1.25rem; }
          .item-name { font-size: 0.9rem; }
          .item-price { font-size: 1rem; width: 50px; }
          .item-prices { gap: 1rem; }
          .portion-header { gap: 1rem; }
          .portion-header span { width: 50px; }
        }
      `}</style>

      <div className="menu-page">
        <div className="menu-container">
          {/* Header */}
          <header className="menu-header">
            <div className="brand">DEVELİ</div>
            <div className="brand-sub">Pide &amp; Kebap</div>
            <h1>Menümüz</h1>
            <div className="divider"></div>
            <p className="subtitle">Taş fırından gelen efsane lezzet</p>
          </header>

          {/* Pideler */}
          <div className="category">
            <h2 className="category-title">Pideler</h2>
            <div className="portion-header">
              <span>1</span>
              <span>1.5</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Kıymalı</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">280₺</span>
                <span className="item-price">420₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Kaşarlı</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">280₺</span>
                <span className="item-price">420₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Kuşbaşılı</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">320₺</span>
                <span className="item-price">480₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Karışık</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">320₺</span>
                <span className="item-price">480₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Kuşbaşı + Kaşar</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">340₺</span>
                <span className="item-price">520₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Kıyma + Kaşar</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">300₺</span>
                <span className="item-price">460₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Tavuklu</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">300₺</span>
                <span className="item-price">450₺</span>
              </div>
            </div>
          </div>

          {/* Kebap & Et Çeşitleri */}
          <div className="category">
            <h2 className="category-title">Kebap &amp; Et Çeşitleri</h2>
            <div className="portion-header">
              <span>1</span>
              <span>1.5</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Döner</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">320₺</span>
                <span className="item-price">480₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Pilav Üstü</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">350₺</span>
                <span className="item-price">525₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">İskender</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">350₺</span>
                <span className="item-price">525₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Beyti</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">370₺</span>
                <span className="item-price">550₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Tavuk Şiş – Kanat</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">300₺</span>
                <span className="item-price">450₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Adana</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price">320₺</span>
                <span className="item-price">480₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Kiremit</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">350₺</span>
              </div>
            </div>
          </div>

          {/* Çorbalar */}
          <div className="category">
            <h2 className="category-title">Çorbalar</h2>
            <div className="menu-item">
              <span className="item-name">Mercimek Çorbası</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">100₺</span>
              </div>
            </div>
          </div>

          {/* İçecekler */}
          <div className="category">
            <h2 className="category-title">İçecekler</h2>
            <div className="menu-item">
              <span className="item-name">Ayran</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">40₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Kola – Fanta – Gazoz</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">60₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Soda</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">20₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Su</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">20₺</span>
              </div>
            </div>
          </div>

          {/* Büyük İçecekler */}
          <div className="category">
            <h2 className="category-title">Büyük İçecekler</h2>
            <div className="menu-item">
              <span className="item-name">Litre Kola</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">80₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">1.5 Litre Kola</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">90₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">2.5 Litre Kola</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">100₺</span>
              </div>
            </div>
            <div className="menu-item">
              <span className="item-name">Litre Ayran</span>
              <span className="item-dots"></span>
              <div className="item-prices">
                <span className="item-price single">100₺</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="menu-footer">
            <a href="tel:03953951849" className="phone">395 18 49 – 50</a>
            <p className="address">Develi Pide Kebap, Ostim Mh, 1344. Sk. No:21, 06374 Yenimahalle/Ankara</p>
            <p className="copyright">&copy; 2026 Develi Pide Kebap. Tüm hakları saklıdır.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
