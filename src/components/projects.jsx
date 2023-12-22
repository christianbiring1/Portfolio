import React, { useRef, useState } from 'react'; //eslint-disable-line
import { FaEye, FaLaptopCode, FaToolbox, FaTools } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Modal } from 'react-responsive-modal';

import projects from '../../projectsList';
// import { UseOnClickOutSide } from '../utils/useOnClick';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Projects = () => {
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
      setActiveIndex(index)
    }
  }

  const handleCloseModal = () => {
    setActiveIndex(null)
  }
  return (
    <div className='project_container' id='projects'>
      <h3 className="title">
        <span><FaToolbox size={30} /></span>
        <span>Project</span>
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((el, index) => (
            <SwiperSlide key={el.id}>
              <div className='project_content'>
                <img src={el.image} alt={`${el.projectName}_photo`} />
                <div className="details">
                  <h2 className='title' >{el.projectName}</h2>
                  <div className="description">{el.projectDescription}</div>
                  <ul className='stack_list'>
                    {el.stack.map(stack => (
                      <li key={stack} className='stack_name'>{stack}</li>
                    ))}
                  </ul>
                  <div className="bottom_cta">
                    <a href={el.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => handleModal(e, el.liveDemo, index)} ><FaEye  size={25}/></a>
                    <a href={el.sourceCode} target="_blank" rel="noopener noreferrer"><FaLaptopCode size={25}/></a>
                    {el.sourceCode2 && <a href={el.sourceCode2} target="_blank" rel="noopener noreferrer"><FaLaptopCode size={25}/></a> }
                  </div>
                </div>
                <Modal
                  open={activeIndex === index}
                  onClose={handleCloseModal}
                  center
                  classNames={{
                    modalAnimationIn: 'inModal',
                    modal: 'modal',
                  }}
                  animationDuration={500}
                >
                  <div className="modal-container">
                    <h2 className='top-head'>Oups!</h2>
                    <div className="icons">
                      <BsGear size={100} color='#999' className='spin-icon'/>
                      <FaTools size={100} color='#c5070799' />
                    </div>
                    <div className="details">
                    <p>This project still under development...</p>
                    <p>
                      You can check the source code
                      <a href={el.sourceCode} target="_blank" rel="noopener noreferrer"><FaLaptopCode size={25}/></a>
                      {el.sourceCode2 && <a href={el.sourceCode2} target="_blank" rel="noopener noreferrer"><FaLaptopCode size={25}/></a> }
                    </p>
                    </div>
                  </div>
                </Modal>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 
export default Projects;
