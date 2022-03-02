import styles from "../styles/Home.module.css";

const ArticleTemplate = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <main>
      <div className={styles.banner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.container}>
        <article>{children}</article>
      </div>
    </main>
  );
};

export default ArticleTemplate;
