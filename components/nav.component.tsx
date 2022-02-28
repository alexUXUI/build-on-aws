import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
import { useMemo } from "react";

const NavItems = (selectedRoute: Function) => [
  <div className={styles.navItem}>
    <a href="/" className={selectedRoute("/")}>
      <h2>Home</h2>
    </a>
  </div>,
  <div className={styles.navItem}>
    <a href="/vpc" className={selectedRoute("/vpc")}>
      <h2>Networking</h2>
    </a>
  </div>,
  <div className={styles.navItem}>
    <a href="/nat" className={selectedRoute("/nat")}>
      <h2>Compute</h2>
    </a>
  </div>,
  <div className={styles.navItem}>
    <a href="/ec2" className={selectedRoute("/ec2")}>
      <h2>Storage</h2>
    </a>
  </div>,
  <div className={styles.navItem}>
    <a href="/s3" className={selectedRoute("/s3")}>
      <h2>Serverless</h2>
    </a>
  </div>,
  <div className={styles.navItem}>
    <a href="/lambda" className={selectedRoute("/lambda")}>
      <h2>Security</h2>
    </a>
  </div>,
];

export const Nav = () => {
  const router = useRouter();

  const selectedRoute = (route: string) => {
    return router.pathname === route ? styles.selected : "";
  };

  const items = useMemo(() => NavItems(selectedRoute), [router.pathname]);

  return (
    <nav className={styles.nav}>
      {items.map((Item, index) => (
        <span key={index}>{Item}</span>
      ))}
    </nav>
  );
};
