import { GunRarity } from "../../dataTransferObject/DTOs";

export function generateItemQuantityToRoulette(gunRarit: GunRarity) {
  switch (gunRarit.description) {
    case "Consumer grade":
      return Math.floor(Math.random() * 40) + 10;
    case "Industrial grade":
      return Math.floor(Math.random() * 20) + 7;
    case "Mil-spec":
      return Math.floor(Math.random() * 15) + 6;
    case "Restricted":
      return Math.floor(Math.random() * 10) + 5;
    case "Classified":
      return Math.floor(Math.random() * 3) + 0;
    case "Convert":
      return Math.floor(Math.random() * 2) + 0;
    default:
      return 0;
  }
}
