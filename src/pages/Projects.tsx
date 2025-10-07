import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navibar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Iniciando fetch dos projetos...');
    fetch("https://api.github.com/users/ocoelhogabriel/repos")
      .then((res) => {
        console.log('Resposta recebida:', res);
        return res.json();
      })
      .then((data) => {
        console.log('Dados recebidos:', data);
        setRepos(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error('Erro ao buscar projetos:', err);
        setRepos([]);
      })
      .finally(() => {
        console.log('Finalizando loading');
        setLoading(false);
      });
  }, []);
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
        <div className="w-full max-w-4xl space-y-8 mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <Card className="w-full max-w-4xl dark:bg-[#18181b] dark:text-white shadow-xl px-8 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary dark:text-blue-400 drop-shadow-lg text-center flex items-center justify-center gap-2">
                  Meus Projetos
                </CardTitle>
                <div className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground dark:text-gray-300 mt-2 text-center">
                  Front-end • UX/UI • Arquitetura
                </div>
              </CardHeader>
              <CardContent>
                {/* Aqui você pode listar os projetos com cards, ícones, links, etc. */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 px-2 sm:px-0">
                  {loading ? (
                    Array.from({ length: 4 }).map((_, idx) => (
                      <div key={idx} className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl h-32 w-full p-4 flex flex-col gap-2">
                        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    ))
                  ) : repos.length === 0 ? (
                    <div className="col-span-full text-center text-muted-foreground">Nenhum projeto encontrado.</div>
                  ) : (
                    repos.map((repo, idx) => (
                      <motion.div
                        key={repo.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 * idx }}
                        tabIndex={0}
                        aria-label={`Projeto ${repo.name}`}
                        className="focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <Card className="w-full h-full bg-white dark:bg-[#23232a] shadow-lg rounded-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col gap-2 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                          <CardHeader className="pb-2 flex items-center justify-between">
                            <CardTitle className="text-lg font-bold text-primary dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                              {repo.name}
                            </CardTitle>
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Ver ${repo.name} no GitHub`}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            >
                              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline-block align-middle">
                                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.398.1 2.652.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.183 22 16.437 22 12.021 22 6.484 17.523 2 12 2z" />
                              </svg>
                            </a>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">
                              {repo.description || "Projeto sem descrição."}
                            </p>
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 underline text-sm mt-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            >
                              Ver no GitHub
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
