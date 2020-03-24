import React, {Component} from "react";
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component{

    constructor(props) {
        super(props);
        this.state = {
            activeQuestion:0,
            answerState: null,
            isFinished:true,
            quiz: [
                {
                    question:'Какого цвета небо?',
                    rightAnswerId:2,
                    id:1,
                    answers:[
                        {text:'Черный', id:1},
                        {text:'Синий', id:2},
                        {text:'Красный', id:3},
                        {text:'Зеленый', id:4},
                    ]
                },
                {
                    question:'Приложение созданно на ...',
                    rightAnswerId:1,
                    id:2,
                    answers:[
                        {text:'React', id:1},
                        {text:'Angular', id:2},
                        {text:'Vue', id:3},
                        {text:'CSS', id:4},
                    ]
                }
            ]
        }
    }

    onAnswerClickHandler = (answerId) =>{

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if(question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(()=>{
                if(this.isQuizFinished()) {
                    this.setState({
                        isFinished:true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState:null
                    })
                }
                window.clearTimeout(timeout)
            },1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }


    };

    isQuizFinished = () =>{
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render () {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопрос</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz/>
                        :    <ActiveQuiz
                                onAnswerClick={this.onAnswerClickHandler}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz