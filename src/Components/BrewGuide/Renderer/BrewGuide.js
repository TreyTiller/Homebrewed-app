import React from 'react';
//import Guide from '../Guide';
import Stopwatch from '../Stopwatch';
import HeaderBack from '../../Header/Header-Back';
import TokenService from '../../../services/token-service'

class BrewGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            supplies: [],
            directions: []

        }
    }


    componentDidMount() {
        const id = this.props.match.params.recipe_id
        fetch(`http://localhost:8000/api/recipes/${id}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(recipes => {
                this.setState({
                    recipe: recipes
                })
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
                <HeaderBack />
                <section>
                    <h2>{this.state.recipe.title}</h2>
                    {this.state.supplies.map(supplies =>
                        <h4>{supplies.title}</h4>
                    )}
                    {this.state.directions.map(directions => 
                        <h4>{directions.title}</h4>
                        )}
                </section>
                <Stopwatch />
            </div>
        )
    }
}

export default BrewGuide;