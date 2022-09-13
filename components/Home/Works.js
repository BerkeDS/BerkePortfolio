import Card from '../Cards/WorkCard';
import { useSelector } from 'react-redux';


function Works(){
    //get card data ------------------------
    const cards = useSelector((state) => state.cards.value);

    return (
        <section id='works'>
            <div id='scroll-target-works'></div>
            <div className='card-container'>
                <h2>My Works</h2>
                <hr />
                {cards.filter(card=> card.type==="work").map( card => <Card key={card.id.toString()} card={card}/>)}
            </div>
            <div className='card-container'>
                <h2>Practice Projects</h2>
                <hr />
                {cards.filter(card=> card.type==="practice").map( card => <Card key={card.id.toString()} card={card}/>)}
            </div>
        </section>
    );
}

export default Works;