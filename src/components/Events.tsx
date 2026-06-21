import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ironFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const events = [
  {
    icon: 'solar:cup-hot-bold-duotone',
    tag: 'Workshop',
    title: 'Coffee Workshop',
    schedule: 'Tiap Sabtu',
    price: 'Rp 150k/orang',
    desc: 'Teori & praktek: brew method, cupping, latte art.',
    details: ['Max 12 peserta', 'Include: 2 gelas kopi + materi', 'Book via WA atau IG'],
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    cta: 'Book Workshop',
  },
  {
    icon: 'solar:music-note-2-bold-duotone',
    tag: 'Live Music',
    title: 'Live Acoustic',
    schedule: 'Tiap Jumat Malam',
    price: 'Gratis',
    desc: 'Mulai 19.30. Rotasi musisi lokal pilihan tim Ironwood.',
    details: ['No cover charge', 'Table reservation recommended', 'Mulai pukul 19:30'],
    img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    cta: 'Reserve Meja',
  },
  {
    icon: 'solar:users-group-rounded-bold-duotone',
    tag: 'Community',
    title: 'Community Table',
    schedule: 'Rabu Malam',
    price: 'Gratis',
    desc: 'Networking informal untuk freelancer & remote worker.',
    details: ['Format ngobrol bebas', 'Bukan seminar', 'Datang sendiri atau bawa teman'],
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    cta: 'Pelajari Lebih',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 lg:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-amber)' }}>
            Events & Community
          </p>
          <h2 className="font-display uppercase" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.92, color: 'var(--color-text)' }}>
            Lebih Dari<br />Sekadar Ngopi.
          </h2>
        </div>

        {/* Event cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-px"
          style={{ border: '1px solid var(--color-hairline)' }}
        >
          {events.map((event, i) => (
            <motion.div
              key={i}
              variants={ironFade}
              className="group flex flex-col"
              style={{ background: 'var(--color-bg)', borderRight: i < events.length - 1 ? '1px solid var(--color-hairline)' : 'none' }}
            >
              {/* Icon header */}
              <div className="px-6 lg:px-8 pt-6 lg:pt-8">
                <Icon icon={event.icon} width={40} height={40} style={{ color: 'var(--color-amber)' }} />
              </div>

              {/* Image */}
              <div className="overflow-hidden mt-4" style={{ aspectRatio: '3/2' }}>
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.75) contrast(1.1)' }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                {/* Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: 'var(--color-surface-raised)', color: 'var(--color-amber)' }}
                  >
                    {event.tag}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'var(--color-text-dim)' }}>
                    {event.schedule}
                  </span>
                </div>

                <h3 className="font-display text-3xl uppercase mb-2" style={{ color: 'var(--color-text)' }}>
                  {event.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {event.desc}
                </p>

                {/* Details */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {event.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-dim)' }}>
                      <span style={{ color: 'var(--color-amber)' }}>—</span> {d}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: '1px solid var(--color-hairline)' }}
                >
                  <span className="font-display text-xl" style={{ color: 'var(--color-amber)' }}>
                    {event.price}
                  </span>
                  <a
                    href="#lokasi"
                    className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1 transition-all duration-200"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {event.cta} →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
