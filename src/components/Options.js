import React from 'react';
import { useHistory } from 'react-router-dom';
import './Options.css';

const Options = ({onCat,onDif, onSubmit}) => {
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push('/quiz');
    }

    return(

        <div className="ui form">
               <p>Start a quiz</p>
            <div className="field">
            
                <form className="selectForm" onSubmit={handleSubmit}>
                         <label htmlFor="category">Select Category:</label>
                <br/>    
                    <select className="ui search dropdown" name="category" onChange={(e) => onCat(e.target.value) }>
                        <option value="9">General Knowledge</option>
                        <option value="17">Science & Nature</option>
                        <option value="10">Entertainment</option>
                        <option value="27">Animals</option>
                    </select>
                <br/>   
                    <label htmlFor="difficulty">Select Difficulty:</label>
                        <br/>
                            <select className="ui search dropdown" name="difficulty" onChange={(e) => onDif(e.target.value)} >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>   
                <br/>
                <br/>
                    <button className="ui button" type="submit" onClick={() =>  onSubmit() }>Submit</button>
                <br/>
                </form>
            </div>
        </div>   
        
    );
    
}
export default Options;
