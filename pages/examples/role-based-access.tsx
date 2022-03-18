import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const RoleBasedAccess = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EC2 | Hello World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Role based access with IAM</h1>
          <img
            src="/diagrams/role-based-access.png"
            alt="AWS S3"
            // height="559px"
            max-width="800px"
          />
          <ol>
            <li>Create an S3 bucket and upload some files to it.</li>
            <li>
              Login to your EC2 instance and type
              <code>$ aws s3 ls</code>
              you should see
              <code>
                Unable to locate credentials. You can configure credentials by
                running "aws configure".
              </code>
            </li>
            <li>
              Go to IAM and click role. In role, create a new role. Select S3
              readon only access. Click through to the next page. Give the roll
              a name and click create role.
            </li>
            <li>
              Go to EC2, select oyur instance, and click Actions - Security
              Manage - IAM Roles. Then click on the role and select the role you
              created. You should see something like: "Successfully attached
              S3ReadOnlyAccess to instance"
            </li>
            <li>
              Log back into your EC2 instance and type
              <code>$ aws s3 ls</code>
              You should now see the name of you bucket.
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default RoleBasedAccess;
