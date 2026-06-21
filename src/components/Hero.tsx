import { motion } from 'framer-motion';

const ironReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=80"
          alt="Industrial cafe dark atmosphere"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay layered */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0D0B08 0%, rgba(13,11,8,0.75) 50%, rgba(13,11,8,0.3) 100%)' }} />
        {/* Vignette edges */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13,11,8,0.6) 100%)' }} />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-28 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={ironReveal}
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-6"
            style={{ color: 'var(--color-amber)' }}
          >
            Specialty Coffee · Industrial Space · Jakarta
          </motion.p>

          {/* Headline — Bebas Neue Nike-style */}
          <motion.h1
            variants={ironReveal}
            className="font-display uppercase leading-none mb-8"
            style={{
              fontSize: 'clamp(56px, 10vw, 120px)',
              lineHeight: 0.9,
              color: 'var(--color-text)',
            }}
          >
            Beton.<br />
            Baja.<br />
            <span style={{ color: 'var(--color-amber)' }}>Kopi Yang</span><br />
            Gak Bohong.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={ironReveal}
            className="text-base lg:text-lg max-w-xl mb-10 leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Specialty coffee dari petani lokal, suasana industrial yang jujur, dan WiFi yang kencang. Buat yang serius kerja — atau serius nongkrong.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={ironReveal} className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-200"
              style={{ background: 'var(--color-amber)', color: 'var(--color-bg)' }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-amber-deep)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'var(--color-amber)')}
            >
              Lihat Menu
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-200"
              style={{ border: '1px solid var(--color-hairline)', color: 'var(--color-text)' }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--color-amber)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--color-hairline)')}
            >
              Book Meja Private
            </a>
          </motion.div>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          variants={ironReveal}
          className="mt-16 flex flex-wrap gap-6 lg:gap-10"
        >
          {[
            'Buka Setiap Hari 08.00–23.00',
            'WiFi 100Mbps',
            'Parkir Luas',
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: 'var(--color-amber)' }}
              />
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {stat}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs uppercase tracking-[0.2em] rotate-90 origin-center"
          style={{ color: 'var(--color-text-dim)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--color-amber), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
