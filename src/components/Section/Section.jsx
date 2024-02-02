import React,{useState} from 'react';
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card'
import Carosuel from '../Carosuel/Carosuel';
import BasicTabs from '../Tabs/Tabs';
const Section = ({data,title,type,value=0,handleChange=null}) => {
   console.log(data)
    
    const [carouselToggle,setCarosuelToggle]=useState(true)

    const handleToggle=()=>{
      setCarosuelToggle(!carouselToggle);
    }





  return (
    <div>
    <div className={styles.header}>
      <h3>{title}</h3>
    <h4 className={styles.toggleText} onClick={handleToggle}>
     {!carouselToggle? "Collapse All" : "Show All"}
    </h4>

    </div>
 {type==="songs"?<BasicTabs value={value} handleChange={handleChange}/>:null}
 {data.length === 0 ? (
  <CircularProgress/>
 
  ):( 
     
     <div className={styles.cardsWrapper}>{ !carouselToggle ?
          (<div className={styles.wrapper}>{data.map((ele) => (
             <Card data={ele} type={type} />
          )) } 
          </div> ):( <Carosuel data={data} renderComponent={(data) => <Card data={data} type={type}/>} />) } </div>
  )
 
  }
 
  </div>
     
 
   )
 }
 
 export default Section