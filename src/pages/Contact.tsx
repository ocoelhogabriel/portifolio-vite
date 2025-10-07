import { Navbar } from "@/components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import techImg from "../assets/technology-785742.jpg";

export default function Contact() {
  // Formspree: envie direto para seu email sem backend
  // Crie um formulário em https://formspree.io, copie o ID e substitua abaixo
  // Exemplo: action="https://formspree.io/f/{seu_id}" method="POST"

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-6">
        <img
          src={techImg}
          alt="Tecnologia"
          loading="lazy"
          className="w-full max-w-2xl h-28 sm:h-40 md:h-56 object-cover rounded-xl shadow-md mb-6"
        />
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              Contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-base sm:text-lg ">
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium">Telefone:</span>
                </span>
                <a
                  href="https://wa.me/5519997357450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all focus:outline-none focus:ring"
                  aria-label="Abrir WhatsApp para (19) 99735-7450"
                >
                  (19) 99735-7450
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">Email:</span>
                </span>
                <a
                  href="mailto:gabriel.coelho.hgc@outlook.com.br"
                  className="text-primary hover:underline break-all focus:outline-none focus:ring"
                  aria-label="Enviar email para gabriel.coelho.hgc@outlook.com.br"
                >
                  gabriel.coelho.hgc@outlook.com.br
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-medium">LinkedIn:</span>
                </span>
                <a
                  href="https://www.linkedin.com/in/ocoelhogabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all focus:outline-none focus:ring"
                  aria-label="Abrir LinkedIn de Gabriel Coelho"
                >
                  linkedin.com/in/ocoelhogabriel
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium">GitHub:</span>
                </span>
                <a
                  href="https://github.com/ocoelhogabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all focus:outline-none focus:ring"
                  aria-label="Abrir GitHub de Gabriel Coelho"
                >
                  github.com/ocoelhogabriel
                </a>
              </li>
            </ul>
            <hr className="my-6" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
