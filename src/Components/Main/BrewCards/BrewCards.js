import React from 'react';
import './BrewCard.css';
import { Link } from 'react-router-dom';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "listData": [
                {
                    "title": "Clever",
                    "skill": "Medium",
                    "time": "5:00"
                },
                {
                    "title": "French Press",
                    "skill": "Easy",
                    "time": "4:00"
                },
                {
                    "title": "Chemex",
                    "skill": "Medium",
                    "time": "5:00"
                },
                {
                    "title": "Pour Over",
                    "skill": "Hard",
                    "time": "6:00"
                },
                {
                    "title": "Cold Brew",
                    "skill": "Easy",
                    "time": "12:00:00"
                },

            ]
        }
    }

    // componentDidMount() {
    //     fetch("http://localhost:8000/api/recipes")
    //         .then(res => res.json())
    //         .then(recipes => {
    //             this.setState({
    //                 listData: recipes
    //             })
    //         })
    // }

    render() {
        return (
            <div>
                {this.state.listData.map(card =>
                    <Link to="/brew-guide">
                        <div className="card">
                            <h3>{card.title}</h3>
                            <div className="meta">
                                <p>Skill Level: {card.skill}</p>
                                <p>Brew Time: {card.time}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}

export default Cards;