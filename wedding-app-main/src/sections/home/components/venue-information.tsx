'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { generateMapLink } from '@/lib/wedding-utils';
import { useSearchParams } from 'next/navigation'; // <-- 1. Import useSearchParams

interface VenueInformationProps {
 venue: WeddingConfigType['venue'];
}

export const VenueInformation = ({ venue }: VenueInformationProps) => {
 const { t } = useTranslation('home');
 const [ref, inView] = useInView({
   triggerOnce: true,
   threshold: 0.2,
 });

 // <<< Ensure there is exactly one blank line above this comment
 // --- 2. Get Search Params ---
 const searchParams = useSearchParams();
 const inviteesParam = searchParams.get('invitees');
 // Default to 1 if param is missing, not a number, or less than 1
 const inviteesCount = parseInt(inviteesParam || '1', 10);
 const validInviteesCount = isNaN(inviteesCount) || inviteesCount < 1 ? 1 : inviteesCount;
 // --- END ---

 return (
   <div ref={ref} className="py-20 px-4 bg-white">
     <div className="max-w-6xl mx-auto">
       {/* Section Header (remains the same) */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
         transition={{ duration: 0.8 }}
         className="text-center mb-16"
       >
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4">
           {t('venue.location-title')}
         </h2>
         <div className="w-24 h-px bg-rose-400 mx-auto"></div>
         <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
           {t('venue.location-subtitle')}
         </p>
       </motion.div>

       {/* Ceremony Venue */}
       <div className="grid grid-cols-1 gap-12 max-w-xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg border border-purple-100"
         >
           <div className="text-center mb-8">
             <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
               <span className="text-white text-3xl">⛪</span>
             </div>
             <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-2">
               {t('venue.ceremony-time')}
             </h3>
             <div className="w-16 h-px bg-purple-400 mx-auto"></div>
           </div>

           {/* --- Adjusted space-y --- */}
           <div className="space-y-4"> {/* Reduced space-y slightly */}
             {/* --- END --- */}
             <div className="text-center">
               <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                 {venue.ceremony.name}
               </h4>
               <p className="text-sm sm:text-base md:text-lg text-gray-600"> {/* Removed mb-4 */}
                 {venue.ceremony.address}
               </p>
             </div>

             {/* --- 3. Added Invitees Count Display --- */}
             <div className="text-center">
               <p className="font-medium text-gray-800 text-sm sm:text-base">
                 Invitees
               </p>
               <p className="text-purple-600 font-semibold text-sm sm:text-base">
                 ({validInviteesCount})
               </p>
             </div>
             {/* --- END --- */}

             {/* Time Box */}
             <div className="inline-block bg-white/60 rounded-lg px-4 py-2 shadow-sm text-center w-full"> {/* Made block and centered text */}
               <p className="font-medium text-gray-800 text-sm sm:text-base"> {/* Added label */}
                 {t('details.time')}
               </p>
               <p className="text-purple-700 font-semibold text-sm sm:text-base"> {/* Changed font weight */}
                 {venue.ceremony.time}
               </p>
             </div>

             <div className="bg-white/50 rounded-2xl p-6 space-y-4">
               <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
                 {t('venue.ceremony-details')}
               </h5>
               <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                 <p>• {t('venue.arrive-early')}</p>
                 <p>• {t('venue.unplugged')}</p>
                 <p>• {t('venue.parking')}</p>
                 <p>• {t('venue.wheelchair')}</p>
               </div>
             </div>

             <button
               onClick={() =>
                 window.open(generateMapLink(venue.ceremony.name), '_blank')
               }
               className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
             >
               {t('venue.view-map')}
             </button>
           </div>
         </motion.div>
       </div>

       {/* Transportation Info (remains the same) */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
         transition={{ duration: 0.8, delay: 0.6 }}
         className="mt-16 text-center"
       >
         {/* ... rest of the transportation section ... */}
         <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 max-w-3xl mx-auto border border-rose-100">
           <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
             <span className="mr-2">🚐</span>
             {t('venue.transportation')}
           </h4>
           <p className="text-gray-600 mb-4 text-sm sm:text-base">
             {t('venue.shuttle-service')}
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600">
             <div className="bg-white/50 rounded-lg p-4">
               <p className="font-medium">Directions:</p>
               <p>Use any map application to find the venue easily.</p>
               <p>Click &quot;View on Map&quot; above.</p>
             </div>
             <div className="bg-white/50 rounded-lg p-4">
               <p className="font-medium">{t('venue.alternative')}</p>
               <p>{t('venue.taxi-uber')}</p>
               <p>{t('venue.public-parking')}</p>
             </div>
           </div>
         </div>
       </motion.div>
     </div>
   </div>
 );
};
