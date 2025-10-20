// o next permite importar fontes diretamente por ele
import { Prompt } from "next/font/google";

// o "@" significa a pasta "src", isso é definido na instalação do next
import { Aside } from "@/components/Aside";
import "./globals.css";

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

// cria-se uma instância da fonte para definir as propriedades que serão usadas, "subsets" e "display" são importantes
const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

// atributo "suppressHydrationWarning" diz ao React: "Não se preocupe se o HTML do servidor
// e do cliente não baterem 100% nessas tags específicas"
// É uma prática recomendada pelo próprio Next.js quando você usa <html> e <body> manualmente no App Router

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
