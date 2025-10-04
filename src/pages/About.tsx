import { Navbar } from "@/components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Coffee, Users } from "lucide-react";
import computerImg from "../assets/computer-4795762.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <div className="w-full flex flex-col items-center mb-8">
            <img
              src={computerImg}
              alt="Gabriel trabalhando"
              className="w-full max-w-2xl h-48 md:h-64 object-cover rounded-xl shadow-md mb-4"
            />
          </div>
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-2">
              Prazer, Gabriel!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-4">
              Seja muito bem-vindo ao meu espaço! Sou apaixonado por tecnologia,
              café e desafios que envolvem pessoas e código. Meu foco é backend
              com Java e Spring Boot, mas adoro criar soluções completas, do
              banco de dados ao frontend com React e Next.js.
            </p>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-4">
              Gosto de transformar ideias em sistemas robustos, escaláveis e
              fáceis de manter. Integrações complexas, APIs REST, WebSockets,
              bancos de dados e arquitetura limpa fazem parte do meu dia a dia.
              Sempre busco evoluir, aprender e compartilhar conhecimento.
            </p>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-4">
              Trabalho em equipe, colaboração e comunicação são essenciais para
              mim. Acredito que tecnologia só faz sentido quando gera impacto
              real para pessoas e negócios.
            </p>
            <p className="text-lg md:text-xl text-center text-muted-foreground">
              Vamos tomar um café virtual e conversar sobre tecnologia, carreira
              ou projetos? Sinta-se à vontade para me chamar no LinkedIn ou
              GitHub!
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
      </section>
    </div>
  );
}
