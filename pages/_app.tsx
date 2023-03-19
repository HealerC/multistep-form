import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "@/context/app-context";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div
        className={`${ubuntu.variable} flex h-screen items-center justify-center bg-magnolia font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
