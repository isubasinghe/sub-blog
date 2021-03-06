import {
  faHome,
  // faLaptopCode,
  faBlog,
  // faBriefcase,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import Intro from "../components/intro";
// import About from "../components/about";
import Blog from "../components/blog";
// import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

// Has to be the order of the items in navbar
export const pages = [
  { component: Intro, icon: faHome, key: "intro", anchor: "#intro" },
  { component: Blog, icon: faBlog, key: "blog", anchor: "#blog" },
  {
    component: Contact,
    icon: faAddressCard,
    key: "contact",
    anchor: "#contact",
  },
];
