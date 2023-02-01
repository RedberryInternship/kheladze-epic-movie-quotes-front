const Backdrop: React.FC<{ click?: () => void }> = ({ click }) => {
  return (
    <div
      onClick={click}
      className="w-screen h-screen top-0 left-0 bg-black z-30 fixed bg-opacity-50"
    ></div>
  );
};

export default Backdrop;
