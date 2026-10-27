
export default function FinishScreen({points, totalPoints, highscore, dispatch}) {
    const percentage = Math.round((points / totalPoints) * 100);
    return (
        <>
            <p className={'result'}>
                You scored {points} out of {totalPoints} points {percentage}%.
            </p>
            <p className={'highscore'}>HighScore ({highscore})</p>
            <button className={"btn btn-ui"} onClick={()=>dispatch({type: "restart"})}>
                Restart Quiz
            </button>
        </>
    )
}