const linksContainer = document.getElementById("links_container");

const planetsLinks = [
  {
    text: "Moon",
    href: "./destination-moon.html",
    className: "planet_links",
  },
  {
    text: "Mars",
    href: "./destination-mars.html",
    className: "planet_links",
  },
  {
    text: "Europa",
    href: "./destination-europa.html",
    className: "planet_links",
  },
  {
    text: "Titan",
    href: "./destination-titan.html",
    className: "planet_links",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const currentPathname = window.location.pathname;

  for (const { text, href, className } of planetsLinks) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;
    anchor.className = className;

    const petunia = new URL(href, window.location.origin).pathname;

    if (currentPathname === petunia) {
      anchor.classList.add("activePlanets");
    }

    fragment.appendChild(anchor);

    //?Creando la logica para el hover de los links de los planetas
    if (!anchor.href.endsWith(currentPathname)) {
      anchor.addEventListener("mouseover", () => {
        anchor.classList.remove("planets_out");
        anchor.classList.add("planets_hover");
      });

      anchor.addEventListener("mouseout", () => {
        anchor.classList.remove("planets_hover");
        anchor.classList.add("planets_out");
      });
    }
  }

  linksContainer.appendChild(fragment);
});
