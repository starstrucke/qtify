import React, {useEffect,useState} from 'react';
import {useSwiper} from 'swiper/react';
import { ReactComponent as LeftArrow } from '../../assets/leftarrow.svg'
import styles from './Carosuel.module.css';
const CarosuelLeftNavigation = () => {
  const swiper=useSwiper();
  const[isBeginning,setIsBeginning]=useState(swiper.isBeginning);

   
  
  useEffect( () => {
    swiper.on("slideChange",function() {

     setIsBeginning(swiper.isBeginning);

    })
  },[swiper])

  return (
    <div className={styles.leftNavigation}>

{!isBeginning ? < LeftArrow onClick={()=>swiper.slidePrev()}/>:null}


    </div>
  )
  
}

export default CarosuelLeftNavigation