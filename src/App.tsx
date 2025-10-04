import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "./assets/image-avatar.png";
import computerImg from "./assets/computer-4795762.jpg";
import { Navbar } from "./components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Coffee, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-12">
        <div className="w-full flex flex-col items-center mb-6 px-1 sm:px-0">
          <img src={computerImg} alt="Computador" className="w-full max-w-2xl h-32 sm:h-48 md:h-64 object-cover rounded-xl shadow-md mb-4" />
          <Avatar>
            <AvatarImage
              src={avatarImg}
              alt="@ocoelhogabriel"
              className="rounded-full w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover border-4 border-white shadow-lg -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-36 bg-white"
            />
            <AvatarFallback>GC</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full flex justify-center">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-4xl md:text-5xl font-bold text-center flex items-center justify-center gap-2">
                Prazer, Gabriel!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-4">
                Seja muito bem-vindo ao meu espaço! Sou apaixonado por tecnologia, café e desafios que envolvem pessoas e código. Meu foco é backend com Java e Spring Boot, mas adoro criar soluções completas, do banco de dados ao frontend com React e Next.js.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-4">
                Gosto de transformar ideias em sistemas robustos, escaláveis e fáceis de manter. Integrações complexas, APIs REST, WebSockets, bancos de dados e arquitetura limpa fazem parte do meu dia a dia. Sempre busco evoluir, aprender e compartilhar conhecimento.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-4">
                Trabalho em equipe, colaboração e comunicação são essenciais para mim. Acredito que tecnologia só faz sentido quando gera impacto real para pessoas e negócios.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground">
                Vamos tomar um café virtual e conversar sobre tecnologia, carreira ou projetos? Sinta-se à vontade para me chamar no LinkedIn ou GitHub!
              </p>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://www.linkedin.com/in/ocoelhogabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  title="LinkedIn"
                >
                  <Users className="w-8 h-8 text-blue-600" />
                </a>
                <span
                  title="Café sempre presente"
                  className="hover:scale-110 transition-transform"
                >
                  <Coffee className="w-8 h-8 text-amber-700" />
                </span>
                <a
                  href="https://github.com/ocoelhogabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  title="GitHub"
                >
                  <Code2 className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
