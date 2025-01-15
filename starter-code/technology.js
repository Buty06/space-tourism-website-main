const doc = document;
const image = doc.getElementById("image");
const name = doc.getElementById("name");
const description = doc.getElementById("description");
const button1 = doc.getElementById("button1");
const button2 = doc.getElementById("button2");
const button3 = doc.getElementById("button3");

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

    console.log(data.technology);

    return data;
  } catch (error) {
    console.error("Hubo un problema al obtener los datos ", error);
  }
};

getData();

const shwoData = async () => {
  const data = await getData();
  const technology = data.technology;
  const buttons = [button1, button2, button3];

  buttons.forEach((element, index) => {
    const th = technology[index];

    element.addEventListener("click", () => {
      image.src = th.images.portrait;
      name.textContent = th.name;
      description.textContent = th.description;
    });

    const activeStatus = () => {
      //*Esta es la funcion que necesito que se actualice cada vez el estado activo de los botones
      if (element.getAttribute("data-name") === name.textContent) {
        element.classList.add("active_technology");
      } else {
        element.classList.remove("active_technology");
      }

      requestAnimationFrame(activeStatus);
    };
    activeStatus();

    element.addEventListener("mouseover", () => {
      element.classList.replace("tech_out", "tech_hover");
    });

    element.addEventListener("mouseout", () => {
      //? Pero si lo hago 2 veces se cancela XD
      element.classList.remove("tech_hover");

      if (!element.classList.contains("tech_hover")) {
        element.classList.add("tech_out");
      }
    });
  });
};

shwoData();
