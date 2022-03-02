import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "../components/nav.component";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className={styles.pageContainer}>
        <div className={styles.contentWrap}>
          <Component {...pageProps} />
        </div>
        <footer className={styles.footer} id="footer">
          <a
            href="https://github.com/alexuxui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with 🖤 and ☕️ by Alex Bennett.
            <br />© All rights reserved. {new Date().getFullYear()}
          </a>
        </footer>
      </div>
    </>
  );
}
export default MyApp;
