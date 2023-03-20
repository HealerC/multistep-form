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
    <div>
      <Image src={imageSrc} alt="" />
      <div className="mt-7">
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
