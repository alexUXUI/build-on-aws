import ArticleTemplate from "../article-template";

const HelloWorldNode = () => {
  return (
    <ArticleTemplate
      title="EC2 | Hello World"
      description="Create a Node.js Server on EC2"
    >
      <h1>EC2 Node.js hello world!</h1>
      <p>
        In this example, we are going to create an EC2 instance, attach it to a
        security group, and a subnet. Then we will install Node.js on it and run
        a hello world application on port 3000. We will then update the security
        group to allow traffic from the internet to the port.
      </p>
      <img src="/diagrams/AWS-EC2-1.png" alt="AWS EC2" width="100%" />
      <ol>
        <li>Launch instance: go to EC2 dashboard and select launch insatnce</li>
        <li>
          Choose an Amazon Machine Image (AMI). Select: Amazon Linux 2 AMI (HVM)
          - Kernel 5.10, SSD Volume Type
        </li>
        <li>
          Choose an Instance Type. Select: t2.micro, then hit configure details.
        </li>
        <li>
          Configure Instance Details. Select AZ "a". Then click Add Storage
        </li>
        <li>Add Storage. Click through to add tags</li>
        <li>
          Add Tags. Add any tags you want. Click configure secuirty group.
        </li>
        <li>
          Configure Security Group. Create a new security group. Name it
          "GeneralWebAccess". Give it a description. We'll come back to this.
          Click review and launch.
        </li>
        <li>
          Create a new key pair. Name is something descriptive. Download the
          Keys and select "Launch".
        </li>
        <li>In the instace details page click "Connect".</li>
        <li>
          Copy the command under SSH connection method. Should be somehting
          like: <code>chmod 400 [yourkeysfile].pem</code>
        </li>
        <li>
          Copy paste the second command under SSH into your terminal. Should be
          something like:
          <code>
            ssh -i "WebAppServerTwoKeys.pem"
            ec2-user@ec2-3-96-207-52.ca-central-1.compute.amazonaws.com
          </code>
        </li>
        <li>
          Once in the server, we need to update the software with
          <code>sudo yum update</code>
        </li>
        <li>
          Once in the server, we need to install node. Follow these
          instructions:
          https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
        </li>
          <li>
          Install Git to downloa the Node.js code onto the server
          <code>$ sudo yum install git</code>
          <code>$ git clone </code>
          https://github.com/alexUXUI/simple-ec2-server
        </li>
         <li>
          Cd into the folder and start the process
          <code>$ cd simple-ec2-server</code>
          <code>$ npm run start</code>
          you should the output:
          <code>
            simple-ec2-server@1.0.0 start
            <br /> node index.js
          </code>
        </li>
         <li>
          Now, if we test out the hello world app by finding the the public IP
          address in the EC2 details page andding port :3000 to the URL, we
          should see an error page saying "This site can’t be reached". This is
          beacuse our Security Group, attached to the EC2 instance is denying
          internet traffic from accessing the EC2 instance.
        </li>
        <li>
          Go back to the securit group we have for this instance and notice that
          it is only configured to allow SSH traffic in on port 22. In order to
          make this instance accessible to the internet, we need to add some
          custo TCP rules.
        </li>
        <li>
          Click edit inbound rules. Add a new rule, select "Custom TCP". Enter
          3000 for the port range because this is where the Node.js Express app
          is runing. Then select the "Anywhere IPV4 DNS" ans "Save Rules".
        </li>
        <li>
          Finally, now get the public IPV4 address of your instance. Take the
          "s" off of the https, and add 3000 to the end of your URL. Your final
          URL should look something like:
          {/* <code>http://ec2-x-xx-xxx-xx.region.compute.amazonaws.com:3000/</code> */}
        </li>
        <li>Visit the URL and you should see: "Hello World" 🎉</li> */}
      </ol>
      <h2>Part 2 Linus iptable IP mapping</h2>
      <p>Credit to: https://gist.github.com/kentbrew/776580</p>
      <ol>
        <li>
          <code>npm install pm2@latest -g</code>
        </li>
        <li>
          Run pm2 startup script: This will daemonize pm2 and initialize it on
          system reboots.
          <code>$ pm2 start index.js</code>
          Learn more here: https://pm2.keymetrics.io/docs/usage/startup
        </li>
        <li>
          Edit the index.js file and do
          <code>$ pm2 restart index.js</code>
        </li>
        <li>
          First, I listed the rules currently running on the NAT (Network
          Address Translation) table:
          {/* <code>[ec2-user@ip-XX-XXX-XX-X ~]$ sudo iptables -t nat -L</code> */}
        </li>
        <li>
          {/* <code>
            [ec2-user@ip-XX-XXX-XX-X ~]$ sudo iptables -t nat -A PREROUTING -p
            tcp --dport 80 -j REDIRECT --to-ports 8000
          </code> */}
          and then list again
          <code>[ec2-user@ip-XX-XXX-XX-X ~]$ sudo iptables -t nat -L</code>
        </li>
        <li>
          type this to get meta data
          {/* <code>curl http://169.254.169.254/latest/meta-data/</code> */}
        </li>
      </ol>
    </ArticleTemplate>
  );
};

export default HelloWorldNode;
