import { Navbar } from "@/components/navibar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techImg from "../assets/technology-785742.jpg";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-6">
        <img src={techImg} alt="Tecnologia" className="w-full max-w-2xl h-28 sm:h-40 md:h-56 object-cover rounded-xl shadow-md mb-6" />
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-base sm:text-lg">
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2"><Phone className="w-5 h-5 text-primary" /><span className="font-medium">Telefone:</span></span>
                <span className="text-muted-foreground">(19) 99735-7450</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /><span className="font-medium">Email:</span></span>
                <a 
                  href="mailto:gabriel.coelho.hgc@outlook.com.br" 
                  className="text-primary hover:underline break-all"
                >
                  gabriel.coelho.hgc@outlook.com.br
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2"><Linkedin className="w-5 h-5 text-primary" /><span className="font-medium">LinkedIn:</span></span>
                <a 
                  href="https://www.linkedin.com/in/ocoelhogabriel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline break-all"
                >
                  linkedin.com/in/ocoelhogabriel
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2"><Github className="w-5 h-5 text-primary" /><span className="font-medium">GitHub:</span></span>
                <a 
                  href="https://github.com/ocoelhogabriel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline break-all"
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
