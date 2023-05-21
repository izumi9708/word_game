import { DocumentData } from 'firebase/firestore';
import * as React from 'react';

interface Props {
  correctNum   : number
  setGameState : React.Dispatch<React.SetStateAction<boolean>>
  data         : DocumentData[]
}


function Result(props:Props){
  const {data} = props;

  return (
    <div>
      <h2 className='result-title'>お疲れ様でした！</h2>
      <p className='result-text'>結果は<span className="question-num">{data.length - 1}問</span>中<span className="correct-num">{props.correctNum}問</span>正解でした！</p>
      <div className='result-btn-wrap'>
        <button type="button" className="result-btn"
          onClick={()=>props.setGameState(false)}
        >トップへ</button>
      </div>
    </div>
  )
}

export default Result;