import { CheckedInput, ErrorInput, Eye, HiddenEye } from "components/icons";
import { useState } from "react";
import { FieldError } from "react-hook-form";

const Input: React.FC<{
  name: string;
  type: string;
  label: string;
  placeholder: string;
  register: any;
  error?: any;
  isDirty?: boolean;
  backErr?: string;
}> = ({
  name,
  type,
  label,
  placeholder,
  register,
  error,
  isDirty,
  backErr,
}) => {
  const [toggle, setToggle] = useState(type);
  let showError = false;
  if (isDirty && !error) {
    showError = false;
  }
  if (error) {
    showError = true;
  }
  if (isDirty && error) {
    showError = true;
  }

  return (
    <div className="flex flex-col pb-2 relative">
      <label className="mb-2" htmlFor={name}>
        {label}
        <span className="text-red-500"> *</span>
      </label>
      {isDirty && !showError && <CheckedInput />}

      <input
        className={`focus:outline-none focus:ring-1 focus:border-blue-300 border box-border text-gray-800 rounded-md bg-gray-300 h-9 pl-5 placeholder:text-gray-500 
        ${showError && "border-red-600 focus:border-red-600"} 
        ${isDirty && !showError && "border-green-700 focus:border-green-700"} 
        `}
        id={name}
        type={toggle}
        placeholder={placeholder}
        {...register}
      />
      {showError && (
        <>
          <ErrorInput />
          <p className="absolute text-sm -bottom-3 text-red-500">
            {error?.message}
          </p>
        </>
      )}
      {backErr && (
        <p className="absolute text-sm -bottom-3 text-red-500">{backErr}</p>
      )}

      {type === "password" && (
        <div
          className="absolute right-1 bottom-2 cursor-pointer"
          onClick={() => {
            if (toggle === "password") {
              setToggle("text");
            } else if (toggle === "text") {
              setToggle("password");
            }
          }}
        >
          {toggle === "password" ? <HiddenEye /> : <Eye />}
        </div>
      )}
    </div>
  );
};

export default Input;
