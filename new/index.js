const trainers = [
  {
    trainerName: "Beauty",
    generation: "1",
  },
  {
    trainerName: "Dragon Tamer",
    generation: "3",
  },
  {
    trainerName: "Furisode girl",
    generation: "6",
  },
  {
    trainerName: "Triathlete",
    generation: "7",
  },
  {
    trainerName: "Harlequin",
    generation: "5",
  },
  {
    trainerName: "Poké Kid",
    generation: "4",
  },
  {
    trainerName: "Cue Ball",
    generation: "Fire",
  },
  {
    trainerName: "Psychic",
    generation: "Zafire",
  },
  {
    trainerName: "Skier",
    generation: "2",
  },
  {
    trainerName: "Firebreather",
    generation: "Gold",
  },
];
let currentIndex = 0;

function showTrainers() {
  let arrayPlaceholder = document.getElementById("array");

  let arrayString =
    "Name: " +
    trainers[currentIndex].trainerName +
    ", Generation:" +
    trainers[currentIndex].generation;
  arrayPlaceholder.innerHTML = arrayString;
  currentIndex = (currentIndex + 1) % trainers.length;
}
const clean = () => {
  document.querySelector(".name").innerHTML = "";
  document.getElementById("image").src = "";
  document.getElementById("error").innerHTML = "";
};

const fetch = () => {
  const input = document.getElementById("input-name");
  const btn = document.getElementById("search");

  btn.addEventListener("click", async () => {
    clean();
    const selectName = document
      .getElementById("select-name")
      .value.toLowerCase();
    try {
      const inputName = input.value.toLowerCase();

      const {
        data: { name, sprites },
      } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${inputName || selectName}`
      );

      document.querySelector(".name").innerHTML = `Name: ${name}`;
      document.getElementById("image").src = sprites.front_default;
    } catch (error) {
      document.getElementById("error").innerHTML = "Este pokemon no existe";
    }
  });
};

fetch();
