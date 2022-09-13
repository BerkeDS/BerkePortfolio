
import { useDispatch } from 'react-redux';
import { changeClass } from '../../store/features/workCardSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


function Card(props){
    const card = props.card;

    const dispatch = useDispatch();
    function handleClick(){
        dispatch(changeClass(card.id));
    }
    let a = card.classes == false ? "" : " active";
    return(
            <div className={`card ${a}`}>
                <h2>{card.projectName}</h2>
                <a href='#'>{card.projectLink}</a>
                <h3>What is {card.projectName}</h3>
                <p>{card.description}</p>
                <h3>Tecnologies</h3>
                <p>{card.tecnologies}</p>
                <div id='icon'>
                <FontAwesomeIcon onClick={handleClick} icon={card.classes === false ? faPlusSquare : faMinusCircle} />
                </div>
            </div>
        );
}

export default Card;