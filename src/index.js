import React from 'react';
import ReactDOM from 'react-dom';
import './quiz.css';
import quizService from './quizService'; 
import QuestionBox from './components/questionbox';
import Replay from './components/replay';
class Quiz extends React.Component{
    state = {
        questionBank : [],
        score : 0 ,
        responses : 0 
    }
    getQuestion = () => {
        quizService().then(question => this.setState({questionBank : question}))
    }

    

    ComputeAnswer = (answer,correctAnswer) => {
        if(answer===correctAnswer){
            
            this.setState({score : this.state.score + 1})};
            this.setState({responses : this.state.responses < 5 ? this.state.responses + 1 : 5})
        }
    playAgain = () => {
        this.getQuestion();
        this.setState({
            score:0,
            responses:0
        })
    }

    componentDidMount(){
        this.getQuestion();
    }
    
 
    render(){
        return(
            <div className='container'>
                <div className='header'>QuizBee</div>
                {this.state.questionBank.map(({question,answers,correct,questionId}) => <QuestionBox question={question} options={answers} key={questionId}  selected={answer => this.ComputeAnswer(answer,correct) } />)}
                {this.state.responses === 5 ? <Replay score={this.state.score} playAgain={this.playAgain}/> : null }
            </div>
        )
    }
}

ReactDOM.render(<Quiz />,document.getElementById('root'));