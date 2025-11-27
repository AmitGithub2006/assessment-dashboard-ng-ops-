'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import FieldRenderer from './FieldRenderer';

/**
 * GenericModalWrapper Component
 * Wraps the Modal component with field rendering capabilities
 * Takes a configuration object and renders fields based on the config
 * 
 * Props:
 * - config: Object - Modal configuration (from dummyJson)
 * - isOpen: Boolean - Controls modal visibility
 * - onClose: Function - Called when modal closes
 * - onAction: Function - Called with (actionId, formValues)
 * - maxWidth: String - TailwindCSS max-width class
 */
const GenericModalWrapper = ({
  config = {},
  isOpen = false,
  onClose = () => {},
  onAction = () => {},
  maxWidth = 'max-w-2xl',
}) => {
  const [formValues, setFormValues] = useState({});

  if (!config.id) {
    return null;
  }

  const {
    title = '',
    subtitle = '',
    fields = [],
    actionButtons = [],
  } = config;

  const handleClose = () => {
    setFormValues({});
    onClose();
  };

  const handleAction = (actionId) => {
    onAction(actionId, formValues);
  };

  // Render action buttons
  const renderFooter = () => {
    if (actionButtons.length === 0) {
      return null;
    }

    return (
      <div className="flex gap-3 justify-between">
        {actionButtons
          .filter((btn) => btn.variant === 'secondary')
          .map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleAction(btn.id)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium"
            >
              {btn.label}
            </button>
          ))}
        <div className="flex gap-3">
          {actionButtons
            .filter((btn) => btn.variant !== 'secondary')
            .map((btn) => {
              const baseClass =
                'px-6 py-2 rounded-lg font-medium transition';
              const variantClass =
                btn.variant === 'primary'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : btn.variant === 'danger'
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

              return (
                <button
                  key={btn.id}
                  onClick={() => handleAction(btn.id)}
                  className={`${baseClass} ${variantClass}`}
                >
                  {btn.label}
                </button>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      subtitle={subtitle}
      maxWidth={maxWidth}
      showCloseButton={true}
      backdropClickable={true}
      content={
        <FieldRenderer
          fields={fields}
          values={formValues}
          onChange={setFormValues}
        />
      }
      footer={renderFooter()}
    />
  );
};

export default GenericModalWrapper;
