import React from 'react';
import './BrewCard.css';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import config from '../../../config';
import Skill from '../../../../src/Images/skills_icon_02.png';
import Time from '../../../../src/Images/stopwatch_icon.png';


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
                                <div className="skill_level">
                                    <img src={Skill} alt="skill level" className="skill_level_img"></img>
                                    <p>{card.skill}</p>
                                </div>
                                <div className="prep_time">
                                    <img src={Time} alt="skill level" className="skill_level_img"></img>
                                    <p>{card.time}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}

export default Cards;