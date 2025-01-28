import React from 'react';
import Slider from 'react-slick';
import { Icon } from '../Icon';
import styles from './styles.module.scss';

export const SliderCarouser = ({ items }) => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const slider = React.useRef(null);

  return (
    <div>
      <Slider ref={slider} {...settings}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item}
          </React.Fragment>
        ))}
      </Slider>
      <div className={styles.arrows}>
        <Icon
          name='arrowLeft' 
          size='S' 
          color='#508696' 
          hoverColor='#fff'
          hoverBg='#b0d283'
          onClick={() => slider?.current?.slickPrev()}
        />
        <Icon
          name='arrowRight' 
          size='S' 
          color='#508696' 
          hoverColor='#fff'
          bg='#fff'
          hoverBg='#b0d283'
          onClick={() => slider?.current?.slickNext()}
        />
      </div>
    </div>
  )
}