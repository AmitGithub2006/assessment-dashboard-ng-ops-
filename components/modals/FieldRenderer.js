'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FieldRenderer Component
 * Dynamically renders form fields based on configuration
 * 
 * Props:
 * - fields: Array - Array of field configuration objects
 * - values: Object - Current form values
 * - onChange: Function - Callback when field values change
 * 
 * Field config structure:
 * {
 *   id: string (unique identifier),
 *   type: 'text' | 'search' | 'select' | 'textarea' | 'display',
 *   label: string (optional),
 *   value?: string,
 *   placeholder?: string,
 *   options?: Array (for select type),
 *   description?: string,
 *   className?: string,
 *   displayValue?: string (for display type - shows value without input)
 * }
 */
const FieldRenderer = ({ fields = [], values = {}, onChange = () => {} }) => {
  const handleChange = (fieldId, value) => {
    onChange({ ...values, [fieldId]: value });
  };

  const renderField = (field) => {
    const { id, type, label, placeholder, value, options = [], description, className = '', displayValue } = field;
    const currentValue = values[id] ?? value ?? '';

    switch (type) {
      case 'text':
        return (
          <div key={id} className={`mb-4 ${className}`}>
            {label && (
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
            )}
            <input
              type="text"
              value={currentValue}
              onChange={(e) => handleChange(id, e.target.value)}
              placeholder={placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
        );

      case 'search':
        return (
          <div key={id} className={`mb-4 ${className}`}>
            {label && (
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
            )}
            <div className="relative">
              <input
                type="text"
                value={currentValue}
                onChange={(e) => handleChange(id, e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
        );

      case 'select':
        return (
          <div key={id} className={`mb-4 ${className}`}>
            {label && (
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
            )}
            <div className="relative">
              <select
                value={currentValue}
                onChange={(e) => handleChange(id, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none bg-white cursor-pointer"
              >
                <option value="">{placeholder || 'Select option'}</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={id} className={`mb-4 ${className}`}>
            {label && (
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
            )}
            <textarea
              value={currentValue}
              onChange={(e) => handleChange(id, e.target.value)}
              placeholder={placeholder}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            />
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
        );

      case 'display':
        return (
          <div key={id} className={`mb-4 py-2 px-4 bg-gray-50 rounded-lg border border-gray-200 ${className}`}>
            {label && (
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                {label}
              </p>
            )}
            <p className="text-sm text-gray-900 font-medium mt-1">
              {displayValue || currentValue}
            </p>
            {description && (
              <p className="text-xs text-gray-500 mt-2">{description}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {fields.map((field) => renderField(field))}
    </div>
  );
};

export default FieldRenderer;
