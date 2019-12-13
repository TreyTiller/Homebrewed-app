import React from 'react';
import Stopwatch from '../Stopwatch';
import HeaderBack from '../../Header/Header-Back';
import TokenService from '../../../services/token-service';
import { Link } from 'react-router-dom';
import Icon from '../../../../src/icons8-coffee-beans-50.png';
import Water from '../../../../src/icons8-camping-kettle-64.png';
import './BrewGuide.css';
import config from '../../../config';
import Trash from '../../../../src/icons8-remove-100.png';

class BrewGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            supplies: [],
            directions: []
        }
    }


    deleteGuideRequest = recipe_id => {
        const id = this.props.match.params.recipe_id
        fetch(`${config.API_ENDPOINT}/api/recipes/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return alert('This brew guide has been deleted');
            })
    };


    componentDidMount() {
        const id = this.props.match.params.recipe_id
        fetch(`${config.API_ENDPOINT}/api/recipes/${id}`, {
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(recipes => {
                this.setState({
                    recipe: recipes
                })
            })
            .then(
                fetch(`${config.API_ENDPOINT}/api/supplies/${id}`)
                    .then(response => response.json())
                    .then(supplies => {
                        this.setState({
                            supplies: supplies
                        })
                    })
            )
            .then(
                fetch(`${config.API_ENDPOINT}/api/directions/${id}`)
                    .then(response => response.json())
                    .then(directions => {
                        directions.sort((a, b) => a.id - b.id);
                        this.setState({
                            directions: directions
                        })
                    })
            )
    }

    render() {
        return (
            <div>
                <section>
                    <HeaderBack />
                    <h2 className="title">{this.state.recipe.title}</h2>
                    <div className="grams">
                        <div className="coffee">
                            <img src={Icon} alt="icon" className="bean"></img>
                            <h3 className="measurement">{this.state.recipe.coffee}</h3>
                        </div>
                        <div className="water">
                            <img src={Water} alt="icon" className="pot"></img>
                            <h3 className="measurement">{this.state.recipe.water}</h3>
                        </div>
                    </div>

                    <div className="supplies">
                        <h3>Supplies:</h3>
                        {this.state.supplies.map(supplies =>
                            <h4>{supplies.title}</h4>
                        )}
                    </div>

                    <div className="directions">
                        <h3>Directions:</h3>
                        {this.state.directions.map(directions =>
                            <h4>{directions.title}</h4>
                        )}
                    </div>
                </section>
                <Stopwatch />
                <div className="delete_but">
                    <Link to="/dashboard">
                        <button
                            className="deleteGuideButton"
                            onClick={this.deleteGuideRequest}
                        ><img src={Trash} alt="delete icon" className="trash"></img></button>
                    </Link>
                </div>
            </div>
        )
    }
}
BrewGuide.defaultProps = {
    match: {
        params: {
            
        }
    }
}
export default BrewGuide;