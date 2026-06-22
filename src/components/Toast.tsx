import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-4">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-card flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/50 shadow-xl bg-white/90"
          >
            <div className="w-8 h-8 rounded-xl bg-base-primary/10 flex items-center justify-center text-base-primary flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-base-primary" />
            </div>
            <p className="text-xs font-bold text-base-on-surface leading-tight">
              {message}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
