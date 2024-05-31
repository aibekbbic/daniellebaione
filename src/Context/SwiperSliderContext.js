import { createContext } from "react";

const Context = createContext({
  activeId: 0,
  setActiveId: () => {},
  swiper_data: [],
  slider_data: [],
  prevHandler: () => {},
  nextHandler: () => {},
});

export default Context;
