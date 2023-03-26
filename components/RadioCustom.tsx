import { ChangeEventHandler } from "react";

type RadioCustomProps = {
  checked: boolean;
  name: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
  classes?: string;
  disabled?: boolean;
};

export default function RadioCustom({
  checked,
  handleChange,
  children,
  name,
  value,
  classes,
  disabled,
}: RadioCustomProps) {
  return (
    <label
      className={`block cursor-pointer select-none rounded-lg border border-gray-light p-3 transition-colors hover:border-blue-standard-lighter ${classes} ${
        checked && "border-blue-standard bg-magnolia"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        id={name}
        checked={checked}
        onChange={handleChange}
        className="hidden"
        disabled={disabled}
      />
      {children}
    </label>
  );
}
