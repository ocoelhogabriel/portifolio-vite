import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "./assets/image-avatar.png";
import { Navbar } from "./components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="-mb-6 object-top">
          <Avatar>
            <AvatarImage
              src={avatarImg}
              alt="@ocoelhogabriel"
              className="rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] object-cover"
            />
            <AvatarFallback>GC</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full flex justify-center">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold text-center">
                Bem-vindo ao portfólio de Gabriel Coelho!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg md:text-xl mb-2 text-center text-muted-foreground">
                Explore meus projetos, experiência profissional, currículo e
                formas de contato usando o menu acima.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
