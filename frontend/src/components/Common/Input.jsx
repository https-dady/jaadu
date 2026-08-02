import { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Input({
  label,
  type = "text",
  placeholder = "",
  error,
  required = false,
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-200">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className={`
            w-full
            h-12
            rounded-xl
            border
            border-slate-600
            bg-slate-900
            px-4
            text-white
            placeholder:text-slate-500
            focus:border-green-500
            focus:outline-none
            ${type === "password" ? "pr-12" : ""}
            ${className}
          `}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;