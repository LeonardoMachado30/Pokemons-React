import grass from "@assets/pokemon/grass.png";

function selectColor(type: string) {
  switch (type) {
    case "normal":
      return { color: "#9a9da1", type: type, img: "" };
    case "fire":
      return { color: "#f8a54f", type: type, img: "" };
    case "water":
      return { color: "#559edf", type: type, img: "" };
    case "grass":
      return { color: "#5dbe62", type: type, img: grass?.src };
    case "electric":
      return { color: "#edd53f", type: type, img: "" };
    case "ice":
      return { color: "#7ed4c9", type: type, img: "" };
    case "fighting":
      return { color: "#d94256", type: type, img: "" };
    case "poison":
      return { color: "#b563ce", type: type, img: "" };
    case "ground":
      return { color: "#d78555", type: type, img: "" };
    case "flying":
      return { color: "#9bb4e8", type: type, img: "" };
    case "psychic":
      return { color: "#f87c7a", type: type, img: "" };
    case "bug":
      return { color: "#9dc130", type: type, img: "" };
    case "rock":
      return { color: "#cec18c", type: type, img: "" };
    case "ghost":
      return { color: "#6970c5", type: type, img: "" };
    case "dragon":
      return { color: "#0773c7", type: type, img: "" };
    case "dark":
      return { color: "#5f606d", type: type, img: "" };
    case "steel":
      return { color: "#5596a4", type: type, img: "" };
    case "fairy":
      return { color: "#ef97e6", type: type, img: "" };
    default:
      return { color: "gray", type: type, img: "" };
  }
}

export default selectColor;
