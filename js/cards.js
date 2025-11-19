document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("listCards");

  if (!list) {
    console.error(
      "Elemento #listCards não encontrado. Verifique o id no HTML."
    );
    return;
  }

  const projects = [
    {
      name: "GitHub-Finder",
      description: `GitHub Finder: App React/TS para buscar usuários do GitHub.
       Foco na Fetch API e Tipagem Forte para um código limpo e seguro.`,
      image: "img/GitHubFinder.png",
      github: "https://github.com/FabioCoutinho1/GitHubFinder",
      demo: "https://git-hub-finder-wheat.vercel.app/",
      technologies: ["React", "CSS", "TypeScript"],
    },
    {
      name: "FluxoRegistro",
      description: `Sistema desenvolvido para uma cliente com o objetivo de otimizar
       o acompanhamento dos registros de marcas realizados em seu trabalho.`,
      image: "img/FluxoRegistro.png",
      github: "https://github.com/FabioCoutinho1/Registro",
      demo: "https://fluxoregistro.vercel.app/",
      technologies: ["React", "Tailwindcss", "TypeScript"],
    },
  ];

  list.innerHTML = projects
    .map(
      (p) => `
        <li class="card__item observer__animation">
          <div class="icons__redirect">
            <a href="${
              p.github
            }" target="_blank" rel="noopener noreferrer" aria-label="GitHub do projeto ${
        p.name
      }">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="${
              p.demo
            }" target="_blank" rel="noopener noreferrer" aria-label="Abrir projeto ${
        p.name
      }">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <img src="${p.image}" alt="Imagem do projeto ${
        p.name
      }" loading="lazy" />
          <div class="card__infos">
            <h2>${p.name}</h2>
            <p>${p.description}</p>
            <div class="technologies__used">
              ${p.technologies.map((t) => `<span>${t}</span>`).join("")}
            </div>
          </div>
        </li>
      `
    )
    .join("");
});
