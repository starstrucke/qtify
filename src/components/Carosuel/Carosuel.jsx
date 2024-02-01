
import React, {useEffect} from 'react';
import{ Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import styles from './Carosuel.module.css'
import {Navigation} from 'swiper/modules'
import CarosuelLeftNavigation from './CarosuelLeftNavigation';
import CarosuelRightNavigation from './CarosuelRightNavigation';
import 'swiper/css';
const Controls=({data}) => {

 const swiper=useSwiper();

 useEffect(()=>{

   swiper.slideTo(0,null);

 }, [data,swiper]);

 return <></>

}


const Carosuel = ({data,renderComponent}) => {
  return (
    <div className={styles.wrapper}>
    <Swiper 
    style={{padding: "0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
    slidesPerView="auto"
    spaceBetween={40}
    allowTouchMove
    
    >
    <Controls/>
    <CarosuelLeftNavigation/>
    <CarosuelRightNavigation/>

    {

      data.map((ele)=>{
        return(
          <SwiperSlide>{renderComponent(ele)} </SwiperSlide>
        )
      })
    }


    </Swiper> 



    </div>
  )
}

export default Carosuel