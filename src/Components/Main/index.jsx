import { useState } from "react";
import Context from "../../Context/SwiperSliderContext";
import swiperData from "../../Data/swiperData";
import sliderData from "../../Data/sliderData";
import styles from "./style.module.scss";
import TextContent from "../TextContent";
import SwiperContainer from "../SwiperContainer";
import Links from "../Links";
import SliderContainer from "../SliderContainer";

const Main = () => {
  const [activeId, setActiveId] = useState(0);

  const prevHandler = () => {
    setActiveId((activeId) => {
      if (activeId > 0) {
        return activeId - 1;
      }
    });
    return activeId;
  };

  const nextHandler = () => {
    setActiveId((activeId) => {
      if (activeId < sliderData.length - 1) {
        return activeId + 1;
      }
    });
    return activeId;
  };

  return (
    <Context.Provider
      value={{
        swiperData,
        sliderData,
        activeId,
        setActiveId,
        prevHandler,
        nextHandler,
      }}
    >
      <main className={styles.main}>
        <div className={styles.main_container}>
          <TextContent />
          <SwiperContainer />
          <Links />
          <SliderContainer />
          <TextContent />
        </div>
      </main>
    </Context.Provider>
  );
};

export default Main;
