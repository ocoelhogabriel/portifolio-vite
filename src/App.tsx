import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "./assets/image-avatar.png";
import computerImg from "./assets/computer-4795762.jpg";
import { Navbar } from "./components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full flex flex-col items-center mb-8">
          <img src={computerImg} alt="Computador" className="w-full max-w-2xl h-48 md:h-64 object-cover rounded-xl shadow-md mb-4" />
          <Avatar>
            <AvatarImage
              src={avatarImg}
              alt="@ocoelhogabriel"
              className="rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover border-4 border-white shadow-lg -mt-20 md:-mt-28 lg:-mt-36 bg-white"
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
