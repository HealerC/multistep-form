import { ChangeEvent } from "react";

type CheckboxCustomProps = {
  children: React.ReactNode;
  name: string;
  value: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
export default function CheckboxCustom({
  children,
  name,
  value,
  checked,
  handleChange,
  disabled,
}: CheckboxCustomProps) {
  return (
    <div
      className={`mb-4 flex cursor-pointer select-none rounded-lg border border-gray-light p-3 transition sm:p-4 ${
        checked && "border-blue-standard bg-magnolia"
      }`}
      onClick={
        !disabled
          ? () =>
              handleChange({
                target: {
                  name,
                  value,
                },
              } as ChangeEvent<HTMLInputElement>)
          : () => {}
      }
    >
      <div className="flex items-center justify-center pr-3 sm:pr-5">
        <label className="group relative block h-5 w-5 cursor-pointer select-none">
          <input
            type="checkbox"
            className="peer absolute h-0 w-0 cursor-pointer opacity-0"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
          />
          <span className="absolute top-0 left-0 h-5 w-5 rounded border border-gray-light after:absolute after:left-[7px] after:top-[3px] after:hidden after:h-[10px] after:w-[5px] after:rotate-45 after:border-r-2 after:border-b-2 after:border-white group-hover:bg-gray-light peer-checked:border-0 peer-checked:bg-blue-standard peer-checked:after:block"></span>
        </label>
      </div>
      {children}
    </div>
  );
}
