import { CheckedInput, ErrorInput, Eye, HiddenEye } from "components/icons";
import { InputProps } from "types";
import { useInput } from "./useInput";

const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  placeholder,
  register,
  error,
  isDirty,
  backErr,
  className,
  languageLabel,
}) => {
  const { toggle, setToggle, pathname, query } = useInput(type);
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

  const eyeClassName =
    pathname === "/profile" ? "right-2 bottom-3" : "right-1 bottom-2";

  return (
    <div className="flex flex-col pb-2 relative w-full ">
      <label className="mb-2" htmlFor={name}>
        {label}
        {pathname === "/" && <span className="text-red-500"> *</span>}
        {pathname === "/movies" && (
          <span className="text-gray-500 absolute right-2 top-4">
            {languageLabel}
          </span>
        )}
      </label>
      {isDirty && !showError && <CheckedInput />}
      <input
        className={`${className} focus:outline-none focus:ring-1 focus:border-blue-300 border box-border ${
          pathname !== "/movies" && pathname !== "/news-feed" && "text-gray-800"
        } rounded-md bg-gray-300 h-9 pl-5 placeholder:text-gray-500 
        ${showError && "border-red-600 focus:border-red-600"} 
        ${isDirty && !showError && "border-green-700 focus:border-green-700"} 
        `}
        id={name}
        type={toggle}
        placeholder={placeholder ? placeholder : ""}
        {...register}
      />

      {!backErr &&
        showError &&
        pathname !== "/movies" &&
        pathname !== "/news-feed" && (
          <>
            <ErrorInput
              className={`${pathname === "/profile" ? "top-12 right-9" : ""}`}
            />
            <p className={`absolute text-sm -bottom-3 text-red-500`}>
              {error?.message}
            </p>
          </>
        )}
      {backErr && (
        <p className="absolute text-sm -bottom-3 text-red-500">{backErr}</p>
      )}

      {type === "password" && (
        <div
          className={`absolute cursor-pointer ${eyeClassName}`}
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
