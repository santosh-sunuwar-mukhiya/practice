import {useQuiz} from "../contexts/QuizProvider";

export default function Progress() {
    const {index, numQuestions, points, totalPoints, answer} = useQuiz();
    return(
        <div>
            <header className="progress">
                <progress max={numQuestions} value={index + Number(answer !== null)} />
                <p>
                    Question <strong>{index + 1}</strong> / {numQuestions}
                </p>

                <p>
                    <strong>{points}</strong> / {totalPoints}
                </p>
            </header>
        </div>
    )
}