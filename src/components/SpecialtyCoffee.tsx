import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const cards = [
  {
    icon: 'solar:leaf-bold-duotone',
    title: 'Single Origin',
    desc: 'Petani Gayo, Flores, Toraja. Nama kebunnya kami tulis di board tiap minggu.',
  },
  {
    icon: 'solar:settings-bold-duotone',
    title: 'In-House Roastery',
    desc: 'Probat 5kg di pojok ruangan — bukan dekorasi, itu beneran dipakai.',
  },
  {
    icon: 'solar:cup-hot-bold-duotone',
    title: 'Brew Methods',
    desc: 'Espresso, V60, AeroPress, Chemex, Cold Brew — semua ada, tanya yang mana.',
  },
];

export default function SpecialtyCoffee() {
  return (
    <section id="specialty" className="py-24 lg:py-36 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      {/* BG image faded */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.08) contrast(1.2)' }}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-amber)' }}>
            Specialty Coffee
          </p>
          <h2 className="font-display uppercase mb-5" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.92, color: 'var(--color-text)' }}>
            Kopi Yang Bisa<br />Diceritain.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Kami roast in-house dua kali seminggu. Yang lo minum hari ini, biji kopinya baru dipanggang kemarin.
          </p>
        </div>

        {/* 3 cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-px"
          style={{ border: '1px solid var(--color-hairline)' }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={slideLeft}
              className="p-8 lg:p-10 group transition-colors duration-300"
              style={{
                background: 'var(--color-bg)',
                borderRight: i < cards.length - 1 ? '1px solid var(--color-hairline)' : 'none',
              }}
            >
              <Icon icon={card.icon} width={44} height={44} style={{ color: 'var(--color-amber)' }} className="mb-6 block" />
              <div
                className="w-8 h-0.5 mb-6 transition-all duration-300 group-hover:w-16"
                style={{ background: 'var(--color-amber)' }}
              />
              <h3 className="font-display text-2xl uppercase mb-4" style={{ color: 'var(--color-text)' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Roastery image strip */}
        <div className="mt-12 relative overflow-hidden" style={{ height: '280px' }}>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
            alt="In-house roastery"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.1)', objectPosition: 'center 40%' }}
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(13,11,8,0.3)' }}
          >
            <p className="font-display text-2xl lg:text-4xl uppercase tracking-widest text-center" style={{ color: 'var(--color-text)' }}>
              Roasted Fresh. <span style={{ color: 'var(--color-amber)' }}>Twice a Week.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
