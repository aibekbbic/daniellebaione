import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import Context from "../../Context/SwiperSliderContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.scss";
import styles from "./style.module.scss";

const SwiperContainer = () => {
  const { swiperData } = useContext(Context);

  const swiper_block = swiperData.map((obj, idx) => {
    return (
      <SwiperSlide className={styles.swipe_img__block} key={idx}>
        <img
          src={obj.swiper_image}
          alt={obj.swiper_image}
          className={styles.swipe_img}
        />
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.swiper_container}
    >
      {swiper_block}
    </Swiper>
  );
};

export default SwiperContainer;
