interface FormButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function FormButton({
  children,
  type = 'submit',
  variant = 'primary',
  loading = false,
  disabled = false,
  onClick,
}: FormButtonProps) {
  const baseClasses = 'flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200';
  
  const variantClasses = variant === 'primary'
    ? 'bg-amazon-600 text-white hover:bg-amazon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazon-500 disabled:opacity-50 disabled:cursor-not-allowed'
    : 'border border-gray-600 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <span>Sending...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}