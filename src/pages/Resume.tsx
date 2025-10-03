
import cv from "../data/curriculo.json";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

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
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{cv.nome}</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">{cv.resumo}</p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Experiência</h2>
          <div className="space-y-4">
            {cv.experiencia.map((exp: Experiencia, i: number) => (
              <Card key={i} className="">
                <CardHeader>
                  <CardTitle>{exp.cargo} - {exp.empresa}</CardTitle>
                  <span className="text-xs text-muted-foreground">{exp.periodo}</span>
                </CardHeader>
                <CardContent>
                  <p>{exp.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Formação Acadêmica</h2>
          <ul className="space-y-2">
            {cv.formacao.map((form: Formacao, i: number) => (
              <li key={i}>
                <span className="font-medium">{form.curso}</span> - {form.instituicao}
                {form.periodo && <span className="ml-2 text-xs text-muted-foreground">{form.periodo}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
          <ul className="flex gap-2 flex-wrap">
            {cv.habilidades.map((skill: string, i: number) => (
              <li key={i} className="px-2 py-1 bg-accent rounded text-sm font-medium dark:bg-gray-700">{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <ul className="space-y-1">
            <li><b>Telefone:</b> {cv.contato.telefone}</li>
            <li><b>Email:</b> <a href={`mailto:${cv.contato.email}`} className="text-primary underline">{cv.contato.email}</a></li>
            <li><b>LinkedIn:</b> <a href={cv.contato.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary underline">{cv.contato.linkedin}</a></li>
            <li><b>GitHub:</b> <a href={cv.contato.github} target="_blank" rel="noopener noreferrer" className="text-primary underline">{cv.contato.github}</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
