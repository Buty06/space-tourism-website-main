//? Variables del dom necesarias para el codigo
const clouse_aside = document.querySelector(".clouse_aside");
const menu_activator = document.querySelector(".menu_activator");
const aside = document.querySelector(".aside");
const main = document.getElementById("main");

//? Activar el aside con los botones y sus clases con sus animaciones
menu_activator.addEventListener("click", () => {
  aside.classList.remove("transition2");
  aside.classList.remove("display");
  aside.classList.add("transition");
});

//? Cerrar el aside con el boton de la cruz y con su respectiva animacion en la clase
clouse_aside.addEventListener("click", () => {
  aside.classList.add("transition2");

  setTimeout(() => {
    aside.classList.add("display");
  }, 500);
});

//? Cerrar el aside tocando el main de la pagina
main.addEventListener("click", () => {
  aside.classList.add("transition2");

  setTimeout(() => {
    aside.classList.add("display");
  }, 500);
});

//? Los links de la pagina respectivas para cada lado
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
    href: "/technology-vehicle.html",
    className: "aside_link",
  },
];

//* DOMContentLoaded( Para que cunado cambie o refresque el DOM se ejecute el codigo )
document.addEventListener("DOMContentLoaded", () => {
  //? Variables necesarias para renderizar los elementos
  const fragment = document.createDocumentFragment();

  //* basePath( Para cuando esta en online poder hacer los links correctamente o en local )
  const basePath = window.location.pathname.includes(
    "/space-tourism-website-main"
  )
    ? "/space-tourism-website-main"
    : "";

  //* currentPathname( Para tener una forma de verificar si activar la clase o no )
  let currentPathname = window.location.pathname.replace(basePath, "");

  //? Comprobacion para arreglar el enlace index que es el home en el curentPathname
  if (currentPathname === "/index.html" || currentPathname === "") {
    currentPathname = "/";
  }

  //? Un bucle forOf para ejecutar y renderizar los anchors
  for (const { text, href, className } of links) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = basePath + href;
    anchor.className = className;

    //? Activar la clase active para poner la pleca al lado de la anchor que represente su pagina
    if (anchor.href.endsWith(currentPathname)) {
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

  //? Renderizando todos los anchors en la pagina
  const linksSection = document.createElement("section");
  linksSection.className = "aside_links";
  linksSection.appendChild(fragment);
  aside.appendChild(linksSection);
});
