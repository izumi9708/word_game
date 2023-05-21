import * as React from 'react';
import Quiz from './Quiz'
import Result from './Result';
import { DocumentData } from 'firebase/firestore';

interface Props {
  setGameState : React.Dispatch<React.SetStateAction<boolean>>
  data         : DocumentData[]
}

function Content(props:Props){
  const [currentNum,setNum] = React.useState(1);
  const [correctNum,setCorrect] = React.useState(0);
  const {data} = props;
  
  return (
    <div>
      {currentNum == data.length ? <Result data={data} correctNum={correctNum} setGameState={props.setGameState}/> : <Quiz data={data} state={currentNum} setState={setNum} correctNum={correctNum} setCorrect={setCorrect}/>}
    </div>
  )
}

export default Content;