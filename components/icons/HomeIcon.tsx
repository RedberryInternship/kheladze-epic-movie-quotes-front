const HomeIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      className="w-6 h-6 md:h-8 md:w-8"
      width="31"
      height="28"
      viewBox="0 0 31 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00029 24.9996V11.9996H5.00029V24.9996C5.00029 25.2649 5.10564 25.5192 5.29318 25.7067C5.48072 25.8943 5.73507 25.9996 6.00029 25.9996H24.0003C24.2655 25.9996 24.5199 25.8943 24.7074 25.7067C24.8949 25.5192 25.0003 25.2649 25.0003 24.9996V11.9996H27.0003V24.9996C27.0003 25.7953 26.6842 26.5583 26.1216 27.121C25.559 27.6836 24.7959 27.9996 24.0003 27.9996H6.00029C5.20464 27.9996 4.44158 27.6836 3.87897 27.121C3.31636 26.5583 3.00029 25.7953 3.00029 24.9996ZM25.0003 2.99964V9.99964L21.0003 5.99964V2.99964C21.0003 2.73442 21.1056 2.48007 21.2932 2.29253C21.4807 2.10499 21.7351 1.99964 22.0003 1.99964H24.0003C24.2655 1.99964 24.5199 2.10499 24.7074 2.29253C24.8949 2.48007 25.0003 2.73442 25.0003 2.99964Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5863 0.999635C13.9613 0.624693 14.47 0.414062 15.0003 0.414062C15.5306 0.414062 16.0392 0.624693 16.4143 0.999635L29.7083 14.2916C29.8961 14.4794 30.0015 14.7341 30.0015 14.9996C30.0015 15.2652 29.8961 15.5199 29.7083 15.7076C29.5205 15.8954 29.2658 16.0009 29.0003 16.0009C28.7347 16.0009 28.4801 15.8954 28.2923 15.7076L15.0003 2.41364L1.70829 15.7076C1.52051 15.8954 1.26584 16.0009 1.00029 16.0009C0.734735 16.0009 0.48006 15.8954 0.292287 15.7076C0.104513 15.5199 -0.000976562 15.2652 -0.000976562 14.9996C-0.000976562 14.7341 0.104513 14.4794 0.292287 14.2916L13.5863 0.999635Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeIcon;
