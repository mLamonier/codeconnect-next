import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return {};
  }
  logger.info("Posts obtidos com sucesso");
  const data = await response.json();
  if (data.length == 0) {
    return {};
  }

  const post = data[0];

  // conversão de markdown para html usando a biblioteca remark e remark-html que o Next sugere
  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

// aqui está diferente do que fez anteriormente, porque o params é focado no App Router do next, então o 'params.slug'
// é por causa das pastas criadas: src/app/posts/[slug] ou https://localhost:3000/posts/[slug]
const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

export default PagePost;
