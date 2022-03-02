import styles from "../styles/Home.module.css";

const ArticleTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className={styles.banner}>
        <h1 className={styles.title}>👷‍♀️ Serverless 🏗</h1>
        <p className={styles.description}>All things serverless.</p>
      </div>
      <div className={styles.container}>
        <article>{children}</article>
      </div>
    </main>
  );
};

export default ArticleTemplate;
