import Link from "next/link";
import { useRouter } from "next/router";

type NavStepProps = {
  stepIndex: number;
  label: string;
  route: string;
};
export default function NavStep({ stepIndex, label, route }: NavStepProps) {
  const router = useRouter();
  return (
    <Link href={route}>
      <div className="group flex">
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
    </Link>
  );
}
