// src/components/InputField.jsx
import React from 'react';
import { LucideIcon } from 'lucide-react'; // Import LucideIcon type for props documentation

/**
 * Reusable InputField component for form inputs.
 * Includes labels, placeholders, error display, and optional icons.
 *
 * @param {object} props - The component props.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.value - The current value of the input.
 * @param {function(string): void} props.onChange - The handler for input value changes. Receives the input's current value.
 * @param {string} [props.type='number'] - The HTML input type (e.g., 'text', 'number', 'password').
 * @param {string} [props.placeholder='0'] - The placeholder text for the input.
 * @param {string} [props.error=''] - An error message to display below the input.
 * @param {LucideIcon} [props.icon] - An optional Lucide icon component to display next to the label.
 */
const InputField = ({ label, value, onChange, type = 'number', placeholder = '0', error = '', icon: Icon }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
        {/* Render icon if provided */}
        {Icon && <Icon size={16} className="mr-2 text-indigo-500" />}
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          // Defensive check: ensure onChange is a function before calling it
          if (typeof onChange === 'function') {
            onChange(e.target.value);
          } else {
            // Log an error if onChange is not a function, useful for debugging
            console.error(`InputField: onChange prop is not a function for label: ${label}. Received:`, onChange);
          }
        }}
        className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ${
          // Apply red border if there's an error, otherwise default focus blue border
          error ? 'border-red-500' : 'focus:border-blue-500'
        }`}
        placeholder={placeholder}
        min="0" // Ensures non-negative numbers for number type inputs
      />
      {/* Display error message if present */}
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
