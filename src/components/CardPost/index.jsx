import { Avatar } from "@/components/Avatar";
import Image from "next/image";
import styles from "./CardPost.module.css";
import Link from "next/link";

// quando importamos uma imagem a partir de uma api no componente <Image/> do next
// precisamos passar a largura e altura via prop para funcionar, pois o componente não consegue acessar a imagem em si
// para que o next "confie" no dowload de outro dominio, é necessário configurar isso no arquivo "next.config.mjs"

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              fill
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
