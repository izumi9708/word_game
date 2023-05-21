import * as React from 'react';
import { useState, useEffect } from 'react';
import Home from './Home';
import Content from './Content';
import db from './firebase';
import { collection, getDocs, DocumentData } from "firebase/firestore";


export default function App() {
  const [gameState,setGameState] = useState(false);
  const [posts,setPosts] = useState<DocumentData[]>([]);
  const [load,setLoad] = useState(false);
  const [width,setWidth] = useState(0);

  useEffect(() => {
    changeWidth();
  },[])

  window.addEventListener('resize',() => {
    changeWidth();
  })

  useEffect(() => {
    const data = collection(db,'posts');
      getDocs(data).then(res => {
        const responseData = res.docs.map(val => val.data());
        setPosts(responseData);
        setLoad(true);
    })
  },[]);

  function changeWidth(){
    const width = window.innerWidth;
    setWidth(width)
  }

  function responsiveType(){
    if(load){
      return (
        <div>
          <header>英単語ゲーム</header>
          <section id="section-content">
            {gameState ? <Content data={posts} setGameState={setGameState}/> : <Home data={posts} setGameState={setGameState} />}
          </section>
        </div>
      );
  
    }else {
      return <div></div>
    }
  }

  if(width > 700){
    return (
      <div className='all-wrapper'>
        <div className='pc-display-speaker'></div>
        <div className='all-content-wrapper'>
          {responsiveType()}
        </div>
        <div className='pc-display-btn'></div>
      </div>
    )

  }else {
    return <div>{responsiveType()}</div>
  }

  
  
}
