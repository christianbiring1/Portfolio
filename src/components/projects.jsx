import React from 'react'; //eslint-disable-line
import { FaEye, FaLaptopCode } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import projects from '../../projects.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Projects = () => {
  return (
    <div className='project_container'>
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
        {projects.map(el => (
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
                  <a href={el.liveDemo} target="_blank" rel="noopener noreferrer"><FaEye  size={30}/></a>
                  <a href={el.sourceCode} target="_blank" rel="noopener noreferrer"><FaLaptopCode size={30}/></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 
export default Projects;
