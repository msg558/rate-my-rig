import React, { useState } from 'react';
import './App.css';
import { Image } from './components/Image';

function App() {

  const [imageID, setimageID] = useState(1)
  const [leaderID, setleaderID] = useState(1)
  const [countArray, setcountArray] = useState([0,0,0,0,0,0])

  const updateImage= (x: number) => {
    if(imageID>5){
      setimageID(1)
    }
    else{
      setimageID(x)
    }
  }

  const updateLeader= (x: number) => {
    x=countArray.indexOf(Math.max(...countArray))+1;
    setleaderID(x)
  }

  const increment= (ID: number) => {
    const temp = countArray
    temp[ID-1]++
    console.log(temp)
    setcountArray(temp)
    updateImage(imageID+1)
    updateLeader(leaderID)
  }

  return (
    <div className="App">
      <h1>Rate-My-Rig!</h1>
      <h4> Image Number: {imageID}</h4>
      <Image path={'Photos/'+imageID.toString()+'.jpg'}></Image>
      <p> Number of Likes: {countArray[imageID-1]}</p>
      <div>
        <button onClick={()=>increment(imageID)}> Like </button>
        <button onClick={()=> updateImage(imageID+1)}> Dislike </button>
        </div>
      <div><a href={'Photos/'+leaderID.toString()+'.jpg'}> In The Lead: {leaderID} </a></div>
    </div>
  );
}

export default App;
