import React from 'react'
import HeroImage from '../../assets/vibrating-headphone 1.png'
import styles from './Hero.module.css'
const Hero = () => {
  return (

<div className={styles.hero}>
<div>
<h1>100 Thousand Songs, ad-free</h1>
<h2>Over thousands podcast episodes</h2>
</div>


<div>


<img src={HeroImage} width={212} alt='headphone'/>

</div>

    </div>
  )
}

export default Hero;