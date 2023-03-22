import Image from "next/image";
import { Plan } from "@/context/interfaces-states";

type RadioContentProps = {
  imageSrc: string;
  plan: Plan;
  pricing: string;
  planDuration: string;
};

export default function CustomRadioContent({
  imageSrc,
  plan,
  pricing,
  planDuration,
}: RadioContentProps) {
  return (
    <div className="flex sm:block">
      <Image src={imageSrc} alt="" />
      <div className="ml-3 sm:ml-0 sm:mt-7">
        <p className="font-medium capitalize text-blue-marine-dark">{plan}</p>
        <p className="mb-1 text-sm text-gray-cool">{pricing}</p>
        <p
          className={`text-xs text-blue-marine-dark ${
            planDuration !== "yearly" && "hidden"
          }`}
        >
          2 months free
        </p>
      </div>
    </div>
  );
}
