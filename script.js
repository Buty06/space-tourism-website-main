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
  const basePath = window.location.pathname.includes(
    "/space-tourism-website-main",
  )
    ? "/space-tourism-website-main"
    : "";

  let currentPathname = window.location.pathname.replace(basePath, "");
  if (currentPathname === "/index.html" || currentPathname === "") {
    currentPathname = "/";
  }
  console.log(currentPathname);
  for (const { text, href, className } of links) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = basePath + href;
    anchor.className = className;
        console.log(anchor.href);

    
    if (currentPathname === petunia) {
      anchor.classList.add("active");
    }

    if (currentPathname === '/' &&petunia.endsWith('index.html')) {
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
