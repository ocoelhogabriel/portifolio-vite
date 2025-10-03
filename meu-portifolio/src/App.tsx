import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Bem-vindo ao portfólio de Gabriel Coelho!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-center text-muted-foreground">
          Explore meus projetos, experiência profissional, currículo e formas de contato usando o menu acima.
        </p>
      </main>
    </div>
  );
}
