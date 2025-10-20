import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";

// const post = {
//   id: 1,
//   cover:
//     "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   title: "Introdução ao React",
//   slug: "introducao-ao-react",
//   body: "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   markdown:
//     "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   author: {
//     id: 101,
//     name: "Ana Beatriz",
//     username: "anabeatriz_dev",
//     avatar:
//       "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
//   }
// };

async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return []; // para não interromper a aplicação
  }
  logger.info("Posts obtidos com sucesso");
  return response.json();
}

// para fazer com que o componente renderize o conteúdo no servidor e entregue pro browser pronto
// precisamos definir ele como 'async', pois assim ele consegue esperar a resposta do fetch para poder entregar de forma correta
export default async function Home({ searchParams }) {

  // a prop searchParams do componente Home, é útil para verificar qual os valores da URL, neste caso
  // foi usada para verificar qual "page" estamos atualmente
  // se searchParams.page não for nula, ela recebe o valor que tem, caso for, ela recebe 1, porque é o início mesmo
  const currentPage = searchParams?.page || 1

  // está acontencendo uma atribuição de valores com cada nome das propriedades retornadas pelo .json
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}

//usando o componente Link do next, evita o recarregamento da página que a tag <a> faz
// o <Link> é usado pra links dentro da própria aplicação e a tag <a> para quando vai sair da aplicação

// Query String é composta por pares campo-valor, como "campo=valor", unidos por um "&" e separados da URL base por um "?".