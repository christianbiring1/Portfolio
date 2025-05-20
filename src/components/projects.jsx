import React, { useRef, useState } from "react"; //eslint-disable-line
import {
  FaEye,
  FaLaptopCode,
  FaToolbox,
  FaTools,
  FaChevronLeft,
  FaChevronRight,
  FaCross,
  FaLock,
} from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Modal } from "react-responsive-modal";
import PropsTypes from "prop-types";

import projects from "../../projectsList";
// import { UseOnClickOutSide } from '../utils/useOnClick';

// import "./styles/projectCaroussel.scss";
import styles from "./styles/projectCarousel.module.scss";

const Projects = (props) => {
  const { active } = props;
  // const [isOpen, setIsOpen] = useState(false);
  // const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(null);

  // UseOnClickOutSide(ref, isOpen, handleIsOpen);

  // function handleIsOpen() {
  //   setIsOpen(!isOpen);
  // }

  const handleModal = (e, url, index) => {
    if (!url) {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  const handleCloseModal = () => {
    setActiveIndex(null);
  };

  const titleStyle = active ? { color: "#d9d9d9" } : {};
  return (
    <div className="project_container" id="projects">
      <h3 className="title" style={titleStyle}>
        <span>
          <FaToolbox size={30} />
        </span>
        <span>Project</span>
      </h3>
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          // keyboard={{
          //   enabled: true,
          // }}
          speed={500}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          className={styles.swiper}
          // style={active ? {backgroundColor: "#d9d9d9"} : {}}
        >
          {projects.map((el, index) => (
            <SwiperSlide key={el.id}>
              <div
                className="project_content"
                style={active ? { backgroundColor: "#d9d9d9" } : {}}
              >
                <img
                  src={el.image}
                  alt={`${el.projectName}_photo`}
                  // style={{ width: "90%", height: "auto" }}
                />
                <div className="details">
                  <h2 className="title">{el.projectName}</h2>
                  <div className="description">{el.projectDescription}</div>
                  <ul className="stack_list">
                    {el.stack.map((stack) => (
                      <li key={stack} className="stack_name">
                        {stack}
                      </li>
                    ))}
                  </ul>
                  <div className="bottom_cta">
                    <a
                      href={el.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleModal(e, el.liveDemo, index)}
                    >
                      <FaEye size={25} />
                    </a>
                    {el.sourceCode ? (
                      <a
                        href={el.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLaptopCode size={25} />
                      </a>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <FaLock size={20} opacity={0.7} />
                        <span style={{ opacity: "0.7", fontSize: "1.3rem" }}>
                          Private
                        </span>
                      </div>
                    )}
                    {el.sourceCode2 && (
                      <a
                        href={el.sourceCode2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLaptopCode size={25} />
                      </a>
                    )}
                  </div>
                </div>
                <Modal
                  open={activeIndex === index}
                  onClose={handleCloseModal}
                  center
                  classNames={{
                    modalAnimationIn: "inModal",
                    modal: "modal",
                  }}
                  animationDuration={500}
                >
                  <div className="modal-container">
                    <h2 className="top-head">Oups!</h2>
                    <div className="icons">
                      <BsGear size={100} color="#999" className="spin-icon" />
                      <FaTools size={100} color="#c5070799" />
                    </div>
                    <div className="details">
                      <p>This project still under development...</p>
                      <p>
                        You can check the source code
                        <a
                          href={el.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLaptopCode size={25} />
                        </a>
                        {el.sourceCode2 && (
                          <a
                            href={el.sourceCode2}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLaptopCode size={25} />
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.navigation}>
          <button className={styles.prevButton}>
            <FaChevronLeft />
          </button>
          <button className={styles.nextButton}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  active: PropsTypes.bool.isRequired,
};

export default Projects;
