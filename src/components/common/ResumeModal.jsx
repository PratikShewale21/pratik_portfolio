import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Mail, X, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

/**
 * ResumeModal: Cyberpunk modal dialog handling the resume unavailable/request state
 * without fabricating false PDF links.
 */
export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060913]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-md bg-[#050f19] border border-[#00e5ff] rounded p-6 sm:p-8 shadow-[0_0_30px_rgba(0,229,255,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            {/* Corner Brackets */}
            <span className="hud-corner hud-tl" />
            <span className="hud-corner hud-tr" />
            <span className="hud-corner hud-bl" />
            <span className="hud-corner hud-br" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-[#00e5ff] hover:text-white hover:bg-[#00e5ff]/20 rounded transition-all focus:outline-none focus:ring-1 focus:ring-[#00e5ff]"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/40 text-[#00e5ff]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="font-rajdhani text-xs tracking-widest text-[#00e5ff] uppercase block">
                  DOCUMENT TELEMETRY
                </span>
                <h3
                  id="resume-modal-title"
                  className="font-orbitron font-bold text-lg text-white tracking-wide"
                >
                  RESUME // STANDBY
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-3 font-inter text-xs sm:text-sm text-slate-300 leading-relaxed my-4 p-4 rounded bg-[#060913]/70 border border-[#00e5ff]/20">
              <div className="flex items-start gap-2 text-[#00e5ff] font-semibold font-rajdhani text-sm">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Status: Under Final Verification</span>
              </div>
              <p>
                Pratik Shewale&apos;s verified curriculum vitae is currently being updated for the upcoming academic cohort.
              </p>
              <p className="text-[#94a3b8] text-xs">
                To request an official copy or discuss opportunities directly, reach out via email:
              </p>
              <div className="font-mono text-xs text-[#00e5ff] bg-[#071220] p-2 rounded border border-[#00e5ff]/25 break-all select-all">
                {PERSONAL_INFO.email}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-rajdhani font-semibold tracking-wider text-[#94a3b8] hover:text-white border border-slate-700 hover:border-slate-500 rounded transition-all"
              >
                Close
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Request%20—%20Pratik%20Shewale`}
                className="px-4 py-2 text-xs font-rajdhani font-semibold tracking-wider text-white bg-[#00e5ff]/25 hover:bg-[#00e5ff]/40 border border-[#00e5ff] rounded shadow-[0_0_12px_rgba(0,229,255,0.4)] flex items-center gap-1.5 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Request Resume
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
