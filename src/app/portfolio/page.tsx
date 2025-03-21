import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Alfabetiza Libras",
    description:
      "Aplicação web com atividades interativas para educação bilíngue.",
    link: "https://libras.luizsv.com.br/",
    github: "https://github.com/finattttto/TCC",
    tech: ["Frontend", "Backend"],
  },
  {
    id: 2,
    title: "Chalé Aconchego",
    description:
      "Landing page do Chalé Aconchego, destacando conforto e locação exclusiva.",
    link: "https://chaleaconchego.com",
    github: "https://github.com/finattttto/chale-aconchego",
    tech: ["Frontend"],
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Aplicação React com API Spring Boot para um E-Commerce.",
    link: "https://github.com/finattttto/projetoweb-2",
    github: "https://github.com/finattttto/projetoweb-2",
    tech: ["Frontend", "Backend"],
  },
];

export default function Portfolio() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-black text-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl font-bold mb-6">Meus projetos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                github={project.github}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
