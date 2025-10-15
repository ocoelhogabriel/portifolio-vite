import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Coffee, Github, Linkedin, Mail, Phone } from "lucide-react";
import avatarImg from "../assets/image-avatar.png";
import computerImg from "../assets/laptop-1846277.jpg";
import { Navbar } from "../components/navibar";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-[#18181b] dark:via-[#23232a] dark:to-[#18181b]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-12 w-full overflow-x-auto">
        <div className="w-full flex flex-col items-center mb-6 px-1 sm:px-0">
          <img
            src={computerImg}
            alt="Computador"
            loading="lazy"
            className="w-full max-w-2xl h-32 sm:h-48 md:h-64 object-cover rounded-xl shadow-md mb-4"
          />
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-full border-4 border-primary shadow-xl bg-white dark:bg-[#23232a] p-1"
              style={{ boxShadow: "0 0 0 8px #e0e7ff, 0 4px 32px #0002" }}
            >
              <Avatar>
                <AvatarImage
                  src={avatarImg}
                  alt="@ocoelhogabriel"
                  className="rounded-full w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover"
                />
                <AvatarFallback>GC</AvatarFallback>
              </Avatar>
            </motion.div>
            <div className="mt-4 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary dark:text-blue-400 drop-shadow-lg">
                Gabriel Coelho
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground dark:text-gray-300 mt-1">
                Engenheiro de Software • Java • Backend Java & Spring Boot
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl space-y-8 container mx-auto">
          {/* Redes sociais */}
          <div className="w-full flex justify-center mb-8">
            <div className="flex gap-6 bg-white/80 dark:bg-[#23232a]/80 rounded-xl shadow p-4">
              <a
                href="https://github.com/ocoelhogabriel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Gabriel Coelho"
                className="group"
                tabIndex={0}
              >
                <Github className="w-8 h-8 text-primary group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ocoelhogabriel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Gabriel Coelho"
                className="group"
                tabIndex={0}
              >
                <Linkedin className="w-8 h-8 text-primary group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://wa.me/5519997357450"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all focus:outline-none focus:ring"
                aria-label="Abrir WhatsApp para (19) 99735-7450"
                tabIndex={0}
              >
                <Phone className="w-8 h-8 text-primary group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:gabriel.coelho.hgc@outlook.com.br"
                className="text-primary hover:underline break-all focus:outline-none focus:ring"
                aria-label="Enviar email para gabriel.coelho.hgc@outlook.com.br"
                tabIndex={0}
              >
                <Mail className="w-8 h-8 text-primary group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <Card className="w-full max-w-2xl dark:bg-[#18181b] dark:text-white">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-4xl md:text-5xl font-bold text-center flex items-center justify-center gap-2">
                    Prazer, Gabriel!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-4">
                    Seja muito bem-vindo ao meu espaço! Sou apaixonado por
                    tecnologia, café e desafios que envolvem pessoas e código.
                    Meu foco é backend com Java e Spring Boot, mas adoro criar
                    soluções completas, do banco de dados ao frontend com React
                    e Next.js.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-4">
                    Gosto de transformar ideias em sistemas robustos, escaláveis
                    e fáceis de manter. Integrações complexas, APIs REST,
                    WebSockets, bancos de dados e arquitetura limpa fazem parte
                    do meu dia a dia. Sempre busco evoluir, aprender e
                    compartilhar conhecimento.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-4">
                    Trabalho em equipe, colaboração e comunicação são essenciais
                    para mim. Acredito que tecnologia só faz sentido quando gera
                    impacto real para pessoas e negócios.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground">
                    Vamos tomar um café virtual e conversar sobre tecnologia,
                    carreira ou projetos? Sinta-se à vontade para me chamar no
                    LinkedIn ou GitHub!
                  </p>

                  <div className="w-full flex justify-center mt-8">
                    <span
                      title="Café sempre presente"
                      className="hover:scale-110 transition-transform"
                    >
                      <Coffee className="w-8 h-8 text-amber-700 animate-bounce" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="w-full flex justify-center mt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full"
            >
              <Card className="w-full max-w-2xl dark:bg-[#18181b] dark:text-white">
                <CardHeader>
                  <CardTitle className="text-1xl sm:text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
                    Enviar email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formspree.io/f/mkgqvnld"
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        aria-label="Seu nome"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring dark:bg-[#23232a] dark:text-white dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        aria-label="Seu email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring dark:bg-[#23232a] dark:text-white dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-medium mb-1"
                      >
                        Mensagem
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        aria-label="Sua mensagem"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring dark:bg-[#23232a] dark:text-white dark:border-gray-700"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 flex items-center gap-2 shadow-md"
                    >
                      <Mail className="w-5 h-5" /> Enviar
                    </button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
