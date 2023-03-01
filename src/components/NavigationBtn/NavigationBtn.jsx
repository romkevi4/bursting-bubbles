import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavigationBtn.css';


export default function NavigationBtn({ goToPage, nameBtn, modifierClass, onFinishGame }) {
    return (
        <div className="navigation">
            <Link
                to={goToPage}
                onClick={onFinishGame}
                className={`navigation-btn ${modifierClass}`}
            >
                {nameBtn}
            </Link>
        </div>
    )
}

NavigationBtn.propTypes = {
    goToPage: PropTypes.string.isRequired,
    nameBtn: PropTypes.string,
    modifierClass: PropTypes.string,
    onFinishGame: PropTypes.func
}

NavigationBtn.defaultProps = {
    nameBtn: 'Button',
    modifierClass: '',
    onFinishGame: () => {}
}