const LikeFilled: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9996 2.6281C24.8756 -6.4959 47.0676 9.4701 15.9996 30.0001C-15.0684 9.4721 7.12357 -6.4959 15.9996 2.6281Z"
        fill="#F3426C"
      />
    </svg>
  );
};

export default LikeFilled;
