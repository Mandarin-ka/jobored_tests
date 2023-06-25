import { IFlower } from "../API/IFlowers";

export const flowersSort = (flowers: IFlower[], sort: string) => {
  if (sort.toLowerCase() === "популярные" || sort.toLowerCase() === "")
    return flowers.sort((flower1, flower2) => flower1.rating - flower2.rating);
  else if (sort.toLowerCase() === "цена: по возрастанию") {
    return flowers.sort((flower1, flower2) => flower1.price - flower2.price);
  } else {
    return flowers.sort((flower1, flower2) => flower2.price - flower1.price);
  }
};
