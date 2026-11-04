import {createContext, useContext, useEffect, useReducer} from "react";

// 1. Creating The Context.
const QuizContext = createContext();

const API = process.env.REACT_APP_API_URL;
const SEC_PER_QUESTION = 20;

const initialState = {
    questions: [],

    // loading, error, ready, active, finished
    status: "loading",
    index:0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };

        case "dataFailed":
            return {
                ...state,
                status: "error",
            };

        case "start":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SEC_PER_QUESTION,
            };

        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points,
            }

        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            };

        case "finished":
            return {
                ...state,
                status: "finished",
                highscore: state.points > state.highscore ? state.points : state.highscore,
            };
        case "restart":
            return {
                ...initialState,
                status: "ready",
                questions: state.questions,
            };

        case "clock":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status,
            };


        default:
            throw new Error("Unknown Action.");
    }
}

function QuizProvider({ children }) {
    const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const totalPoints = questions.reduce((prev, curr)=>(prev + curr.points), 0)
    const question = questions.at(index);

    useEffect(function () {
        // const res = axios.get(`${API}`);

        fetch(API)
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: "dataReceived",
                    payload: data,
                }),
            )
            .catch((err) =>
                dispatch({
                    type: "dataFailed",
                }),
            );
    }, []);
    return(
        // 2. Providing Value to the Context.
        <QuizContext.Provider
            value={{questions, question, status, index, numQuestions, totalPoints, answer, points, highscore, secondsRemaining, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

function useQuiz() {
    const context = useContext(QuizContext);
    if(context === undefined) {
        throw new Error('useQuiz must be used within QuizProvider');
    }
    return context;
}

export { QuizProvider, useQuiz };