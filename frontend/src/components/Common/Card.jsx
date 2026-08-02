import PropTypes from "prop-types";

function Card({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
        rounded-3xl
        bg-slate-800
        border
        border-slate-700
        shadow-2xl
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;