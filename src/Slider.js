import React, {useState} from 'react';
import Project from './Project';
import projects from './data';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length -1? 0 : current +1);
  };

  const prevSlide = () => {
    setCurrent(current === 0? length - 1 : current -1);
  };

  return (
    <section className='slider'>
      <Project projects={projects} current={current}/>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> 
    </section>
  )}


export default ImageSlider;