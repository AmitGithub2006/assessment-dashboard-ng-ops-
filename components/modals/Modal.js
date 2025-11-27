'use client';

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Generic Modal Component
 * 
 * Props:
 * - isOpen: Boolean - Controls modal visibility
 * - onClose: Function - Called when modal should close
 * - title: String - Modal title
 * - subtitle: String - Optional subtitle/description
 * - content: ReactNode - Main content area
 * - footer: ReactNode - Optional footer content (buttons, etc.)
 * - maxWidth: String - TailwindCSS max-width class (default: max-w-md)
 * - showCloseButton: Boolean - Show X button (default: true)
 * - backdropClickable: Boolean - Close on backdrop click (default: true)
 */
const Modal = ({
  isOpen = false,
  onClose = () => {},
  title = '',
  subtitle = '',
  content = null,
  footer = null,
  maxWidth = 'max-w-md',
  showCloseButton = true,
  backdropClickable = true,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={backdropClickable ? onClose : undefined}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className={`fixed inset-0 flex items-center justify-center z-50 p-4`}
          >
            <div
              className={`bg-white rounded-lg shadow-xl w-full ${maxWidth} max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                  <div className="flex-1">
                    {title && (
                      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    )}
                    {subtitle && (
                      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                    )}
                  </div>
                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      className="ml-4 text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    >
                      <X size={24} />
                    </button>
                  )}
                </div>
              )}

              {/* Content */}
              {content && (
                <div className="p-6">
                  {content}
                </div>
              )}

              {/* Footer */}
              {footer && (
                <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-lg">
                  {footer}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
