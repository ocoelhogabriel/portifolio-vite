import { useEffect, useState } from "react";
import codingImg from "../assets/coding-924920.jpg";
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
    fetch("https://api.github.com/users/ocoelhogabriel/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setRepos([]);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center px-4 py-12">
        <img src={codingImg} alt="Coding" className="w-full max-w-3xl h-48 md:h-64 object-cover rounded-xl shadow-md mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projetos</h1>
        {loading ? (
          <p className="text-muted-foreground">Carregando projetos...</p>
        ) : (
          <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
            {repos.map(repo => (
              <Card key={repo.id} className="transition-shadow hover:shadow-lg">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-semibold mb-1">{repo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground min-h-[2.5em]">{repo.description || "Sem descrição."}</p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
