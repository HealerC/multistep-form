import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextFieldProps = {
  helperText: string | undefined;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  placeholder?: string;
  validationRegister: UseFormRegisterReturn;
  disabled?: boolean;
};

export default function TextFieldHookForm({
  type,
  autoComplete,
  placeholder,
  helperText,
  name,
  label,
  validationRegister,
  disabled,
}: TextFieldProps) {
  return (
    <fieldset className="mb-4 text-blue-marine-dark">
      <div className="mb-1 flex justify-between">
        <label className="text-sm capitalize" htmlFor={name}>
          {label}
        </label>
        <p
          className={`text-sm font-medium text-red-strawberry ${
            !helperText && "invisible"
          }`}
        >
          {helperText ? helperText : "helperText"}
        </p>
      </div>
      <input
        className={`w-full rounded-lg border border-gray-light p-3 text-sm font-medium outline-none transition focus:border-blue-marine-dark ${
          helperText && "border-red-strawberry"
        }`}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...validationRegister}
        id={name}
        required
        disabled={disabled}
      />
    </fieldset>
  );
}
