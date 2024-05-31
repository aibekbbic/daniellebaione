import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import styles from "./style.module.scss";
import { useContext } from "react";
import Context from "../../Context/SwiperSliderContext";

const Actions = () => {
  const { prevHandler, nextHandler, sliderData, activeId } =
    useContext(Context);
  return (
    <div className={styles.actions}>
      <button
        className={styles.prev}
        onClick={() => prevHandler()}
        disabled={activeId === 0}
      >
        <CiCircleChevLeft className={styles.svg} />
      </button>
      <button
        className={styles.next}
        onClick={() => nextHandler()}
        disabled={activeId === sliderData.length - 1}
      >
        <CiCircleChevRight className={styles.svg} />
      </button>
    </div>
  );
};

export default Actions;
