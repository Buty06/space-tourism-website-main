const doc = document;
const planetsImage = doc.getElementById("planetsImage");
const moon = doc.getElementById("moon");
const mars = doc.getElementById("mars");
const europa = doc.getElementById("europa");
const titan = doc.getElementById("titan");
const title = doc.getElementById("title");
const text = doc.getElementById("text");
const distance = doc.getElementById("distance");
const travel = doc.getElementById("travel");

const getData = async () => {
  try {
    const response = await fetch("./starter-code/data.json");

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
  data = await getData();
  destination = data.destinations;
  const buttons = [moon, mars, europa, titan];

  buttons.forEach((element, index) => {
    const des = destination[index];

    element.addEventListener("click", () => {
      planetsImage.src = des.images.png;
      title.textContent = des.name;
      text.textContent = des.description;
      distance.textContent = des.distance;
      travel.textContent = des.travel;
      // element.classList.add("activePlanets");
    });

    element.addEventListener("mouseover", () => {
      element.classList.remove("planets_out");
      element.classList.add("planets_hover");
    });

    element.addEventListener("mouseout", () => {
      element.classList.remove("planets_hover");
      element.classList.add("planets_out");
    });
  });
};

shwoData();
