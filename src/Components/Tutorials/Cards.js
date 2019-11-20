import React from 'react';
import data from './data';
import CardRender from './CardRender';


class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: data.cards,
            card: data.cards[0]
        }
    }

    nextCard = () => {
        const newIndex = this.state.card.index+1;
        this.setState({
            card: data.cards[newIndex]
        })
    }

    prevCard = () => {
        const newIndex = this.state.card.index-1;
        this.setState({
            card: data.cards[newIndex]
        })
    }
    render() {
        const {cards, card} = this.state;
        return(
            <div>
                <button
                    onClick={() => this.nextCard()}
                    disabled={card.index === data.cards.length-1}
                    >Next</button>
                <button
                    onClick={() => this.prevCard()}
                    disabled={card.index === 0}
                    >Prev</button>
                <div className="page">
                    <CardRender card={card} />
                </div>
            
            </div>
        )
    }
}

export default Cards;