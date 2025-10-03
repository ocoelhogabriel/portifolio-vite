import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ocoelhogabriel/repos")
      .then(res => res.json())
      .then(setRepos)
      .catch(() => setRepos([]));
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projetos</h1>
      <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
        {repos.map(repo => (
          <Card key={repo.id} className="transition-shadow hover:shadow-lg">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
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
    </section>
  );
}
