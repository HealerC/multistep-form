import { MouseEventHandler } from "react";

type ButtonSimpleProps = {
  type: "step" | "back" | "confirm";
  children: React.ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
};
const styles = {
  step: "bg-blue-marine-dark hover:bg-blue-marine-lighter text-white",
  back: "text-gray-cool hover:text-blue-marine-dark",
  confirm: "bg-blue-standard text-white hover:bg-blue-standard-lighter",
};
export default function ButtonSimple({
  children,
  type,
  handleClick,
  classes = "",
}: ButtonSimpleProps) {
  return (
    <button
      className={`${styles[type]} rounded-md px-5 py-2.5 text-sm transition-colors ${classes}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
