import { Navbar } from "@/components/navibar";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cv from "../data/curriculo.json";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
  const handlePrint = () => {
    window.print();
  };
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-[#18181b] dark:via-[#23232a] dark:to-[#18181b] print:bg-white print:min-h-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="print:hidden">
        <Navbar />
      </div>
      <section className="flex-1 flex flex-col items-center px-2 sm:px-4 py-6 sm:py-8 w-full overflow-x-auto print:px-0 print:py-0">
        <motion.div
          id="curriculo-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl space-y-6 bg-white/80 dark:bg-[#18181b]/90 rounded-xl shadow-2xl p-2 sm:p-6 container mx-auto print:text-black print:!bg-white print:shadow-none print:rounded-none print:p-0 print:max-w-full print:space-y-4"
        >
          {/* Adicione lazy loading em imagens se houver */}
          <h1 className="text-3xl md:text-4xl font-extrabold -mb-4 text-primary dark:text-blue-400 drop-shadow-lg print:!text-black print:mb-2">
            {cv.nome}
          </h1>
          <h3 className="text-xl md:text-xl font-medium mb-1 text-muted-foreground dark:text-gray-300 print:!text-black print:mb-4">
            {cv.profissao}
          </h3>
          <div className="bg-white/90 dark:bg-[#23232a]/90 rounded-lg shadow p-4 print:!bg-white print:!text-black print:shadow-none print:rounded-none print:p-0">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-blue-400 print:!text-black">
              Contato
            </h2>
            <ul className="space-y-1 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground dark:text-white print:!text-black">
                  Telefone:
                </span>
                <span className="text-primary dark:text-blue-400">
                  (19) 99735-7450
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground dark:text-white print:!text-black">
                  Email:
                </span>
                <span
                  // href="mailto:gabriel.coelho.hgc@outlook.com.br"
                  className="text-primary dark:text-blue-400"
                  aria-label="Enviar email para gabriel.coelho.hgc@outlook.com.br"
                >
                  gabriel.coelho.hgc@outlook.com.br
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground dark:text-white print:!text-black">
                  LinkedIn:
                </span>
                <span
                  // href="https://www.linkedin.com/in/ocoelhogabriel"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-400"
                  aria-label="Abrir LinkedIn de Gabriel Coelho"
                >
                  linkedin.com/in/ocoelhogabriel
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Github className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground dark:text-white print:!text-black">
                  GitHub:
                </span>
                <span
                  // href="https://github.com/ocoelhogabriel"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-400 "
                  aria-label="Abrir GitHub de Gabriel Coelho"
                >
                  github.com/ocoelhogabriel
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/90 dark:bg-[#23232a]/90 rounded-lg shadow p-4 print:!bg-white print:!text-black print:shadow-none print:rounded-none print:p-0">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-blue-400 print:!text-black">
              Resumo
            </h2>
            <p className="text-base md:text-base text-muted-foreground dark:text-gray-300 mb-6 print:!text-black text-justify leading-relaxed">
              {cv.resumo}
            </p>
          </div>

          <div className="bg-white/90 dark:bg-[#23232a]/90 rounded-lg shadow p-4 print:!bg-white print:!text-black print:shadow-none print:rounded-none print:p-0">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-blue-400 print:!text-black">
              Formação Acadêmica
            </h2>
            <ul className="space-y-4">
              {cv.formacao.map((form: Formacao, i: number) => (
                <li
                  key={i}
                  className="border-l-2 border-primary dark:border-blue-400 pl-4 py-1 print:break-inside-avoid"
                >
                  <span className="font-medium text-lg text-foreground dark:text-white print:!text-black">
                    {form.curso}
                  </span>
                  <p className="text-muted-foreground dark:text-gray-300 print:!text-black">
                    {form.instituicao}
                  </p>
                  {form.periodo && (
                    <span className="text-sm text-muted-foreground dark:text-gray-400 print:!text-black">
                      {form.periodo}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/90 dark:bg-[#23232a]/90 rounded-lg shadow p-4 print:!bg-white print:!text-black print:shadow-none print:rounded-none print:p-0 print:break-inside-avoid">
            <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary dark:text-blue-400 print:!text-black">
              Experiência
            </h2>
            <div className="space-y-4">
              {cv.experiencia.map((exp: Experiencia, i: number) => (
                <Card
                  key={i}
                  className="bg-card dark:bg-[#23232a] border border-border dark:border-gray-700 print:!text-black print:break-inside-avoid"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground dark:text-white print:!text-black">
                      {exp.cargo} - {exp.empresa}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground dark:text-gray-400 print:!text-black">
                      {exp.periodo}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-justify dark:text-gray-300 text-base print:!text-black">
                      {exp.descricao}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-white/90 dark:bg-[#23232a]/90 rounded-lg shadow p-4 print:!bg-white print:!text-black print:shadow-none print:rounded-none print:p-0">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-blue-400 print:!text-black">
              Habilidades
            </h2>
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
              {cv.habilidades.map((skill: string, i: number) => (
                <div
                  key={i}
                  className="px-2 py-0.5 bg-accent dark:bg-blue-900 print:!text-black rounded text-[10px] sm:text-xs font-medium shadow-sm flex items-center mb-1 border border-accent-foreground/10 dark:border-blue-400/20 hover:bg-accent/80 dark:hover:bg-blue-800 transition-colors text-foreground dark:text-blue-200"
                  style={{ lineHeight: 1.2 }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <div className="w-full flex flex-col items-center mb-8 print:hidden">
        <button
          onClick={handlePrint}
          className="mb-6 px-4 py-2 bg-primary dark:bg-blue-700 text-white rounded hover:bg-primary/90 dark:hover:bg-blue-800 print:hidden"
        >
          Imprimir currículo
        </button>
      </div>
    </motion.div>
  );
}
