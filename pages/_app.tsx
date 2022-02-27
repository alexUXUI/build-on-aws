import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "../components/nav.component";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />

      <footer className={styles.footer}>
        <a
          href="https://github.com/alexuxui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>☕️</span>
        </a>
      </footer>
    </>
  );
}
export default MyApp;
