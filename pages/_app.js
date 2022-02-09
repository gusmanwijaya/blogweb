import "../styles/globals.css";
import AOS from "aos";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}
