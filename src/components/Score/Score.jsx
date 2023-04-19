import { useSelector } from 'react-redux';

import './Score.css';


export default function Score() {
    const { isHideScore, score } = useSelector(state => ({
        isHideScore: state.game.isHideScore,
        score: state.game.score,
    }));

    const styles = {
        score: () => {
            return {
                display: `${isHideScore ? 'none' : 'flex'}`
            }
        }
    }
    const scoreStyles = styles.score();


    return (
        <h2 className="score" style={scoreStyles}>
            <p className="score__title">Score:&nbsp;</p>
            <span className="score__value">{score}</span>
        </h2>
    )
}