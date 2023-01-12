const Close: React.FC<{ click: () => void }> = ({ click }) => {
  return (
    <svg
      onClick={click}
      className="md:hidden absolute right-5 top-5 cursor-pointer"
      height="30px"
      width="30px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 378.303 378.303"
    >
      <polygon
        fill="#FF3501"
        points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018 
        28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
      />
    </svg>
  );
};

export default Close;
