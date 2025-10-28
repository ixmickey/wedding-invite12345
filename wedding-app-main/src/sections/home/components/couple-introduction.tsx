// src/sections/home/components/couple-introduction.tsx

'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
// Removed Image import

interface CoupleIntroductionProps {
  couple: WeddingConfigType;
  isVisible: boolean;
}

export const CoupleIntroduction = ({ couple }: CoupleIntroductionProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-rose-50/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4">
             {t('couple.title')} {/* "Meet the Happy Couple" */}
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto"></div>
        </motion.div>

        {/* --- Couple Names Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row items-start justify-center gap-2 sm:gap-4 md:gap-6 mb-16 sm:mb-20" // Use items-start to align titles
        >
          {/* GROOM Name & Title */}
          <div className="text-center">
            {/* Name */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 mb-1 sm:mb-2"> {/* Added margin-bottom */}
              {couple.groom.fullName}
            </h3>
            {/* --- ADDED BACK: The Groom Title --- */}
            <p className="text-sm sm:text-base md:text-lg text-blue-600 font-medium">
              {t('couple.the-groom')}
            </p>
             {/* --- END ADDITION --- */}
          </div>

          {/* Heart Divider */}
          {/* --- CHANGE: Added mt-2 sm:mt-3 md:mt-4 to vertically align heart better --- */}
          <div className="text-xl sm:text-2xl md:text-3xl text-rose-500 animate-pulse mx-1 sm:mx-2 mt-2 sm:mt-3 md:mt-4">
          {/* --- END CHANGE --- */}
            💖
          </div>

          {/* BRIDE Name & Title */}
          <div className="text-center">
            {/* Name */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 mb-1 sm:mb-2"> {/* Added margin-bottom */}
              {couple.bride.fullName}
            </h3>
             {/* --- ADDED BACK: The Bride Title --- */}
            <p className="text-sm sm:text-base md:text-lg text-rose-600 font-medium">
              {t('couple.the-bride')}
            </p>
            {/* --- END ADDITION --- */}
          </div>
        </motion.div>
        {/* --- END Couple Names Section --- */}


        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-0"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg border border-white/40">
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-700 italic mb-4">
              {t('couple.love-quote')}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">— Clannad</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};