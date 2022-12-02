
import Question from "../Question/Question";
import questionsFromData from "../data/questions"
import questions from "../data/questions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

    const QuestionsRouter = (props) => {
 
       let  myNumber = 1
      
        
        const [questions, setQuestions] = useState([]);
        const [numberFromURL, setNumber] = useState(null);
        const [questionToBeRendered, setQuestionstoBeRenderd] = useState(null) 

        useEffect( () => {
            setQuestions(questionsFromData);
            setNumber(1)
        }, [])

        useEffect( () => {
               
        let questionSearch = questions.map( questionObject => {
            if(questionObject.number === numberFromURL){
                return <Question onLast={() => props.onLast(questions)} last={questionObject.last} onRate={onRate} previous={questionObject.previous} next={questionObject.next} number={questionObject.number} key={questionObject.number} question={questionObject.question} rating={questionObject.rating}/>;
            }
    });
        setQuestionstoBeRenderd(questionSearch);
        }, [numberFromURL])
  

    const onRate = (rating,number) =>{
       let oldState = questions;
       let newState = oldState.map( question => {
            if(question.number === number ){
                question.rating = rating;
                return question;
            }
            return question;
       });

     setQuestions(newState)
    }
    

    
     
        return (
            <>
                {questionToBeRendered}
            </>
        )
    }


export default QuestionsRouter;