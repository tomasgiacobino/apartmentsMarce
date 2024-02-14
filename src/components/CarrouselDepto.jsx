import { useState } from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/core";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CarrouselDepto.css";
import ImgCarrousel1 from "../Assets/images/Entrada/entradacerca.webp";
import ImgCarrousel2 from "../Assets/images/Patio/patio.webp";
import ImgCarrousel3 from "../Assets/images/cuarto1/cama1.webp";
import ImgCarrousel4 from "../Assets/images/cuarto3/camas2.webp";

function CarrouselDepto({ apartment }) {
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
        <h2>Id: {apartment.id}</h2>
        <h3>Title: {apartment.title}</h3>
        <p>Description: {apartment.description.join(", ")}</p>
        <p>Incluye: {apartment.incluye.join(", ")}</p>
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
        {apartment.images[0].map((image, index) => (
          <SwiperSlide onClick={() => openModal(image)} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
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

export default CarrouselDepto;
