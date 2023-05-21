import { DocumentData } from 'firebase/firestore';
import * as React from 'react';

interface Props {
  setGameState: React.Dispatch<React.SetStateAction<boolean>>
  data        : DocumentData[]
}

function Home(props:Props){
  const {data} = props;  
  
  const gameStart = () =>{
    props.setGameState(true)
  }
  
  return (
    <div className="start-wrap">
      <h1 className="game-title">英単語ゲーム {data.length - 1}問</h1>
      <button type="button" className="start"
        onClick = {()=>gameStart()}
      >スタート</button>
    </div>
  )
}

export default Home;