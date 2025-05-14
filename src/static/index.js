// import { FaApple, FaXiaomi, FaClock } from "react-icons/fa"; 
// import { Apple, Xiaomi, Fitbit } from "../assets";
import Apple from "../assets/apple.png";
import Xiaomi from "../assets/xiaomi.png";
import Fitbit from "../assets/fitbit.png";
import prodWatch1 from "../assets/first-watch.png";
import prodWatch2 from "../assets/second-watch.png";
import prodWatch3 from "../assets/third-watch.png";
import prodWatch4 from "../assets/fourth-watch.png";
import prodWatch5 from "../assets/fifth-watch.png";
import prodWatch6 from "../assets/sixth-watch.png";

export const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Brands", link: "/brands" },
  { id: 3, title: "Recent Products", link: "/products" },
  { id: 4, title: "Contact", link: "/contact" },
  { id: 5, title: "About", link: "/about" },
];

export const brandCards = [
  {
    id: 1,
    icon: Apple,
    title: "Apple",
    description:
      "Apple is one of the famous smart watches providing company.",
  },
  {
    id: 2,
    icon: Xiaomi,
    title: "Xiaomi",
    description: "Xiaomi smart watches are produced by MI company.",
  },
  {
    id: 3,
    icon: Fitbit,
    title: "FitBit",
    description:
      "FitBit smart watches are best for health and fitness features.",
  },
];

const products = [
  {
    id: 1,
    title: "Apple Smart I",
    image: prodWatch1,
    oldPrice: 300,
    newPrice: 255,
  },
  {
    id: 2,
    title: "Apple Smart II",
    image: prodWatch2,
    oldPrice: 300,
    newPrice: 255,
  },
  {
    id: 3,
    title: "Apple Smart III",
    image: prodWatch3,
    oldPrice: 300,
    newPrice: 255,
  },
  {
    id: 4,
    title: "Apple Smart IV",
    image: prodWatch4,
    oldPrice: 450,
    newPrice: 399,
  },
  {
    id: 5,
    title: "Samsung Watch Pro",
    image: prodWatch5,
    oldPrice: 300,
    newPrice: 255,
  },
  {
    id: 6,
    title: "Fitbit Max 1",
    image: prodWatch6,
    newPrice: 155,
  },
];

export default products;
