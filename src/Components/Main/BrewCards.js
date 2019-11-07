import React from 'react';


class Cards extends React.Component {

    listData = [
        {
        "Title": "Clever",
        "Skill":"Easy",
        "Time":"4:00"
    },
    {
        "Title": "French Press",
        "Skill":"Easy",
        "Time":"4:00" 
    }
]

    render() {
        return(
            <div>
                {this.listData.map(card => 
                <div>
                    <h3>{card.Title}</h3>
                    <p>{card.Skill}</p>
                    <p>{card.Time}</p>
                    </div>
                    )}

            </div>
        )
    }
}

export default Cards;