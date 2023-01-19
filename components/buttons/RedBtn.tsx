const RedBtn: React.FC<{
  className?: string;
  label: string;
  click?: () => void;
  link?: string | null;
}> = ({ className, label, click, link }) => {
  return (
    <button
      onClick={click}
      className={`bg-red-600 w-28 h-10 rounded text-white text-base relative ${className}`}
    >
      {label}
      {link && (
        <a
          href={`https://${link}`}
          target="_blank"
          className="absolute w-full h-full opacity-0 left-0 top-0 bg-green-500"
        >
          linki
        </a>
      )}
    </button>
  );
};

export default RedBtn;
