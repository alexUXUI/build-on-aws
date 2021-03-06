import ArticleTemplate from "../article-template";

const BastionHosts = () => {
  return (
    <ArticleTemplate
      title="Bastion Hosts"
      description="Privately connect to a EC2 through a bastion host."
    >
      <h1>Private Connection 🔌</h1>
      <h2>Overview</h2>
      <p>
        The goal of this exercise is to create an application with two tiers. A
        public tier that is open to the internet and a private tier that is not
        publically accessible. The private tier still needs to be able to send
        messages out to the internet. This is a common pattern because UIs can
        be hosted publically while APIs and DBs will tend to be private.
      </p>
      <h2>Reference Architecture</h2>
      <img src="/diagrams/nat-ref-arch.png" alt="nat types" width="100%" />
      <h2>Steps to Complete</h2>
      <ol>
        <li>
          Create a new subnet: Go to your region of choice and select VPC -
          Subnets. While we are in the Subnet dashboard view there are two
          things we need to notice:
        </li>
        <li>
          The current allocation of IP address ranges to subnets. This is
          important to know so that we know which IP addresses to use when we
          create new subnets. TO do this look at the CIDR block ranges and find
          the higest Octect address in the subnet IP range. In this case the
          answer is 32. Notice that the delta between each of the Subnet IP
          ranges is 16. Using this convention, our new subnet IP range could be
          48.
          <img
            src="/diagrams/private-connection/highest-ip.png"
            alt="create subnet"
            width={"100%"}
          />
        </li>
        <li>
          The second thing to callout here is that all of these subnets are
          currently public subnets. We can tell because when we scroll to the
          right in the table, we see a column called "Auto Assign IPv4 address."
          When this value is set to true, any instance deployed into that subnet
          will be publically accessible to the internet. This is not what we
          want, so we'll create a new subnet with this setting disabled.
          <img
            src="/diagrams/private-connection/auto-assign.png"
            alt="create subnet"
            width={"100%"}
          />
        </li>
        <li>
          Now lets create our private sudnet. Click "Create". In this view,
          select the one and only VPC in this region. Then give the subnet a
          name of "private-app-tier." Finally, select the IP range that you want
          to allocate to this subnet, using the math from the previous step.
          Notice that we are incrementing by 16 to get a octect value of 48.
          <img
            src="/diagrams/private-connection/create-private-subnet.png"
            alt="create subnet"
            width={"100%"}
          />
          You should now see:
          <img
            src="/diagrams/private-connection/created-subnet.png"
            alt="create subnet"
            width={"100%"}
          />
          Scroll over to the left in the table and you will see that the
          "Auto-assign piblic IPv4" setting is disabled. That's it! We created a
          private subnet!
        </li>
        <li>
          Next, let's create two EC2 instances of type T2 micro and deploy one
          into the public subnet and one into the private subnet. Go to the EC2
          dashboard and select "Launch Instance".
        </li>
        <li>
          We'll deploy the first EC2 instance to the public subnet. To do this
          we will select a public subnet in Step 3: Configure Instance Details.
          Aside from this, select all the default options.
          <img
            src="/diagrams/private-connection/select-public-subnet.png"
            alt="create subnet"
            width={"100%"}
          />
          From here, select all the deaults options up to step 6
        </li>
        <li>
          In step 6, we'll create a new security group and call it "SSHAccess".
          After this select "Review and Launch".
          <img
            src="/diagrams/private-connection/ssh-access.png"
            alt="create subnet"
            width={"100%"}
          />
        </li>
        <li>
          In this view click the blue "Launch" button which should open up a
          modal. This is an important step. Make sure to select "create a new
          keypair". In the "key pair name" field, enter "EC2Keys".
          <img
            src="/diagrams/private-connection/ec2-keys.png"
            alt="create subnet"
            width={"100%"}
          />
          After this click download keys and launch instance.
        </li>
        <li>
          Congrats! You created a public EC2 instance and put it in a security
          group. 🎉
        </li>
        <li>
          Lets repeat the same steps for the private EC2 instance, only this
          time we will do two things differently. The first difference is in
          Step 3 make sure to chose the private subnet.
          <img
            src="/diagrams/private-connection/select-private-subnet.png"
            alt="create subnet"
            width={"100%"}
          />
          <br />
          <br />
          And the second difference is that on Step 6 make sure to select the
          SSH Access security group instead of making one, also be sure to
          select the prexisting EC2Keys.
          <br />
          <br />
          🚧 It is very very important to use the same SSH keys on both EC2
          instances or else they will not be able to communicate using agent
          forwarding 🚧
        </li>
        <li>
          The next step here is to SSH into the public EC2 instance
          <img
            src="/diagrams/private-connection/ssh-public-ec2.png"
            alt="create subnet"
            width={"100%"}
          />
        </li>
        <li>
          Now that we're in the public EC2, lets connect to the private EC2. Get
          the private IP of the private EC2. We'll run the exact same command as
          before except this time we'll be in the public EC2, connecting to the
          Private EC2.
          <img
            src="/diagrams/private-connection/ssh-private-ec2.png"
            alt="create subnet"
            width={"100%"}
          />
        </li>
      </ol>
    </ArticleTemplate>
  );
};

export default BastionHosts;
