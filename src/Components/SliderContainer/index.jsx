import Actions from "../Actions";
import Slide from "../Slide";
import styles from "./style.module.scss";

const SliderContainer = () => {
  return (
    <div className={styles.slider_container}>
      <Actions />
      <Slide />
    </div>
  );
};

export default SliderContainer;
