import React from 'react';
import './BrewCard.css';
import { Link } from 'react-router-dom';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "listData": []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/recipes/")
            .then(res => res.json())
            .then(recipes => {
                this.setState({
                    listData: recipes
                })
            })
    }

    render() {
        return (
            <div className="dashboard">
                {this.state.listData.map(card =>
                    <Link to={'/brew-guide/' + card.id} style={{ textDecoration: 'none' }}>
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