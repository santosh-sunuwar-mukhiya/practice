import {createContext, useContext, useReducer} from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
    return(
        <QuizContext.Provider value={{}}>
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