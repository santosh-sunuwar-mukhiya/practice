import {useQuiz} from "../contexts/QuizProvider";

export default function Options() {
    const {question, dispatch, answer} = useQuiz();
    const hasAnswered = answer !== null;
    return (
        <div className={'options'}>
            {question.options.map((option, index) => (
                <button
                    className={`btn btn-option ${index === answer ? 'answer' : ""} ${hasAnswered
                        ? index === question.correctOption
                            ? "correct"
                            : "wrong"
                        : ""
                    }`}
                    key={option}
                    onClick={()=> dispatch({type: "newAnswer", payload: index})}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

