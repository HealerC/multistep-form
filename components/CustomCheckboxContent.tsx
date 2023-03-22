type CustomCheckboxContent = {
  heading: string;
  info: string;
  pricing: string;
};
export default function CustomCheckboxContent({
  heading,
  info,
  pricing,
}: CustomCheckboxContent) {
  return (
    <div className="flex grow items-center justify-between">
      <div>
        <p className="font-medium text-blue-marine-dark">{heading}</p>
        <p className="text-xs text-gray-cool">{info}</p>
      </div>
      <p className="text-sm text-blue-standard">{pricing}</p>
    </div>
  );
}
