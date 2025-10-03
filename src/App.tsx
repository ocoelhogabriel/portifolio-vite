import { Navbar } from "./components/Navbar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-bold text-center">Bem-vindo ao portfólio de Gabriel Coelho!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg md:text-xl mb-2 text-center text-muted-foreground">
              Explore meus projetos, experiência profissional, currículo e formas de contato usando o menu acima.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
