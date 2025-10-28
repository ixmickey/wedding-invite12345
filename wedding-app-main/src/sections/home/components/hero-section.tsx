'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
// Removed Image import

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');

  return (
    // Centering the content vertically and horizontally
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden flex items-center justify-center">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* --- CHANGE: Replaced "Welcome" and Heading with Blessing --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.2 }} // First animation
            className="mb-8 sm:mb-10" // Added more margin-bottom
          >
            {/* Blessing text replaces the heading */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 italic leading-relaxed"> {/* Adjusted text size/color */}
              By the grace of Allah Ta&apos;ala, Vasila e Panjetan Pak (AS),<br />
              Divine benedictions of Al-Hayyul Muqaddas<br />
              Dr. Syedna Mohammed Burhanuddin (RA), and<br />
              Dr. Syedna Aali Qadr Mufaddal Saifuddin (TUS)
            </p>
            {/* Removed the original H1 and the horizontal line div */}
          </motion.div>
          {/* --- END CHANGE --- */}

          {/* Couple Names (Appear after blessing) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.4 }} // Adjusted delay
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {/* GROOM Name */}
              <div className="text-center flex-shrink-0">
                <div className="px-1">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 break-words hyphens-auto leading-tight"
                    title={couple.groom.fullName}
                  >
                    {couple.groom.name}
                  </h3>
                </div>
              </div>
              {/* Heart */}
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-500 animate-pulse flex-shrink-0 mx-1 sm:mx-2">
                💕
              </div>
              {/* BRIDE Name */}
              <div className="text-center flex-shrink-0">
                <div className="px-1">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 break-words hyphens-auto leading-tight"
                    title={couple.bride.fullName}
                  >
                    {couple.bride.name}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons (Appear after names) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }} // Adjusted delay
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8"
          >
            <motion.button
              onClick={() => onScrollToSection('rsvp')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {t('navigation.rsvp')}
            </motion.button>
            <motion.button
              onClick={() => onScrollToSection('details')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-sm text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
            >
              {t('hero.view-details')}
            </motion.button>
          </motion.div>
        </div>
        {/* Removed Scroll Indicator */}
      </div>
    </div>
  );
};
