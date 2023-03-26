import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "@/context/app-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div
        className={`flex h-screen items-center justify-center bg-magnolia font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
