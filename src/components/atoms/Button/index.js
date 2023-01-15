import { Fragment } from "react";
const Button = ({
  children,
  size = "large",
  disable,
  type = "primary",
  className,
  ...props
}) => {
  const sizeClassName = {
    small: "h-8 text-sm rounded-[100px]",
    medium: "h-12 text-base leading-[22px] rounded-[100px]",
    large: "h-14 text-base leading-[22px] rounded-[100px]",
  };
  const variant = {
    primary:
      "bg-primary rounded-[100px] py-2 px-6 text-white hover:bg-greenDark hover:text-gray-300",
    secondary:
      "bg-transparent border border-gray-400 py-2 px-6 rounded-[100px] hover:bg-gray-200",
  };
  const classNameAssign = [sizeClassName[size], variant[type]];

  return (
    <button
      className={classNameAssign.join("")}
      //   className={variant[type]}
      {...props}
      disabled={disable}
    >
      {children ? (
        <span className={`text-center font-semibold `}>{children}</span>
      ) : (
        <Fragment />
      )}
    </button>
  );
};

export default Button;
