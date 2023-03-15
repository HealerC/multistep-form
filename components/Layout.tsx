import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useAppContext } from "@/context/app-context";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const { loading } = useAppContext();
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
              <Link href="/your-info">your info</Link>
            </li>
            <li>
              <Link href="/select-plan">select plan</Link>
            </li>
            <li>
              <Link href="/add-ons">add-ons</Link>
            </li>
            <li>
              <Link href="/summary">summary</Link>
            </li>
          </ul>
        </nav>

        <main>
          {loading ? (
            <>Loading...</>
          ) : (
            <>
              {children}
              <div className="bg-orange-300">
                <h2>What's going on</h2>
                <button>Go Back</button>
                <button>Next step</button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
