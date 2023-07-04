import { sneakersData } from "./sneakersData";
import Adidas from '../../public/adidas-logo.png'
import Nike from '../../public/nike-logo.png'
import Airjordan from '../../public/airjordan-logo.png'
import Converse from '../../public/converse-logo.png'
import Newbalance from '../../public/newbalance-logo.png'
import Puma from '../../public/puma-logo.png'
import Rebook from '../../public/rebook-logo.png'
import Vans from '../../public/vans-logo.png'
import Saucony from '../../public/saucony-logo.png'

const brandData = sneakersData
  .map((sneaker) => sneaker.brand)
  .filter((brand, index, array) => array.indexOf(brand) === index)

export const brandsData = [
  {
    name: 'adidas',
    image: Adidas
  },
  {
    name: 'Nike',
    image: Nike
  },
  {
    name: 'Jordan',
    image: Airjordan
  },
  {
    name: 'Converse',
    image: Converse
  },
  {
    name: 'New Balance',
    image: Newbalance
  },
  {
    name: 'Puma',
    image: Puma
  },
  {
    name: 'Reebok',
    image: Rebook
  },
  {
    name: 'Vans',
    image: Vans
  },
  {
    name: 'Saucony',
    image: Saucony
  }
];
