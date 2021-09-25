import React, {useState} from 'react';
import Options from './Options';
import Quiz from './Quiz';
import axios from 'axios';
import Restart from './Restart';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    const [currQues,setCurrQues] = useState(null);
    const [questions,setQuestions] = useState([]);
    const [category, setCategory] = useState('9');
    const [difficulty, setDifficulty] = useState('easy');
    const [point,setPoint] = useState(null);

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
    
    function handleCount(point){
        setPoint(point);
    }

    function handleQues(ques){
        setCurrQues(ques);
    }

    function handleCategory(cat) {
        setCategory(cat);
      }

    function handleDifficulty(dif){
        setDifficulty(dif);
    }

    return(
        <Router>
            <Route exact path="/" render={() => 
            <Options onDif={handleDifficulty} onCat={handleCategory} onSubmit={search}
       />}/>
            <Route path="/quiz" render = {() => 
             <Quiz questions={questions} counterQues={handleQues} counterPoint={handleCount}/>
        }/> 
            <Route path="/restart" render = {()=>
            <Restart countQues={currQues} countPoint={point}/>
        }/>
        </Router>
        )
    
}
export default App;