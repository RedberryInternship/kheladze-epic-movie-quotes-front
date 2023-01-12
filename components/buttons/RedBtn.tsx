const RedBtn: React.FC<{
  className?: string;
  label: string;
  click?: any;
}> = ({ className, label, click }) => {
  return (
    <button
      onClick={click}
      className={`bg-red-600 w-28 h-10 rounded text-white text-base ${className}`}
    >
      {label}
    </button>
  );
};

export default RedBtn;
