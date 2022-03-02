import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const NAT = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Build on AWS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.grid}>
          <h1>NAT: Network Address Translation</h1>
          The NAT gateway is a one-way door to the internet. Services in private
          subnets can use the NAT gateway to access the internet. The internet
          cannot access services in private subnets through the NAT gateway
        </div>
        <div>
          NAT are soley to allow provate instances to talk to the internet
        </div>
        <div>
          NAT is a gateway that allows private instances to talk to the internet
          via outbound traffic
        </div>
        <div>NATS needs to go public subnets</div>
        <div>NATS talk to the IGW from the public subnet</div>
        <div>
          NATS need a public IP address. THis is so that it can talk to the
          internet.
        </div>
        <div>The main route table has a route to the internet gatweay</div>
        <div>
          There's also a provate route table that has a route to the NAT gateway
          and a route for the private subnet
        </div>
        <img
          src="/diagrams/nat-ref-arch.png"
          alt="nat ref arch diagram"
          // width="800px"
        />
        <div>
          Use NAT gateway not a NAT Instance. The NAT instance is a lot more old
          school.
        </div>
        <img
          src="/diagrams/nat-gtwy-nat-instance.png"
          alt="nat types"
          // width="800px"
        />
      </main>
    </div>
  );
};

export default NAT;
