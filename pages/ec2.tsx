import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { EC2_ICON } from "../icons/ec2.icon";

const EC2 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Build on AWS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.grid}>
          <div>
            <h1>
              EC2 <EC2_ICON />
            </h1>
            <p>
              EC2 requires a VPC for connectivity. Everything about an EC2 needs
              to be managed. EC2s can be created from AMIs or Amazon MAchine
              Images. These specify the OS and the instance type. There are
              instance types for all needs. T2 Micro instances are the smallest.
              T2 Medium instances are the middle. T2 Large instances are the
              largest. Cluster placement group for low latecy HPC, partition for
              semi-ditributed, and spread for every instance is on its own
              hardware.
            </p>
          </div>
          <hr />
          <div>
            <h1>EC2 Examples</h1>
            <ul>
              <li>
                <a href="/examples/hello-world-node">Hello World Node</a>
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>EC2 Concerns</h1>
            <ul>
              <li>Networking: how is this EC2 connected/networked?</li>
              <li>Security: Does this have a security group?</li>
              <li>Storage: Elastic Block Storage (EBS)</li>
              <li>
                CPU: How much processing power an instance has. Ex: how many
                Cores
              </li>
              <li>RAM: The amount of random access memory an instance has</li>
              <li>AWS Payment Plans: Spot instance, reserve instance, etc</li>
              <li>Auto Scaling and its policies</li>
              <li>Nature of the Workload: schedule, cant fail, etc.</li>
              <li>Placement groups. Cluster, Partition, Spread</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                List all process running on Linux EC2 server: <code>ps -A</code>
              </li>
              <li>
                Kill process on Linux Server: <code>kill -9 [Process ID]</code>
              </li>
            </ul>
          </div>
          <span>
            <Link href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html">
              Docs
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
};

export default EC2;
