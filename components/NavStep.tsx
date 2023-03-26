import { useAppContext } from "@/context/app-context";
import { useRouter } from "next/router";

type NavStepProps = {
  stepIndex: number;
  label: string;
  route: string;
};
export default function NavStep({ stepIndex, label, route }: NavStepProps) {
  const router = useRouter();
  const {
    formHandler: { isValid, getValues, trigger },
    setUserInfo,
  } = useAppContext();

  function handleClick() {
    if (router.asPath === "/your-info")
      if (isValid) {
        const { name, email, phone } = getValues();
        setUserInfo({ name, email, phone });
      } else {
        trigger();
        return;
      }
    router.push(route);
  }

  return (
    <div
      className="group flex cursor-pointer select-none"
      onClick={handleClick}
    >
      <div
        className={`mr-5 flex h-10 w-10 items-center justify-center rounded-full border border-alabaster bg-magnolia font-medium transition-colors ${
          route === router.asPath
            ? "bg-blue-light text-blue-marine-dark"
            : "bg-transparent text-alabaster group-hover:bg-blue-lighter group-hover:text-blue-marine-dark"
        }`}
      >
        {stepIndex}
      </div>
      <div className="hidden uppercase sm:block">
        <p className="text-xs text-gray-light">step {stepIndex}</p>
        <p className="text-sm font-medium text-white">{label}</p>
      </div>
    </div>
  );
}
