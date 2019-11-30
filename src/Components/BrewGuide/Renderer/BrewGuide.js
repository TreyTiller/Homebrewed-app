import React from 'react';
//import Guide from '../Guide';
import Stopwatch from '../Stopwatch';
import HeaderBack from '../../Header/Header-Back';
import TokenService from '../../../services/token-service';
import { Link } from 'react-router-dom';
import Icon from '../../../../src/icons8-coffee-beans-50.png'
import Water from '../../../../src/icons8-camping-kettle-64.png'
import './BrewGuide.css'

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
        fetch(`http://localhost:8000/api/recipes/${id}`, {
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
                // return res.json();
            })
        //   .then(() => {
        //     this.setState({
        //       notes: this.state.notes.filter(note => note.id !== note_id)
        //     });
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
    };


    componentDidMount() {
        const id = this.props.match.params.recipe_id
        fetch(`http://localhost:8000/api/recipes/${id}`, {
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(recipes => {
                this.setState({
                    recipe: recipes
                })
                console.log(this.state.recipe)
            })
            .then(
                fetch(`http://localhost:8000/api/supplies/${id}`)
                    .then(response => response.json())
                    .then(supplies => {
                        this.setState({
                            supplies: supplies
                        })
                        console.log(this.state.supplies)
                    })
            )
            .then(
                fetch(`http://localhost:8000/api/directions/${id}`)
                    .then(response => response.json())
                    .then(directions => {
                        this.setState({
                            directions: directions
                        })
                        console.log(this.state.directions)
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
                            <img src={ Icon } alt="icon" className="bean"></img>
                            <h3>{this.state.recipe.coffee}</h3>
                        </div>
                        <div className="water">
                            <img src={ Water } alt="icon" className="bean"></img>
                            <h3>{this.state.recipe.water}</h3>
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
                <Link to="/dashboard">
                    <button
                        className="deleteGuideButton"
                        onClick={this.deleteGuideRequest}
                    >Delete Brew Guide</button>
                </Link>
            </div>
        )
    }
}

export default BrewGuide;