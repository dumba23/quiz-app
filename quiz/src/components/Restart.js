import React from 'react';
import { useHistory } from 'react-router-dom';
import './Restart.css';

const Restart = ({ countPoint }) =>{
    const history = useHistory();

    const handleRestart = () =>{
        history.push('/');

    }

    if(countPoint <= 5){
        return( 
            <div className="restart-container">
                <div className="restart-content">
                    <p>{countPoint}/10 We are sorry for your results maybe try again...</p>
                    <button className="ui button" 
                    onClick={handleRestart}>
                    Restart
                    </button>
                </div>
            </div>    
        );
    }else if(countPoint > 5 && countPoint <= 7){
        return (
            <div className="restart-container">
                <div className="restart-content">
                    <p>{countPoint}/10 Not bad! But we hope you will learn more...</p>
                    <button className="ui button"
                    onClick={handleRestart}>
                    Restart
                    </button>
                </div>             
            </div>
        );
    }else

    return (
        <div className="restart-container">
            <div className="restart-content">
                <p>{countPoint}/10 You are absolutely genius! Hope you didn't use google...</p>
                    <button className="ui button" 
                    onClick={handleRestart}>
                    Restart
                    </button>
            </div>
        </div>
    );
}

export default Restart;