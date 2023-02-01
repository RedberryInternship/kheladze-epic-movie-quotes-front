import { useState } from "react";

const InputLogged: React.FC<{ value?: string }> = ({ value }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <input
      type={"text"}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full rounded-md bg-gray-300 h-12  focus:outline-none focus:ring-1 focus:border-blue-300 border box-border text-gray-800 pl-5 placeholder:text-gray-500"
    />
  );
};

export default InputLogged;
