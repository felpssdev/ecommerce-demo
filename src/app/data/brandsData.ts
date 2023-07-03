import { sneakersData } from "./sneakersData";

export const brandData = sneakersData
  .map((sneaker) => sneaker.brand)
  .filter((brand, index, array) => array.indexOf(brand) === index)