import { DocumentData } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import * as React from 'react';

interface Props {
  state        : number
  setState     : React.Dispatch<React.SetStateAction<number>>
  correctNum   : number
  setCorrect   : React.Dispatch<React.SetStateAction<number>>
  data         : DocumentData[]
}

function Qizu(props:Props){
  const {state,setState,correctNum,setCorrect,data} = props;
  const [modalState,setModalState] = useState(false);
  const [answer,setAnswer] = useState('');

  useEffect(()=> {
    const modal        = document.querySelector('.answer-modal')!;
    const modalContent = document.querySelector('.modal-content')!;
    const windowWidth  = window.innerWidth;
    const body         = windowWidth > 700 ? document.querySelector<HTMLElement>('.all-content-wrapper')! : document.querySelector('body')!;

    if(modalState){
      modal.classList.add('modal-active');
      modalContent.classList.add('content-active');
      body.style.overflow = 'hidden';
      

    }else {
      
      modal.classList.remove('modal-active');
      modalContent.classList.remove('content-active');
      body.style.overflow = 'auto';
    }
  },[modalState])

  function answerCheck(e:string):void{
      setAnswer(e)
      setModalState(true);

      if(data[state].word === e){
        setCorrect(correctNum + 1);
      }
  }

  function resetState():void{
    setModalState(false);
    radioReset()

    setTimeout(()=>{
      setState(state + 1);
    },100)
  }

  function radioReset(){
    const radios = document.querySelectorAll<HTMLInputElement>('.answer-wrap input:checked');
    radios[0].checked = false;
  }

  // console.log(data.length)
  console.log(state)

  return (
    <div className="quiz"> 
      <h2 className="question">第{props.state}問</h2>
      <p className="ex-text">以下の意味を持つ英単語を選択してください。</p>
      <div className="quiz-wrapper">
        <div className="question-title">{data[state].mean}</div>
        <div className="answer-wrap">
          {data[state].answer.map((val:string,index:number) => {
            return (
              <label key={index}>
                <input type="radio" name="answer" value={val}
                  onChange={(e)=>answerCheck(e.target.value)}
                />{val}
              </label>
            )
          })}
        </div>
      </div>
      
      <div className="answer-modal">
           <div className="modal-bg"></div>
             <div className="modal-content">
               <h2 className="result-title">
                 <span className="correct">
                   {data[state].word == answer ? <span className="correct">正解です！</span> : <span className="incorrect">不正解です</span>}
                　</span>
               </h2>
               <p className="result">正解 : {data[state].word}</p>
               <p className="your-answer">あなたの解答 : {answer}</p>
               <div className="btn-wrap">
                 <button type="button" className="next-btn"
                  onClick={()=>resetState()}
                 >{state == (data.length - 1) ? '結果を見る' : '次の問題へ'}</button>
                 {/* // 表示のタイミングの違い */}
               </div>
             </div>
        </div> 
        
    </div>
  )
}

export default Qizu;