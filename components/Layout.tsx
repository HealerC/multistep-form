import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/app-context";
import NavStep from "./NavStep";
import styles from "../styles/Layout.module.css";

const routePaths = [
  { route: "/your-info", label: "your info" },
  { route: "/select-plan", label: "select plan" },
  { route: "/add-ons", label: "add-ons" },
  { route: "/summary", label: "summary" },
];

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const {
    loading,
    error,
    confirm,
    isConfirmed,
    setUserInfo,
    formHandler: { getValues, trigger, isValid },
  } = useAppContext();

  const router = useRouter();

  function handlePrevious() {
    // const presentIndex = routePaths.indexOf(router.asPath);
    const presentIndex = routePaths.findIndex(
      (path) => path.route === router.asPath
    );
    router.push(routePaths[presentIndex - 1].route);
  }
  function handleNext() {
    if (isLastRoute) {
      confirm();
      return;
    }
    if (isFirstRoute) {
      if (isValid) {
        const { name, email, phone } = getValues();
        setUserInfo({ name, email, phone });
      } else {
        trigger();
        return;
      }
    }
    const presentIndex = routePaths.findIndex(
      (path) => path.route === router.asPath
    );
    router.push(routePaths[presentIndex + 1].route);
  }

  const isFirstRoute = router.asPath === routePaths[0].route;
  const isLastRoute = router.asPath === routePaths[routePaths.length - 1].route;

  return (
    <>
      <Head>
        <title>Multi-step form</title>
        <meta
          name="description"
          content="Multi-step form, A frontendmentor challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="flex h-3/4 w-4/6 rounded-lg bg-red-500 p-3">
        <nav className={`${styles.navBgImage} mr-3 shrink-0 rounded-lg`}>
          <ul className="pt-6 pl-6 pr-14">
            {routePaths.map((routePath, index) => (
              <li key={routePath.route} className="mb-7">
                <NavStep
                  stepIndex={index + 1}
                  route={routePath.route}
                  label={routePath.label}
                />
              </li>
            ))}
          </ul>
        </nav>

        <main>
          {loading ? (
            <>Loading...</>
          ) : error ? (
            <>Error</>
          ) : (
            <>
              {children}

              <div className="bg-orange-300">
                {!isFirstRoute && (
                  <button onClick={handlePrevious}>Go Back</button>
                )}
                {!isConfirmed && (
                  <button onClick={handleNext}>
                    {isLastRoute ? "Confirm" : "Next Step"}
                  </button>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
