import React from "react";
import Link from "next/link";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
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
        <main>{children}</main>
      </div>
    </>
  );
}
