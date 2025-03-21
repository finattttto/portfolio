import Header from "@/components/Header";

const skills = [
  "Java",
  "SpringBoot",
  "Hibernate",
  "JavaScript",
  "HTML",
  "CSS",
  "Angular",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "TypeORM",
  "GO",
  "Kotlin",
  "PostgreSQL",
  "Git",
  "RESTful APIs",
];

export default function About() {
  return (
    <div
      className="flex min-h-[100dvh] w-full flex-col bg-black text-white overflow-hidden"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          /* Esconde a barra de rolagem para Webkit (Chrome, Safari, Edge) */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Estilo para garantir que a rolagem seja só no main */
          main {
            max-height: calc(100vh - 80px); /* Ajuste a altura conforme necessário para o header */
            overflow-y: auto; /* Permite rolar no conteúdo */
          }

          /* Cabeçalho fixo */
          header {
            position: sticky;
            top: 0;
            z-index: 10; /* Garante que o header fique acima do conteúdo */
          }
        `}
      </style>
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Sobre mim</h1>

          {/* Introduction Section */}
          <section className="mb-8">
            <p className="text-zinc-400 text-sm leading-relaxed text-justify">
              Sou um desenvolvedor de software focado em criar aplicações
              eficientes, escaláveis e fáceis de usar. Gosto de combinar
              conhecimento técnico com soluções criativas para resolver
              problemas de forma prática e inovadora. Atualmente, moro no
              extremo oeste de Santa Catarina e me dedico a enfrentar desafios
              complexos, sempre buscando aprender e me adaptar às novas
              tecnologias que surgem.
            </p>
          </section>

          {/* My Journey Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-white">Minha jornada</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3 text-justify">
              Minha jornada como desenvolvedor começou quando ingressei na
              faculdade de Análise e Desenvolvimento de Sistemas na UTFPR.
              Durante o curso, tive a oportunidade de aprender sobre diversas
              tecnologias e linguagens de programação, o que me proporcionou uma
              visão ampla do campo. A cada novo aprendizado, percebi como a área
              é dinâmica e cheia de possibilidades, e fui me aprofundando cada
              vez mais no que realmente me interresava.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed text-justify">
              Ao longo da graduação, aprimorei minhas habilidades, participei de
              projetos e desafios que me ajudaram a crescer tanto tecnicamente
              quanto como profissional. Hoje, programar é algo que me traz
              prazer, e, após a conclusão do curso, continuo buscando me
              aprimorar de forma autodidata. Acredito que o aprendizado nunca
              para, por isso, estou sempre em busca de novas fontes de
              conhecimento, seja em cursos, livros ou criando novos projetos, para me manter atualizado e continuar evoluindo na
              profissão.
            </p>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-white">
              Formação acadêmica
            </h2>

            <div className="border-l border-zinc-800 pl-4 mb-4">
              <h3 className="text-base font-bold text-white">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-xs text-purple-400 mb-1">
                Universidade Tecnológica Federal do Paraná • 2022-2024
              </p>
              <p className="text-zinc-400 text-sm">
                Com ênfase em desenvolvimento de software, banco de dados e
                arquitetura de sistemas. Formação voltada para a criação de
                soluções tecnológicas e inovação.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-white">
              Experiência profissional
            </h2>

            <div className="border-l border-zinc-800 pl-4 mb-6">
              <h3 className="text-base font-bold text-white">
                Desenvolvedor Web
              </h3>
              <p className="text-xs text-purple-400 mb-1">
                Hábil Software by Limber • Mai de 2023 - Presente
              </p>
              <ul className="text-zinc-400 text-sm list-disc ml-4 space-y-1">
                <li>
                  Desenvolvimento e manutenção de um sistema ERP utilizando Java
                  com Spring Boot (backend) e Angular (frontend).
                </li>
                <li>
                  Integração de APIs internas e de terceiros para melhorar a
                  funcionalidade do sistema.
                </li>
                <li>
                  Refatoração de sistema desktop para uma aplicação web com
                  Angular e Node.js.
                </li>
              </ul>
            </div>

            <div className="border-l border-zinc-800 pl-4 mb-6">
              <h3 className="text-base font-bold text-white">
                Assessor de Projetos
              </h3>
              <p className="text-xs text-purple-400 mb-1">
                OCCAM Engenharia • Fev 2023 - Ago 2023
              </p>
              <ul className="text-zinc-400 text-sm list-disc ml-4 space-y-1">
                <li>
                  Participação em projetos e aprimoramento de habilidades em TI
                  na empresa júnior.
                </li>
              </ul>
            </div>

            <div className="border-l border-zinc-800 pl-4">
              <h3 className="text-base font-bold text-white">
                Trainee de Projetos
              </h3>
              <p className="text-xs text-purple-400 mb-1">
                OCCAM Engenharia • Set 2022 - Mai 2023
              </p>
              <ul className="text-zinc-400 text-sm list-disc ml-4 space-y-1">
                <li>
                  Participação no trainee, desenvolvendo habilidades e sendo
                  introduzido ao mercado de trabalho.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-white">Tecnologias</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
