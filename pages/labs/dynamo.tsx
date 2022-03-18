import ArticleTemplate from "../article-template";

const DynamoLab = () => {
  return (
    <ArticleTemplate
      title="Dynamo Lab"
      description="Designing a good Dynamo Table"
    >
      <h1>Overview</h1>
      <p>
        DynamoDB is a highly scalable noSQL database. Unlike relational
        databases, DynamoDB does not have a schema nor does it seek to normailze
        its data into many tables. Instead, data is modeled in Dynamo using
        Single Table Design principals.
      </p>
      <br />
      <p>
        At the heart of Single Table Design and its ability to scale is the
        primary key. The primary key is the only required field and it is used
        to identify a record. The primary key is made up of two parts: the
        partition key and the sort key. also used to group, partition, and sort
        the records.
      </p>
      <br />
      <p>
        There's the partitions that we create in DynamoDB and there's the
        partitions that DynamoDB creates for us. We create partitions by using
        the primary key. Dynamo DB creates partitions by hashing the primary key
        and then putting the record in a partition based on the hash. This is
        the key to DynamoDB scaling. DynamoDB scales based on the number of
        partitions. Each partition can have up to 1 million records or 10GB of
        data. DynamoDB scales up and down based on the number of partitions.
        Finding the data in these partitions is very fast with a 0(1) access
        time. Unlike Cassandra DB, DynamoDB handles the data partitioning for
        you behind the scenes so that you dont have to manage it. In fact,
        DynamoDBs hashing algorithm is not OSS.
      </p>
      <br />
      <p>A dynamo DB Query will return all items in a partition.</p>
      <br />
      <p>
        Secondary Indexes can be created on the base table to allow more
        flexible queries.
      </p>
      <br />
      <p>
        limitations: With these improvements, you can think less about DynamoDB
        partitions. As long as you are fitting within the partition throughput
        limit, you don't need to worry about balancing your partitions.
      </p>
      <h1>Dynamo Lab ⚡️</h1>
      <p>
        The goal of this exercise is to build a DynamoDB Todos table. Read this
        awesome overview: https://www.alexdebrie.com/posts/dynamodb-partitions/
      </p>
      <h2>Reference Architecture</h2>
      <img src="/diagrams/dynamo/Dynamo-Single-Table-Design.png" width="100%" />
      <h2>Steps to Complete</h2>
      <ol>
        <li>
          Go to the AWS console and create a new DynamoDB table. Name the table
          Todos.
        </li>
        <li>Create a partition key and a sort key:</li>
        <li>
          Why do I need a partition key? DynamoDB stores data as groups of
          attributes, known as items. Items are similar to rows or records in
          other database systems. DynamoDB stores and retrieves each item based
          on the primary key value, which must be unique. Items are distributed
          across 10-GB storage units, called partitions (physical storage
          internal to DynamoDB). Each table has one or more partitions, as shown
          in the following illustration. For more information, see Partitions
          and Data Distribution in the DynamoDB Developer Guide.
        </li>
        <li>
          <img
            src="/diagrams/private-connection/highest-ip.png"
            alt="create subnet"
            width={"100%"}
          />
        </li>
      </ol>
    </ArticleTemplate>
  );
};

export default DynamoLab;
