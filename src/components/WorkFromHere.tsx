import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ironFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const checklistItems = [
  'Power outlet di setiap meja',
  'WiFi dedicated untuk laptop (password berbeda dari tamu umum)',
  'Meja bar panjang 8 meter untuk solo worker',
  '3 private booth (bisa booking, maksimal 2 jam)',
  'Printer tersedia (A4, Rp 2k/lembar)',
  'Tidak ada minimum order per jam',
];

export default function WorkFromHere() {
  return (
    <section id="workshop" className="py-24 lg:py-36" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80"
              alt="Working at Ironwood Coffee"
              className="w-full object-cover"
              style={{ aspectRatio: '4/5', filter: 'brightness(0.8) contrast(1.05)' }}
              loading="lazy"
            />
            {/* Floating badge */}
            <div
              className="absolute bottom-8 -right-4 px-6 py-4"
              style={{ background: 'var(--color-amber)' }}
            >
              <p className="font-display text-3xl" style={{ color: 'var(--color-bg)', lineHeight: 1 }}>100</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-bg)' }}>Mbps WiFi</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-amber)' }}>
              Work From Here
            </p>
            <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 0.92, color: 'var(--color-text)' }}>
              Kerja Di Sini?<br />Boleh Banget.
            </h2>
            <p className="mb-10 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Ironwood bukan cafe yang pura-pura welcome laptop tapi stopkontak-nya cuma 2. Kami desain dari awal buat yang kerja sambil ngopi.
            </p>

            {/* Checklist */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-4 mb-10"
            >
              {checklistItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={ironFade}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="shrink-0 mt-0.5"
                  >
                    <Icon
                      icon="solar:check-circle-bold-duotone"
                      width={22}
                      height={22}
                      style={{ color: 'var(--color-amber)' }}
                    />
                  </motion.span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Note */}
            <p
              className="text-xs italic px-4 py-3 border-l-2"
              style={{ color: 'var(--color-text-dim)', borderColor: 'var(--color-amber)' }}
            >
              "Weekday jam 10–16 paling kondusif. Weekend? Ramai — tapi masih bisa kerja."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
