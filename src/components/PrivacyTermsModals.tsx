import React from 'react';
import { motion } from 'motion/react';
import { X, Shield, BookOpen } from 'lucide-react';

interface PolicyModalProps {
  key?: React.Key;
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#121c2a]/40 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-sm bg-[#f8f9ff] rounded-3xl p-6 shadow-2xl border border-white"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-base-primary" />
            <h3 className="font-extrabold text-base text-base-on-surface">Privacy Policy</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-[#e6eeff] text-[#464555] transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto space-y-3 pr-2 custom-scrollbar text-xs text-[#464555] leading-relaxed">
          <p className="font-semibold text-base-on-surface text-xs">Last Updated: June 2026</p>
          <p>
            Welcome to the Creator Store. Your privacy is paramount. This policy describes how we collect, safeguard, and utilize data when you interact with this link-in-bio app.
          </p>
          <h4 className="font-bold text-base-on-surface text-xs uppercase tracking-wide">1. Information We Collect</h4>
          <p>
            - **Newsletter Emails:** When you submit your email under "Stay in the Loop", we store it securely in your local environment so that the creator can provide early drop notifications.
            - **Mock Purchase details:** When simulating purchases on our catalog modual, we request name, email, and address. This information stays private to your current simulation session and is never tracked externally.
          </p>
          <h4 className="font-bold text-base-on-surface text-xs uppercase tracking-wide">2. Cookies and Cache</h4>
          <p>
            We utilize standard browser LocalStorage to remember your subscription preference so that you do not have to sign up repeatedly on the same device.
          </p>
          <h4 className="font-bold text-base-on-surface text-xs uppercase tracking-wide">3. Contact</h4>
          <p>
            If you have structural questions regarding our modern gear guidelines, please reach the creator at support@creatorstore.com.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 bg-base-primary text-white py-2.5 rounded-xl text-xs font-bold hover:opacity-95 transition"
        >
          I Understand, Continue
        </button>
      </motion.div>
    </div>
  );
}

export function TermsModal({ isOpen, onClose }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#121c2a]/40 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-sm bg-[#f8f9ff] rounded-3xl p-6 shadow-2xl border border-white"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-base-primary" />
            <h3 className="font-extrabold text-base text-base-on-surface">Terms of Service</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-[#e6eeff] text-[#464555] transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto space-y-3 pr-2 custom-scrollbar text-xs text-[#464555] leading-relaxed">
          <p className="font-semibold text-base-on-surface text-xs">Effective Date: June 2026</p>
          <p>
            These Terms govern your usage of the Creator Store landing deck. By browsing our catalog drops or registering for notifications, you agree to these conditions.
          </p>
          <h4 className="font-bold text-base-on-surface text-xs uppercase tracking-wide">1. Simulation Intention</h4>
          <p>
            Many checkout pathways within this application represent optimized simulation flows designed to mimic real-world e-commerce systems. Credit card entries are not required, and no real funds will be exchanged.
          </p>
          <h4 className="font-bold text-base-on-surface text-xs uppercase tracking-wide">2. Permitted Use</h4>
          <p>
            Users are welcome to browse recommended gear categories, buy mock coffees for the creator, and subscribe to the newsletter. Unauthorized crawling, hacking, or spamming is strictly forbidden.
          </p>
          <h4 className="font-bold text-base-on-surface text-xs uppercase tracking-wide">3. Disclaimer</h4>
          <p>
            Products are showcased as representations. Actual availability might vary depending on supply chains and official merchant schedules.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 bg-base-primary text-white py-2.5 rounded-xl text-xs font-bold hover:opacity-95 transition"
        >
          Agree and Close
        </button>
      </motion.div>
    </div>
  );
}
