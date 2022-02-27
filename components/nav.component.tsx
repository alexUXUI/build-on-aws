import Head from "next/head";
import Link from "next/link";
import { EC2_ICON } from "../icons/ec2.icon";
import { NAT_ICON } from "../icons/nat-gateway.icon";
import { VPC_ICON } from "../icons/vpc.icon";
import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";

export const Nav = () => {
  const router = useRouter();

  const selectedRoute = (route: string) => {
    return router.pathname === route ? styles.selected : "";
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <a href="/" className={selectedRoute("/")}>
          <h2>Home</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/vpc" className={selectedRoute("/vpc")}>
          <h2>VPC</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/nat" className={selectedRoute("/nat")}>
          <h2>NAT</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/ec2" className={selectedRoute("/ec2")}>
          <h2>EC2</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/s3" className={selectedRoute("/s3")}>
          <h2>S3</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/lambda" className={selectedRoute("/lambda")}>
          <h2>Lambda</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/cloud-watch" className={selectedRoute("/cloud-watch")}>
          <h2>CW</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/iam" className={selectedRoute("/iam")}>
          <h2>IAM</h2>
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="/iam" className={selectedRoute("/iam")}>
          <h2>Security Groups</h2>
        </a>
      </div>
    </nav>
  );
};
