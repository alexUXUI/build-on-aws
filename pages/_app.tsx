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
          Made with 🖤 and ☕️ by Alex Bennett.
          <br />© All rights reserved. {new Date().getFullYear()}
        </a>
      </footer>
    </>
  );
}
export default MyApp;
