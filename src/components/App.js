import React, {useState} from 'react';
import Options from './Options';
import Quiz from './Quiz';
import axios from 'axios';
import Restart from './Restart';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    const [questions,setQuestions] = useState([]);
    const [category, setCategory] = useState('9');
    const [difficulty, setDifficulty] = useState('easy');
    const [point,setPoint] = useState(0);
 
    const  search = async () =>{
        const { data } = await axios.get('https://opentdb.com/api.php',{
          params: {
              amount: 10,
              category: category,
              difficulty: difficulty,
              type: 'multiple'
          }
      });
      setQuestions(data.results);
    };
    
    const handleCount = (point) => {
        setPoint(point);
    }

    const handleCategory = (cat) => {
        setCategory(cat);
      }

    const handleDifficulty = (dif) => {
        setDifficulty(dif);
    }

    return(
        <Router>
            <Route exact path="/" render={() => 
            <Options onDif={handleDifficulty} onCat={handleCategory} onSubmit={search}/>
        }/>
            <Route path="/quiz" render = {() => 
             <Quiz questions={questions}  counterPoint={handleCount}/>
        }/> 
            <Route path="/restart" render = {()=>
            <Restart countPoint={point}/>
        }/>
        </Router>
        )  
    
}
export default App;