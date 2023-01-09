const RedBtn: React.FC<{ className?: string; label: string }> = ({
  className,
  label,
}) => {
  return (
    <button
      className={`bg-red-600 w-28 h-10 rounded text-white text-base ${className}`}
    >
      {label}
    </button>
  );
};

export default RedBtn;
