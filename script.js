const clouse_aside = document.querySelector(".clouse_aside");
const menu_activator = document.querySelector(".menu_activator");
const aside = document.querySelector(".aside");

menu_activator.addEventListener("click", () => {
  aside.classList.remove('transition2')
  aside.classList.add('transition')
  
});

clouse_aside.addEventListener("click", () => {
  aside.classList.add('transition2')
});

const links = [
  { text: "00 Home", href: "/", className: "aside_link" },
  {
    text: "01 Destination",
    href: "/starter-code/destination-moon.html",
    className: "aside_link",
  },
  {
    text: "02 Crew",
    href: "/starter-code/crew-commander.html",
    className: "aside_link",
  },
  {
    text: "03 Technology",
    href: "/starter-code/technology-capsule.html",
    className: "aside_link",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();

  const currentPathname = window.location.pathname

  for (const { text, href, className } of links) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;
    anchor.className = className;

    if (currentPathname.endsWith(href.replace('./', ''))) {
      anchor.classList.add('active')
    }

    fragment.appendChild(anchor);
  }

  const linksSection = document.createElement("section");
  linksSection.className = "aside_links";
  linksSection.appendChild(fragment);

  aside.appendChild(linksSection);
});
