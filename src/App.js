import Navbar from "./components/Navbar/Navbar";
import HeroImage from './components/Hero/Hero'
import { fetchTopAlbums,fetchNewAlbums } from "./api/api";
import {useState,useEffect} from 'react';
import Card from './components/Card/Card'
import Section from "./components/Section/Section";
import styles from "./App.module.css";
function App() {
  const [topAlbumsData,setTopAlbumsData]=useState([])
  const [newAlbumsData,setNewAlbumsData]=useState([])

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
const generateNewAlbums=async()=>{

  try{
  const data =await fetchNewAlbums();
  console.log(data)
  setNewAlbumsData(data)
  }
  catch(err){
  console.error(err);
  }
  
  
  }


useEffect(()=>{
generateTopAlbums()
generateNewAlbums()

},[])



  return (
    <div className={styles.sectionWrapper}>
     <Navbar/>
     <HeroImage/>
    <Section data={topAlbumsData} title="Top Albums" type="album"/>
    <Section  data={newAlbumsData} title="New Albums" type="album"/>
    </div>
  );
}

export default App;
 