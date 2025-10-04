import { Navbar } from "@/components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cv from "../data/curriculo.json";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

interface Formacao {
  curso: string;
  instituicao: string;
  periodo?: string;
}

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center px-4 py-12">
        <button
          onClick={handlePrint}
          className="mb-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 print:hidden"
        >
          Imprimir currículo
        </button>
        <div id="curriculo-content" className="w-full max-w-4xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold -mb-4">{cv.nome}</h1>
          <h3 className="text-xl md:text-xl font-medium mb-1">
            {cv.profissao}
          </h3>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contato</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium">Telefone:</span>
                <span className="text-muted-foreground">(19) 99735-7450</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:gabriel.coelho.hgc@outlook.com.br"
                  className="text-primary hover:underline"
                >
                  gabriel.coelho.hgc@outlook.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="font-medium">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/ocoelhogabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/ocoelhogabriel
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <span className="font-medium">GitHub:</span>
                <a
                  href="https://github.com/ocoelhogabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/ocoelhogabriel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Resumo</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              {cv.resumo}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experiência</h2>
            <div className="space-y-4">
              {cv.experiencia.map((exp: Experiencia, i: number) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {exp.cargo} - {exp.empresa}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {exp.periodo}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Formação Acadêmica</h2>
            <ul className="space-y-3">
              {cv.formacao.map((form: Formacao, i: number) => (
                <li key={i} className="border-l-2 border-primary pl-4 py-1">
                  <span className="font-medium text-lg">{form.curso}</span>
                  <p className="text-muted-foreground">{form.instituicao}</p>
                  {form.periodo && (
                    <span className="text-sm text-muted-foreground">
                      {form.periodo}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
            <ul className="flex gap-2 flex-wrap">
              {cv.habilidades.map((skill: string, i: number) => (
                <li
                  key={i}
                  className="px-3 py-1.5 bg-accent rounded-md text-sm font-medium hover:bg-accent/80 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
