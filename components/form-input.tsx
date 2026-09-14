interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | TextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={label.toLowerCase().replace(/\s/g, '-')}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}{required && ' *'}
      </label>
      <div className="relative">
        <input
          id={label.toLowerCase().replace(/\s/g, '-')}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/50 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amazon-500 focus:border-amazon-500 transition-all duration-200 ${error ? 'border-red-500' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${label.toLowerCase().replace(/\s/g, '-')}-error` : undefined}
          required={required}
        />
        {error && (
          <p
            id={`${label.toLowerCase().replace(/\s/g, '-')}-error`}
            className="text-sm text-red-500 mt-1"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}