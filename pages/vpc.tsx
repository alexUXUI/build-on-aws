import ArticleTemplate from "./article-template";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const VPC = () => {
  return (
    <ArticleTemplate title="VPC" description="Virtual Private Cloud">
      <h1>VPC: Virtual Private Cloud</h1>
      <p>
        A VPC is a virtual network that is isolated from the Internet and other
        networks.
      </p>
      <p>
        A VPC can be thought of as your cloud-based data center where all your
        servers, databases, and applications are hosted.{" "}
        <Link href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">
          AWS Documentation
        </Link>
      </p>
      <p></p>
      <img src="/diagrams/vpc.png" alt="VPC" width="100%" />
      <span>
        <h2>AWS Region</h2>
        <p>
          Each VPC belongs to an AWS region. An AWS Region is a geographical
          area where physical AWS resources are located. There are many regions
          around the world. Each region may contain 5 VPCs. This limit can be
          increased by purchasing more AWS resources.
        </p>
      </span>
      <span>
        <h2>CIDR</h2>
        <p>
          CIDR is a notation for specifying an IP address range. It is a string
          of the form x.x.x.x/y, where x.x.x.x is the base address and y is the
          number of bits in the network mask.
        </p>
      </span>

      <span>
        <h2>AWS Availability Zone</h2>
        <p>
          There are multiple Availability zones per region in AWS. This is to
          ensure resilience of your application.
        </p>
      </span>
      <span>
        <h2>AWS Subnets</h2>
        <p>
          Within the VPC network, you can create{" "}
          <Link href="https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html">
            subnets
          </Link>
          . Subnets are isolated networks that can be used to isolate your
          application. Subnets are a range of IP addresses in your VPC. You can
          launch AWS resources into a specified subnet. Use a public subnet for
          resources that must be connected to the internet, and a private subnet
          for resources that won't be connected to the internet.
        </p>

        <h2>Public Subnet</h2>
        <p>
          A public subnet is a subnet that is connected to the Internet. It is
          used to connect your application to the Internet.
        </p>
        <h2>Private Subnet</h2>
        <p>
          A private subnet is a subnet that is not connected to the Internet.
        </p>
      </span>
    </ArticleTemplate>
  );
};

export default VPC;
