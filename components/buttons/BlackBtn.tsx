const BlackBtn: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="w-24 h-10 border border-white text-white rounded bg-inherit">
      {label}
    </button>
  );
};

export default BlackBtn;
