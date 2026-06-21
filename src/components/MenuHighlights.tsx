import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ironFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const categories = ['Coffee', 'Non-Coffee', 'Food'] as const;
type Category = typeof categories[number];

const menu: Record<Category, { name: string; price: string; desc: string; img: string }[]> = {
  Coffee: [
    { name: 'Ironwood Signature Blend', price: 'Rp 38k', desc: 'Espresso base, dark chocolate, hint of smoky', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80' },
    { name: 'Single Origin Pour Over', price: 'Rp 45k', desc: 'Rotasi mingguan, tanya barista hari ini', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80' },
    { name: 'Cold Brew Nitro', price: 'Rp 42k', desc: '20 jam ekstraksi, served on tap', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80' },
    { name: 'Cortado', price: 'Rp 35k', desc: 'Equal parts espresso and steamed milk', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80' },
    { name: 'Flat White', price: 'Rp 38k', desc: 'Double ristretto, silky microfoam', img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80' },
    { name: 'Americano', price: 'Rp 30k', desc: 'Clean, bold, straightforward', img: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800&q=80' },
  ],
  'Non-Coffee': [
    { name: 'Hojicha Latte', price: 'Rp 38k', desc: 'Japanese roasted green tea, nutty & warm', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },
    { name: 'Matcha Ironwood', price: 'Rp 40k', desc: 'Ceremonial grade, no sugar by default', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80' },
    { name: 'Sparkling Yuzu', price: 'Rp 35k', desc: 'Japanese citrus, refreshing & bright', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80' },
    { name: 'Tonic Water Series', price: 'Rp 38k', desc: '3 varian — tanya yang lagi ada hari ini', img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80' },
  ],
  Food: [
    { name: 'Smashed Avocado Toast', price: 'Rp 55k', desc: 'Sourdough, feta, chili flakes', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=800&q=80' },
    { name: 'Ironwood Breakfast Plate', price: 'Rp 75k', desc: 'Eggs, toast, greens, house sausage', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80' },
    { name: 'Banana Foster Waffle', price: 'Rp 62k', desc: 'Caramelized banana, bourbon butter', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80' },
    { name: 'Industrial Burger', price: 'Rp 85k', desc: 'Smashed patty, cheddar, house pickles', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },
    { name: 'Croissant Sandwich', price: 'Rp 58k', desc: 'Ham atau Tuna — pilih sesuai mood', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80' },
    { name: 'Fries & Dip', price: 'Rp 35k', desc: 'Hand-cut, seasoned, house aioli', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80' },
  ],
};

export default function MenuHighlights() {
  const [active, setActive] = useState<Category>('Coffee');

  return (
    <section id="menu" className="py-24 lg:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-amber)' }}>
              Apa Yang Kami Sajiin
            </p>
            <h2 className="font-display uppercase" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.92, color: 'var(--color-text)' }}>
              Menu
            </h2>
            <p className="mt-3 max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
              Tidak ada menu yang gimmick. Semua ada alasannya.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative px-5 py-2 text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-200"
                style={{
                  background: active === cat ? 'var(--color-amber)' : 'transparent',
                  color: active === cat ? 'var(--color-bg)' : 'var(--color-text-muted)',
                  border: `1px solid ${active === cat ? 'var(--color-amber)' : 'var(--color-hairline)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'var(--color-hairline)' }}
          >
            {menu[active].map((item) => (
              <motion.div
                key={item.name}
                variants={ironFade}
                className="group relative overflow-hidden"
                style={{ background: 'var(--color-bg)' }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm leading-snug" style={{ color: 'var(--color-text)' }}>
                      {item.name}
                    </h3>
                    <span className="font-display text-sm shrink-0" style={{ color: 'var(--color-amber)' }}>
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
