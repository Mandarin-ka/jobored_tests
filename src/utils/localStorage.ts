import { IFlower } from "../API/IFlowers";

export const hasFlower = (flower: IFlower): boolean => {
  return (
    JSON.parse(localStorage.getItem("favorites") || "[]").indexOf(flower.id) >
    -1
  );
};

export const addFlower = (flower: IFlower): void => {
  localStorage.getItem("favorites")
    ? localStorage.setItem(
        "favorites",
        JSON.stringify([
          ...getStoragedFlowers().filter((e: number) => e !== flower.id),
          flower.id,
        ])
      )
    : localStorage.setItem("favorites", JSON.stringify([flower.id]));
};

export const removeFlower = (flower: IFlower): void => {
  localStorage.setItem(
    "favorites",
    JSON.stringify([
      ...getStoragedFlowers().filter((e: number) => e !== flower.id),
    ])
  );
};

export const getStoragedFlowers = (): number[] =>
  localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") || "[]")
    : [];
