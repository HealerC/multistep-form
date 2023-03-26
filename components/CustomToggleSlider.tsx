type SliderLabelProps = {
  label: string;
  checked: boolean;
  classes?: string;
  handleClick: () => void;
};
function SliderLabel({
  classes,
  label,
  checked,
  handleClick,
}: SliderLabelProps) {
  return (
    <p
      className={`cursor-pointer select-none text-sm font-medium capitalize text-blue-marine-dark transition ${classes} ${
        checked ? "text-blue-marine-dark" : "text-gray-cool"
      }`}
      onClick={handleClick}
    >
      {label}
    </p>
  );
}

type CustomSliderProps = {
  name: string;
  value: string;
  values: [string, string];
  labels: [string, string];
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  disabled?: boolean;
};
export default function CustomToggleSlider({
  name,
  value,
  values,
  labels,
  handleChange,
  disabled,
}: CustomSliderProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <SliderLabel
        classes="mr-5"
        checked={value === values[0]}
        handleClick={
          !disabled
            ? () =>
                handleChange({
                  target: { name, value: values[0] },
                } as React.ChangeEvent<HTMLInputElement>)
            : () => {}
        }
        label={labels[0]}
      />
      <label className="relative inline-block h-5 w-10">
        <input
          type="checkbox"
          className="peer h-0 w-0 opacity-0"
          checked={value === values[1]}
          onClick={() =>
            handleChange({
              target: {
                name,
                value: value === values[0] ? values[1] : values[0],
              },
            } as React.ChangeEvent<HTMLInputElement>)
          }
          disabled={disabled}
        />
        <span className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-[36px] bg-blue-marine-dark transition-all duration-300 before:absolute before:left-[3px] before:bottom-[3px] before:h-3.5 before:w-3.5 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:before:translate-x-5"></span>
      </label>
      <SliderLabel
        classes="ml-5"
        checked={value === values[1]}
        handleClick={() =>
          handleChange({
            target: { name, value: values[1] },
          } as React.ChangeEvent<HTMLInputElement>)
        }
        label={labels[1]}
      />
    </div>
  );
}
