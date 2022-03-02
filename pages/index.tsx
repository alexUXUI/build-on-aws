import Head from "next/head";
import Link from "next/link";
import { API_GATEWAY_ICON } from "../icons/api-gateway.icon";
import { CLOUDWATCH_ICON } from "../icons/cloud-watch.icon";
import { EC2_ICON } from "../icons/ec2.icon";
import { IAM_ICON } from "../icons/iam.icon";
import { LAMBDA_ICON } from "../icons/lambda.icon";
import { NAT_ICON } from "../icons/nat-gateway.icon";
import { S3_ICON } from "../icons/s3.icon";
import { SECURITY_GROUP_ICON } from "../icons/security-group.icon";
import { VPC_ICON } from "../icons/vpc.icon";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Build On AWS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
        <h1 className={styles.title}>Build on AWS 👷‍♀️🏗</h1>
        <p className={styles.description}>
          A Developer's guide to Architecting with Amazon's Cloud
        </p>
      </div>
      <main className={styles.main}>
        <h3 className={styles.category}>Networking</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/vpc">
                <h4>VPC</h4>
              </a>
              <VPC_ICON />
            </div>
            <div className={styles.content}>
              <p>Virtual Private Cloud</p>
              <h3>Examples</h3>
              <ul>
                <li>
                  <Link href="/examples/hello-world-node">
                    Hello World Node.js App
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>NAT</h4>
              </a>
              <NAT_ICON />
            </div>
            <div className={styles.content}>
              <p>Network Address Translation</p>
              <h3>Examples</h3>
              <ul>
                <li>
                  <Link href="/examples/private-connection">
                    Private Connection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className={styles.category}>Compute</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/ec2">
                <h4>EC2</h4>
              </a>
              <EC2_ICON />
            </div>
            <div className={styles.content}>
              <p>the Elastic Compute</p>
              <h3>Examples</h3>
              <ul>
                <li>
                  <Link href="/examples/hello-world-node">
                    Hello World Node.js App
                  </Link>
                </li>
                <li>
                  <Link href="/examples/role-based-access">
                    Role Based Access with IAM
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className={styles.category}>Storage</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>S3</h4>
              </a>
              <S3_ICON />
            </div>
            <div className={styles.content}>
              <p>AWS Simple Storage</p>
              <h3>Examples</h3>
              <ul>
                <li>
                  <Link href="/examples/role-based-access">
                    Role Based Access
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>RDS</h4>
              </a>
              <S3_ICON />
            </div>
            <div className={styles.content}>
              <p>Relational DBs</p>
            </div>
          </div>
        </div>
        <h3 className={styles.category}>Serverless</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>Lambda</h4>
              </a>
              <LAMBDA_ICON />
            </div>
            <div className={styles.content}>
              <p>Lambda</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>API Gateway</h4>
              </a>
              <API_GATEWAY_ICON />
            </div>
            <div className={styles.content}>
              <p>API Gateway</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>Cloud Watch</h4>
              </a>
              <CLOUDWATCH_ICON />
            </div>
            <div className={styles.content}>
              <p>Cloud Watch</p>
            </div>
          </div>
        </div>
        <h3 className={styles.category}>Security</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>Security Groups</h4>
              </a>
              <SECURITY_GROUP_ICON />
            </div>
            <div className={styles.content}>
              <p>Security Groups</p>
              <h3>Examples</h3>
              <Link href="/examples/hello-world-node">
                Hello World Node.js App
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.header}>
              <a href="/nat">
                <h4>IAM</h4>
              </a>
              <IAM_ICON />
            </div>
            <div className={styles.content}>
              <p>Identity and Access Management</p>
              <h3>Examples</h3>
              <ul>
                <li>
                  <Link href="/examples/role-based-access">
                    Role Based Access with IAM using EC2 and S3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

{
  /* 

      */
}
