const clouse_aside = document.querySelector(".clouse_aside");
const menu_activator = document.querySelector(".menu_activator");
const aside = document.querySelector(".aside");
const main = document.getElementById("main");

menu_activator.addEventListener("click", () => {
  aside.classList.remove("transition2");
  aside.classList.remove("display");
  aside.classList.add("transition");
});

clouse_aside.addEventListener("click", () => {
  aside.classList.add("transition2");

  setTimeout(() => {
    aside.classList.add("display");
  }, 1000);
});

main.addEventListener("click", () => {
  aside.classList.add("transition2");

  setTimeout(() => {
    aside.classList.add("display");
  }, 1000);
});

const links = [
  {
    text: "00 Home",
    href: "/",
    className: "aside_link",
  },
  {
    text: "01 Destination",
    href: "/destination-moon.html",
    className: "aside_link",
  },
  {
    text: "02 Crew",
    href: "/crew-commander.html",
    className: "aside_link",
  },
  {
    text: "03 Technology",
    href: "/technology-capsule.html",
    className: "aside_link",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  let currentPathname = window.location.pathname;
  currentPathname = currentPathname.replace("/space-tourism-website-main", "");
  if (currentPathname === "/index.html") {
    currentPathname = "/";
  }

  for (const { text, href, className } of links) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;
    anchor.className = className;

    if (currentPathname === href) {
      anchor.classList.add("active");
    }

    fragment.appendChild(anchor);

    //?Creando la logica para el hover de los links del aside
    if (!anchor.href.endsWith(currentPathname)) {
      anchor.addEventListener("mouseover", () => {
        anchor.classList.remove("outState");
        anchor.classList.add("hoverState");
      });

      anchor.addEventListener("mouseout", () => {
        anchor.classList.remove("hoverState");
        anchor.classList.add("outState");
      });
    }
  }

  const linksSection = document.createElement("section");
  linksSection.className = "aside_links";
  linksSection.appendChild(fragment);
  aside.appendChild(linksSection);
});
