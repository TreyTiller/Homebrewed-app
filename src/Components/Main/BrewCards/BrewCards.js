import React from 'react';
import './BrewCard.css';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import config from '../../../config';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "listData": []
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/recipes`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
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
                                <p>Skill: {card.skill}</p>
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