import { useState } from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/core";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import BannerBackground from "../Assets/home-banner-background2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CarrouselDepto.css";
import ImgCarrousel1 from "../Assets/images/Entrada/entrada2.jpeg";
import ImgCarrousel2 from "../Assets/images/Entrada/entrada3.jpeg";
import ImgCarrousel3 from "../Assets/images/Entrada/exterior.webp";
import ImgCarrousel4 from "../Assets/images/Entrada/exterior2.webp";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="atras">
      <Paper
        elevation={24}
        sx={{
          width: " 65%",
          backgroundColor: "#ffcd728f",
          boxShadow:
            "0px 11px 15px -7px rgb(255 204 112), 0px 24px 38px 3px rgb(255 204 112), 0px 9px 46px 8px rgb(255 204 112)",
        }}
      >
        asd
      </Paper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={() => openModal(ImgCarrousel1)}>
          <img src={ImgCarrousel1} />
        </SwiperSlide>
        <SwiperSlide onClick={() => openModal(ImgCarrousel2)}>
          <img src={ImgCarrousel2} />
        </SwiperSlide>
        <SwiperSlide onClick={() => openModal(ImgCarrousel3)}>
          <img src={ImgCarrousel3} />
        </SwiperSlide>
        <SwiperSlide onClick={() => openModal(ImgCarrousel4)}>
          <img src={ImgCarrousel4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
          },
        }}
      >
        <img
          src={selectedImage}
          alt="Selected"
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            objectFit: "contain",
          }}
        />

        <CloseIcon
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 999,
          }}
        />
      </Modal>
    </div>
  );
}

export default App;
