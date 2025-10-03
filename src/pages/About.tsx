import { Navbar } from "@/components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center">Sobre</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg md:text-xl text-center text-muted-foreground">
              Sou Gabriel Coelho, desenvolvedor backend Java/Spring Boot com experiência em integrações complexas, bancos de dados relacionais e práticas modernas de DevOps, testes e monitoramento. Também atuo com React/Next.js no frontend e busco sempre evoluir como arquiteto de software, entregando impacto real para negócios e pessoas.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
