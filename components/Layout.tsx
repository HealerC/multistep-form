import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/app-context";

const routePaths = ["/your-info", "/select-plan", "/add-ons", "/summary"];

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const { loading, error, confirm, isConfirmed } = useAppContext();
  const router = useRouter();

  function handlePrevious() {
    const presentIndex = routePaths.indexOf(router.asPath);
    router.push(routePaths[presentIndex - 1]);
  }
  function handleNext() {
    if (isLastRoute) {
      confirm();
      return;
    }
    const presentIndex = routePaths.indexOf(router.asPath);
    router.push(routePaths[presentIndex + 1]);
  }

  const isFirstRoute = routePaths.indexOf(router.asPath) === 0;
  const isLastRoute =
    routePaths.indexOf(router.asPath) === routePaths.length - 1;

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
      <div>
        <nav>
          <ul>
            <li>
              <Link href={`${routePaths[0]}`}>your info</Link>
            </li>
            <li>
              <Link href={`${routePaths[1]}`}>select plan</Link>
            </li>
            <li>
              <Link href={`${routePaths[2]}`}>add-ons</Link>
            </li>
            <li>
              <Link href={`${routePaths[3]}`}>summary</Link>
            </li>
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
