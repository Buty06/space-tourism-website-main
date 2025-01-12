const doc = document;
const rank = doc.getElementById("rank");
const name = doc.getElementById("name");
const description = doc.getElementById("description");
const radio1 = doc.getElementById("radio1");
const radio2 = doc.getElementById("radio2");
const radio3 = doc.getElementById("radio3");
const radio4 = doc.getElementById("radio4");
const image = doc.getElementById("image");

const basePath = window.location.pathname.includes(
  "/space-tourism-website-main"
)
  ? "/space-tourism-website-main"
  : "";

const getData = async () => {
  try {
    const response = await fetch(basePath + "/starter-code/data.json");

    if (!response) {
      throw new Error("Error al cargar el archivo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un problema al obtener los datos ", error);
  }
};

const shwoData = async () => {
  const data = await getData();
  const crew = data.crew;
  const buttons = [radio1, radio2, radio3, radio4];

  buttons.forEach((element, index) => {
    const cr = crew[index];

    element.addEventListener("click", () => {
      image.src = cr.images.png;
      name.textContent = cr.name;
      rank.textContent = cr.role;
      description.textContent = cr.bio;
    });

    const activeStatus = () => {
      //*Esta es la funcion que necesito que se actualice cada vez
      if (element.getAttribute('data-name') === name.textContent) {
        element.classList.add("active_crew");
      } else {
        element.classList.remove("active_crew");
      }

      requestAnimationFrame(activeStatus);
    };
    activeStatus();

    element.addEventListener("mouseover", () => {
      element.classList.replace("crew_out", "crew_hover");
    });

    element.addEventListener("mouseout", () => {
      //? Pero si lo hago 2 veces se cancela XD
      element.classList.remove("crew_hover");

      if (!element.classList.contains("active_crew")) {
        element.classList.add("crew_out");
      }
    });
  });
};

shwoData();
