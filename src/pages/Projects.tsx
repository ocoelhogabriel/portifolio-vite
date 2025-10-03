import { useEffect, useState } from "react";

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
    <div className="p-6 grid gap-4 md:grid-cols-2">
      {repos.map(repo => (
        <a key={repo.id} href={repo.html_url} target="_blank" className="border p-4 rounded hover:shadow">
          <h3 className="font-bold">{repo.name}</h3>
          <p>{repo.description}</p>
        </a>
      ))}
    </div>
  );
}
