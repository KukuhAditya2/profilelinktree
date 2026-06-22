/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { CREATOR_PROFILE, PRODUCTS } from './data';
import { ModalType } from './types';
import ShareModal from './components/ShareModal';
import Toast from './components/Toast';
import { PrivacyModal, TermsModal } from './components/PrivacyTermsModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>('none');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setSuccessToast(message);
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center relative overflow-x-hidden selection:bg-base-primary-fixed selection:text-base-primary">
      {/* Interactive Floating Background Elements */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-base-primary-fixed/30 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-base-secondary-container/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Column Wrapper - Simulating dynamic mobile layout on desktop */}
      <div className="w-full max-w-[480px] min-h-screen flex flex-col justify-between bg-[#f8f9ff]/40 shadow-[0_0_50px_rgba(49,35,205,0.03)] backdrop-blur-3xl pb-8 relative z-10 border-x border-[#dee9fc]/20">
        
        {/* Sticky AppBar */}
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 border-b border-[#e6eeff]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#006c49] rounded-full animate-pulse" />
            <span className="text-[10px] font-extrabold text-[#006c49] tracking-wider uppercase">Official Store</span>
          </div>
          
          <h1 className="font-bold text-sm text-base-primary tracking-tight">
            {CREATOR_PROFILE.handle}
          </h1>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveModal('share')}
            className="text-base-on-surface-variant hover:text-base-primary p-2 rounded-xl hover:bg-[#e6eeff] transition-all"
            aria-label="Share profile"
            id="btn-share-profile"
          >
            <Share2 className="w-4.5 h-4.5" />
          </motion.button>
        </header>

        {/* Content Stack */}
        <main className="flex-1 pt-12 pb-8 px-6 flex flex-col items-center">
          
          {/* Profile Card Block (Highly Polished E-commerce Redesign without Profile Pic) */}
          <section className="flex flex-col items-center text-center mb-10 w-full animate-fade-in">
            {/* Elegant Store Brand Icon */}
            <div className="w-16 h-16 bg-gradient-to-tr from-base-primary to-base-primary-light text-white rounded-[20px] flex items-center justify-center shadow-xl shadow-base-primary/10 mb-5 relative border-2 border-white">
              <ShoppingBag className="w-7 h-7" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#6cf8bb] rounded-full border-2 border-white" />
            </div>

            <div className="inline-flex items-center gap-1.5 bg-base-primary/5 border border-base-primary/10 px-3 py-1 rounded-full text-xs font-bold text-base-primary">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Solusi Kebotakan & Brewok Maksimal</span>
            </div>

            <h2 className="text-3xl font-black text-base-on-background tracking-tight mt-4">
              {CREATOR_PROFILE.name}
            </h2>
            
            <p className="text-sm text-base-on-surface-variant font-medium max-w-[340px] mt-2.5 leading-relaxed">
              {CREATOR_PROFILE.bio}
            </p>
          </section>

          {/* Modern Sales Link List (Image on Side, Linktree Style) */}
          <section className="w-full flex flex-col gap-4.5 mb-8" id="sales-link-list">
            {PRODUCTS.map(item => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="glass-card flex gap-4 p-4 rounded-2xl hover:bg-white text-left transition-all cursor-pointer border border-white/85 shadow-[0_4px_15px_-3px_rgba(49,35,205,0.02)] group relative overflow-hidden"
                id={`btn-product-${item.id}`}
              >
                {/* Image side */}
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#e6eeff]/60 border border-[#dee9fc] relative flex items-center justify-center">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                    alt={item.title}
                    src={item.image}
                  />
                </div>

                {/* Info side */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9px] font-black tracking-wider uppercase bg-base-primary/5 text-base-primary px-2 py-0.5 rounded border border-base-primary/10">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-[#121c2a] text-sm tracking-tight leading-tight mt-1.5 group-hover:text-base-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-base-on-surface-variant font-medium mt-1 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <span className="text-[10px] font-bold text-[#006c49] mt-2 flex items-center gap-0.5 group-hover:gap-1 transition-all">
                    <span>Order Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </section>

        </main>

        {/* Footer Blocks */}
        <footer className="flex flex-col items-center gap-4.5 w-full pt-8 pb-6 text-center select-none relative overflow-hidden">
          {/* Creator Watermark visual */}
          <span className="font-black text-6xl tracking-widest text-[#3525cd]/5 select-none block lg:text-7xl">
            DROPSHOP
          </span>
          
          <div className="flex gap-5 relative z-10">
            <button 
              onClick={() => setActiveModal('privacy')}
              className="text-xs font-bold text-base-outline hover:text-base-primary hover:underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-xs font-bold text-base-outline hover:text-base-primary hover:underline transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <p className="text-xs font-bold text-base-outline tracking-wider relative z-10 opacity-75">
            © 2026 Bebas Botak. All rights reserved.
          </p>
        </footer>

      </div>

      {/* MODAL CONTROLLER DRAWERS */}
      <AnimatePresence>
        {/* Share profile overlay */}
        {activeModal === 'share' && (
          <ShareModal 
            key="drawer-share"
            onClose={() => setActiveModal('none')}
            onShowSuccessToast={showToast}
          />
        )}

        {/* Privacy overlay */}
        {activeModal === 'privacy' && (
          <PrivacyModal 
            key="drawer-privacy"
            isOpen={true}
            onClose={() => setActiveModal('none')}
          />
        )}

        {/* Terms overlay */}
        {activeModal === 'terms' && (
          <TermsModal 
            key="drawer-terms"
            isOpen={true}
            onClose={() => setActiveModal('none')}
          />
        )}
      </AnimatePresence>

      {/* Floating elegant Toast Notifications */}
      <Toast 
        message={successToast} 
        onClose={() => setSuccessToast(null)} 
      />
    </div>
  );
}
