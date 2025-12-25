'use client';

import React, { useMemo, useState } from 'react';
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
  const [touched, setTouched] = useState({});

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
    setTouched({});
    onClose();
  };

  const computeErrors = (fieldsList, values) => {
    const errs = {};
    fieldsList.forEach((f) => {
      if (['text', 'search', 'select', 'textarea'].includes(f.type)) {
        const vRaw = values[f.id] ?? '';
        const v = typeof vRaw === 'string' ? vRaw.trim() : vRaw;

        if (f.required) {
          const empty = f.type === 'select' ? v === '' : v === '';
          if (empty) {
            errs[f.id] = typeof f.required === 'string' ? f.required : 'This field is required';
            return;
          }
        }

        if (typeof f.minLength === 'number' && String(v).length < f.minLength && v !== '') {
          errs[f.id] = `Minimum length is ${f.minLength}`;
          return;
        }

        if (typeof f.maxLength === 'number' && String(v).length > f.maxLength) {
          errs[f.id] = `Maximum length is ${f.maxLength}`;
          return;
        }

        if (f.pattern) {
          try {
            const re = new RegExp(f.pattern);
            if (!re.test(String(v))) {
              errs[f.id] = 'Invalid format';
              return;
            }
          } catch (_) {
            // ignore invalid pattern
          }
        }
      }
    });
    return errs;
  };

  const errors = useMemo(() => computeErrors(fields, formValues), [fields, formValues]);
  const hasErrors = Object.keys(errors).length > 0;

  const handleAction = (actionId) => {
    const primaryOrDanger = actionButtons.some((b) => b.id === actionId && (b.variant === 'primary' || b.variant === 'danger' || !b.variant));
    if (primaryOrDanger && hasErrors) {
      const allTouched = {};
      fields.forEach((f) => {
        if (['text', 'search', 'select', 'textarea'].includes(f.type)) {
          allTouched[f.id] = true;
        }
      });
      setTouched(allTouched);
      return;
    }
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
                  disabled={(btn.variant === 'primary' || btn.variant === 'danger' || !btn.variant) && hasErrors}
                  className={`${baseClass} ${variantClass} ${((btn.variant === 'primary' || btn.variant === 'danger' || !btn.variant) && hasErrors) ? 'opacity-60 cursor-not-allowed' : ''}`}
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
          errors={errors}
          touched={touched}
          onFieldBlur={(id) => setTouched({ ...touched, [id]: true })}
        />
      }
      footer={renderFooter()}
    />
  );
};

export default GenericModalWrapper;
