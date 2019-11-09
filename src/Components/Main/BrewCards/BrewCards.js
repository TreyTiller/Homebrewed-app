import React from 'react';
import './BrewCard.css';
import { Link } from 'react-router-dom';


class Cards extends React.Component {

    listData = [
        {
            "Title": "Clever",
            "Skill": "Easy",
            "Time": "4:00"
        },
        {
            "Title": "French Press",
            "Skill": "Easy",
            "Time": "4:00"
        },
        {
            "Title": "Pour Over",
            "Skill": "Hard",
            "Time": "5:00"
        },
        {
            "Title": "Chemex",
            "Skill": "Medium",
            "Time": "5:00"
        },
        {
            "Title": "Cold Brew",
            "Skill": "Easy",
            "Time": "12:00:00"
        },
    ]

    render() {
        return (
            <div>
                {this.listData.map(card =>
                    <Link to="/brew-guide">
                        <div className="card">
                            <h3>{card.Title}</h3>
                            <div className="meta">
                                <p>{card.Skill}</p>
                                <p>{card.Time}</p>
                            </div>
                        </div>
                    </Link>
                )}

            </div>
        )
    }
}

export default Cards;