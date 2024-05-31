import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Context from "../../Context/SwiperSliderContext";
import styles from "./style.module.scss";

const Slide = () => {
  const { sliderData, activeId } = useContext(Context);

  return (
    <div className={styles.slider}>
      {sliderData.map((obj, idx) => (
        <div
          className={`${styles.slide} ${idx === activeId ? styles.active : ""}`}
          key={uuidv4()}
        >
          <div className={styles.slide_info}>
            <h2 className={styles.slide_info__title}>{obj.title}</h2>
            <div className={styles.slide_info__text}>{obj.text}</div>
          </div>
          <img src={obj.slider_image} alt={obj.slider_image} />
        </div>
      ))}
    </div>
  );
};

export default Slide;
