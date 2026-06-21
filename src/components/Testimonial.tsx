import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    quote: 'Kopi single origin-nya legit. Pour over Flores-nya juara, dan baristanya mau jelasin tasting notes tanpa sok.',
    author: '@rizky.works',
    role: 'Coffee Enthusiast',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    quote: 'WFH di Ironwood udah rutinitas Senin–Rabu. Colokan banyak, WiFi kencang, AC pas. Yang penting kopi-nya gak zonk.',
    author: 'Dita',
    role: 'UX Designer',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    quote: 'Konsep industrial tapi gak dingin. Entah kenapa betah banget duduk 5 jam di sini.',
    author: 'Google Review',
    role: '⭐ 5.0',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    quote: 'Workshop sabtu pagi-nya worth it banget. Belajar V60 yang bener, dan kopinya dibawa pulang.',
    author: '@brewingjourney.id',
    role: 'Coffee Workshop Alumni',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80',
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section id="testimonial" className="py-24 lg:py-36" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-amber)' }}>
            Testimonial
          </p>
          <h2 className="font-display uppercase" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.92, color: 'var(--color-text)' }}>
            Kata Mereka.
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-5 gap-12 items-center"
            >
              {/* Quote */}
              <div className="lg:col-span-3">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="var(--color-amber)">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote
                  className="font-display uppercase mb-8"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.1, color: 'var(--color-text)' }}
                >
                  "{reviews[current].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={reviews[current].avatar}
                    alt={reviews[current].author}
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ filter: 'grayscale(30%)' }}
                  />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                      {reviews[current].author}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-dim)' }}>
                      {reviews[current].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative number */}
              <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                <span
                  className="font-display select-none"
                  style={{ fontSize: '240px', lineHeight: 1, color: 'var(--color-surface)', letterSpacing: '-0.05em' }}
                >
                  0{current + 1}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid var(--color-hairline)', color: 'var(--color-text)' }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--color-amber)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--color-hairline)')}
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: '1px solid var(--color-hairline)', color: 'var(--color-text)' }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--color-amber)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--color-hairline)')}
            >
              →
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-4">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? '32px' : '8px',
                    height: '3px',
                    background: i === current ? 'var(--color-amber)' : 'var(--color-hairline)',
                    borderRadius: '2px',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
