import React from 'react';
import { useHistory } from 'react-router-dom';

const Restart = ({ countQues, countPoint }) =>{
    const history = useHistory();

    const handleRestart = () =>{
        history.push('/');

    }

    if(countPoint <= 5){
        return( 
                <div className="">
                    <p>{countPoint}/10 We are sorry for your results maybe try again...</p>
                    <button onClick={handleRestart}>Restart</button>
                </div>
        );
    }else if(countPoint > 5 && countPoint <= 7){
        return (
            <div className="">
                <p>{countPoint}/10 Not bad! But we hope you will learn more...</p>
                <button onClick={handleRestart}>Restart</button>
            </div>
        );
    }else

    return (
        <div className="container">
            <p>{countPoint}/10 You are absolutely genius! Hope you didn't use google...</p>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}

export default Restart;