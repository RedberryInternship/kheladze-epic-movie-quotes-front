const BlackBtn: React.FC<{ click: () => void; label: string }> = ({
  label,
  click,
}) => {
  return (
    <button
      onClick={click}
      className="w-24 h-10 border border-white text-white rounded bg-inherit"
    >
      {label}
    </button>
  );
};

export default BlackBtn;
