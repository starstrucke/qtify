import Navbar from "./components/Navbar/Navbar";
import HeroImage from './components/Hero/Hero'
import { fetchTopAlbums } from "./api/api";
import {useState,useEffect} from 'react';
import Card from './components/Card/Card'
import Section from "./components/Section/Section";
import styles from "./App.module.css";
function App() {
  const [topAlbumsData,setTopAlbumsData]=useState([])

const generateTopAlbums=async()=>{

try{
const data =await fetchTopAlbums();
console.log(data)
setTopAlbumsData(data)
}
catch(err){
console.error(err);
}


}
useEffect(()=>{
generateTopAlbums()


},[])



  return (
    <div className={styles.sectionWrapper}>
     <Navbar/>
     <HeroImage/>
    <Section data={topAlbumsData} title="TopAlbums" type="album"/>

    </div>
  );
}

export default App;
 