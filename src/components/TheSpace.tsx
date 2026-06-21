import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const ironFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const gallery = [
  { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80', alt: 'Main floor industrial bar area', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80', alt: 'Mezzanine with view below', span: '' },
  { src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80', alt: 'Private booth corner', span: '' },
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80', alt: 'Outdoor terrace', span: '' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80', alt: 'Bar detail and espresso machine', span: '' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Coffee brewing close up', span: '' },
];

const facilities = [
  { icon: 'solar:sofa-2-bold-duotone', label: '200 Seat Capacity', desc: 'Komunal, individual, sofa, bar stool' },
  { icon: 'solar:socket-bold-duotone', label: 'Power Outlet Everywhere', desc: 'Laptop welcome, tidak ada drama colokan' },
  { icon: 'solar:home-wifi-angle-bold-duotone', label: 'WiFi 100Mbps', desc: 'Untuk kerja beneran, bukan sekadar klaim' },
  { icon: 'solar:garage-bold-duotone', label: 'Parkir 40 Mobil', desc: 'Basement + outdoor' },
  { icon: 'solar:leaf-bold-duotone', label: 'Smoking Area Terpisah', desc: 'Outdoor, berventilasi baik' },
  { icon: 'solar:camera-bold-duotone', label: 'Photography Friendly', desc: 'Ring light boleh, tripod boleh, flash — minta izin dulu' },
];

export default function TheSpace() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="space" className="py-24 lg:py-36" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-amber)' }}>
            The Space
          </p>
          <h2 className="font-display uppercase" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.92, color: 'var(--color-text)' }}>
            The Space
          </h2>
          <p className="mt-4 max-w-lg" style={{ color: 'var(--color-text-muted)' }}>
            600 m² di dua lantai. Expose brick, steel beam, kayu reclaimed, dan cahaya yang pas.
          </p>
        </div>

        {/* Gallery grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-20"
        >
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              variants={ironFade}
              className={`relative overflow-hidden cursor-pointer group ${img.span}`}
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'brightness(0.85) contrast(1.05)' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(13,11,8,0.4)' }}
              >
                <svg className="w-8 h-8" style={{ color: 'var(--color-text)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ border: '1px solid var(--color-hairline)' }}
        >
          {facilities.map((f) => (
            <motion.div
              key={f.label}
              variants={ironFade}
              className="p-6 lg:p-8"
              style={{ background: 'var(--color-surface)', borderRight: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}
            >
              <Icon icon={f.icon} width={36} height={36} style={{ color: 'var(--color-amber)' }} className="mb-3 block" />
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: 'var(--color-text)' }}>
                {f.label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
            style={{ background: 'rgba(13,11,8,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-iron)', color: 'var(--color-text)' }}
              onClick={() => setLightbox(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
