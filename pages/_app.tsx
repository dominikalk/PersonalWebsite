import "../styles/globals.css";
import type { AppProps } from "next/app";
import HomeProvider from "providers/home.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeProvider>
      <Component {...pageProps} />
    </HomeProvider>
  );
}
