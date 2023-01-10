import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({questions, counterPoint}) => {  
    const history = useHistory();

    const [currQues, setCurrQues] = useState(0);  
    const [count, setCount] = useState(0);

    const handleFinish = () => {
        history.push('/restart');
    }

    useEffect(()=>{
        if(currQues===9 ){
            counterPoint(count);
            handleFinish();
        }
    },[currQues]);
   

    if (questions.length === 0) {
        return null;
    };
      
    const { question, incorrect_answers, correct_answer } = questions[currQues];
    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);
    
    return (
        <div className="container">
                <div className="currQues">
                <p>Question: {currQues+1}/10 </p>
                </div>
            <div className="content">
          
            <div className="eachQues">
            <div className="ui floating message question"   dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="ui vertical buttons answers">
                {answers.map((answer,i) => (
                    <button key={i} className="ui button" 
                    onClick={()=> (answer===correct_answer)? setCount(count+1) || setCurrQues(currQues+1) : setCurrQues(currQues+1)}
                    dangerouslySetInnerHTML={{__html: answer}}
                    />
                ))};
            </div>
        </div>
        <div className="point">
               <p>Correct Answers:{count}</p> 
            </div>
        </div>
      );
}

export default Quiz;