import Navbar from "./components/Navbar/Navbar";
import HeroImage from './components/Hero/Hero'
import { fetchTopAlbums,fetchNewAlbums,fetchAllsongs } from "./api/api";
import {useState,useEffect} from 'react';
import Card from './components/Card/Card'
import Section from "./components/Section/Section";
import styles from "./App.module.css";
function App() {
  const [topAlbumsData,setTopAlbumsData]=useState([])
  const [newAlbumsData,setNewAlbumsData]=useState([])
  const [SongsData,setSongsData]=useState([])
  const [filteredData,setfilteredData]=useState([])
  const [value,setValue]=useState(0)
    const handleChange=(event,newValue)=>{
setValue(newValue)
generateSongsData(newValue)


    }



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
  const generateAllSongs=async()=>{

    try{
    const data =await fetchAllsongs();
    console.log( "Songs",data)
    setSongsData(data)
setfilteredData(data)   
 }
    catch(err){
    console.error(err);
    }
    
    
    }

   const generateSongsData=(value)=>{
    let key;
    console.log("val",value)
   if(value===0){
 setfilteredData(SongsData);
return
   }
   else if(value===1){
   key="rock"

   }
   else if(value===2){
    key="pop"
 
    }
    else if(value===3){
      key="jazz"
   
      }
      else if(value===4){
        key="blues"
     
        }



   const res=SongsData.filter((item)=>
    item.genre.key===key);
    setfilteredData(res)
   
    console.log("heck",filteredData)

   
   }


useEffect(()=>{
generateTopAlbums();
generateNewAlbums();
generateAllSongs();
},[])



  return (
    <div className={styles.sectionWrapper}>
     <Navbar/>
     <HeroImage/>
    <Section data={topAlbumsData} title="Top Albums" type="album"/>
    <Section  data={newAlbumsData} title="New Albums" type="album"/>
    <Section data={filteredData} title="Songs" type="songs" value={value} handleChange={handleChange}/>
    </div>
  );
}

export default App;
 