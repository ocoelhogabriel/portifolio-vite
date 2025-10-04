import { Navbar } from "@/components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techImg from "../assets/laptop-1846277.jpg";

import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <img src={techImg} alt="Tecnologia" className="w-full max-w-2xl h-40 md:h-56 object-cover rounded-xl shadow-md mb-8" />
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center">Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-lg">
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
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
