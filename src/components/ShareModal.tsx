import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Copy, Check, Twitter, Facebook, MessageSquare, Send, QrCode } from 'lucide-react';

interface ShareModalProps {
  key?: React.Key;
  onClose: () => void;
  onShowSuccessToast: (message: string) => void;
}

export default function ShareModal({ onClose, onShowSuccessToast }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      onShowSuccessToast("Profile link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
      onShowSuccessToast("Could not auto-copy. Feel free to copy from the browser address bar!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#121c2a]/40 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-sm bg-[#f8f9ff] rounded-3xl p-6 shadow-2xl border border-white"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-extrabold text-lg text-base-on-surface">Share Creator Profile</h3>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-xl hover:bg-[#e6eeff] text-[#464555] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code and link display */}
        <div className="flex flex-col items-center text-center space-y-4 mb-6">
          <div className="p-4 bg-white rounded-2xl border border-[#dee9fc] shadow-sm flex flex-col items-center">
            {/* Real Dynamically Generated QR Code */}
            <div className="w-32 h-32 bg-white rounded-xl relative flex items-center justify-center p-1 border border-[#dee9fc] overflow-hidden">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(shareUrl)}`} 
                alt="QR Code"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[11px] text-[#777587] font-semibold mt-2 uppercase tracking-wide">Scan to view link</span>
          </div>

          <div className="w-full">
            <span className="text-xs font-bold text-[#464555] block text-left mb-1.5">Direct URL</span>
            <div className="flex gap-2">
              <input 
                readOnly
                type="text" 
                value={shareUrl}
                className="flex-1 bg-[#e6eeff]/60 border border-[#dee9fc] text-xs font-mono text-[#3525cd] py-2.5 px-3 rounded-xl focus:outline-none"
              />
              <button 
                onClick={handleCopy}
                className="bg-base-primary hover:bg-[#4d44e3] active:scale-95 text-white p-2.5 rounded-xl transition flex items-center justify-center"
              >
                {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Simulated Networks */}
        <div>
          <span className="text-xs font-bold text-[#464555] block mb-2.5 uppercase tracking-wider">Quick Send</span>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { 
                icon: <Twitter className="w-4 h-4 text-[#1da1f2]" />, 
                name: 'X / Twitter', 
                brand: 'twitter',
                url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Check out this official online catalog!')}`
              },
              { 
                icon: <Facebook className="w-4 h-4 text-[#1877f2]" />, 
                name: 'Facebook', 
                brand: 'facebook',
                url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
              },
              { 
                icon: <MessageSquare className="w-4 h-4 text-[#25d366]" />, 
                name: 'WhatsApp', 
                brand: 'whatsapp',
                url: `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this catalog: ' + shareUrl)}`
              },
              { 
                icon: <Send className="w-4 h-4 text-[#0088cc]" />, 
                name: 'Telegram', 
                brand: 'telegram',
                url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Check out this catalog!')}`
              }
            ].map(net => (
              <a 
                key={net.brand}
                href={net.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  onShowSuccessToast(`Opening ${net.name}...`);
                  onClose();
                }}
                className="flex flex-col items-center justify-center py-2.5 px-0.5 bg-white hover:bg-[#e6eeff] border border-[#dee9fc] rounded-xl transition-all active:scale-95 cursor-pointer hover:border-base-primary/30"
              >
                {net.icon}
                <span className="text-[7.5px] font-extrabold text-[#464555] mt-1.5 tracking-tighter leading-none text-center w-full uppercase block">
                  {net.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
