import PropTypes from "prop-types";

function Button({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
}) {
  const variants = {
    primary:
      "bg-green-500 hover:bg-green-600 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    outline:
      "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
  };

  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={`
        h-12
        rounded-xl
        font-medium
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "outline",
  ]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;