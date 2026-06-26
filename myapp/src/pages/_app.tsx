import "@/styles/globals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);

  return <Component {...pageProps} />;
}
