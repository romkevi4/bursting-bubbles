import { useSelector } from 'react-redux';

import './Score.css';


export default function Score() {
    const { isHideScore, score } = useSelector(state => ({
        isHideScore: state.game.isHideScore,
        score: state.game.score,
    }));

    console.log(score);

    const scoreStyles = {
        score: () => {
            return {
                display: `${isHideScore ? 'none' : 'flex'}`
            }
        }
    }


    return (
        <h2 className="score" style={scoreStyles.score()}>
            <p className="score__title">Score:&nbsp;</p>
            <span className="score__value">{score}</span>
        </h2>
    )
}