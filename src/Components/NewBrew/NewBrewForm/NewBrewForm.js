import React from "react";
import TokenService from "../../../services/token-service";
import config from '../../../config';
import './NewBrewForm.css';
import { Button, Input } from '../../Utils/Utils';
import Trash from '../../../../src/icons8-remove-100.png';



class AddBrewForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            time: "",
            skill: "",
            coffee: "",
            water: "",
            supplies: [{ title: "" }],
            directions: [{ title: "" }]
        };
    }

    handleTitleChange = evt => {
        this.setState({ title: evt.target.value });
    };

    handleTimeChange = evt => {
        this.setState({ time: evt.target.value });
    };

    handleCoffeeChange = evt => {
        this.setState({ coffee: evt.target.value });
    };

    handleWaterChange = evt => {
        this.setState({ water: evt.target.value });
    };

    handleSuppliesChange = idx => evt => {
        const newSupplies = this.state.supplies.map((supplies, sidx) => {
            if (idx !== sidx) return supplies;
            return { ...supplies, title: evt.target.value };
        });

        this.setState({ supplies: newSupplies });
    };

    handleDirectionsChange = idx => evt => {
        const newDirections = this.state.directions.map((directions, sidx) => {
            if (idx !== sidx) return directions;
            return { ...directions, title: evt.target.value };
        });

        this.setState({ directions: newDirections });
    };

    updateState = (evt) => {
        let newSkill = evt.target.value;
        this.setState({
            skill: newSkill
        })
    }

    handleSubmit = evt => {
        evt.preventDefault()
        const { title } = this.state;
        alert(`Your ${title} guide has been created!`);

        var url = `${config.API_ENDPOINT}/api/recipes`;
        var data = { title: this.state.title, time: this.state.time, skill: this.state.skill, coffee: this.state.coffee, water: this.state.water }
        let recipe = {}


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                recipe = response
                return fetch(`${config.API_ENDPOINT}/api/supplies/${recipe.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${TokenService.getAuthToken()}`
                    },
                    body: JSON.stringify(this.state.supplies)
                })
            })
            .then(response => {
                return fetch(`${config.API_ENDPOINT}/api/directions/${recipe.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${TokenService.getAuthToken()}`
                    },
                    body: JSON.stringify(this.state.directions)
                })
            })
            .then(response => {
                this.props.history.push("/dashboard")
            })
    }



    handleAddSupplies = () => {
        this.setState({
            supplies: this.state.supplies.concat([{ title: "" }])
        });
    };

    handleAddDirections = () => {
        this.setState({
            directions: this.state.directions.concat([{ title: "" }])
        });
    };

    handleRemoveSupplies = idx => () => {
        this.setState({
            supplies: this.state.supplies.filter((s, sidx) => idx !== sidx)
        });
    };

    handleRemoveDirections = idx => () => {
        this.setState({
            directions: this.state.directions.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="new_brew">
                <section className="form_upper">
                    <label>Add a title for your brew method:</label>
                    <Input placeholder="French Press" name="title" value={this.state.title} onChange={this.handleTitleChange} required />
                    <label>What is the difficulty of this method:</label>
                    <select value={this.state.skill} onChange={(evt) => this.updateState(evt)} name={this.state.skill}>
                        <option value="Hard">Hard</option>
                        <option value="Medium">Medium</option>
                        <option value="Easy">Easy</option>
                    </select>
                    <label>How long will this take to make:</label>
                    <Input type="text" placeholder="4:00" name="time" value={this.state.time} onChange={this.handleTimeChange} />
                    <label>How many grams of coffee will this require:</label>
                    <Input type="text" placeholder="24 Grams" name="coffee" value={this.state.coffee} onChange={this.handleCoffeeChange} />
                    <label>How many grams of water will this require:</label>
                    <Input type="text" placeholder="350 Grams" name="water" value={this.state.water} onChange={this.handleWaterChange} />
                </section>
                <section className="supplies_lower">
                    <h4>Supplies</h4>

                    {this.state.supplies.map((supplies, idx) => (
                        <div className="add_supplies">
                            <Input
                                type="text"
                                placeholder="Coffee Filter"
                                value={supplies.title}
                                onChange={this.handleSuppliesChange(idx)}
                            />
                            <Button
                                type="button"
                                onClick={this.handleRemoveSupplies(idx)}
                                className="delete"
                            >
                                <img src={Trash} alt="delete icon" className="trash"></img>
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        onClick={this.handleAddSupplies}
                        className="add"
                    >
                        Add Supplies
                    </Button>
                </section>
                <section className="directions_lower">
                    <h4>Directions</h4>


                    {this.state.directions.map((directions, idx) => (
                        <div className="add_directions">
                            <Input
                                type="text"
                                placeholder="Grind beans to the coarseness of sea salt"
                                value={directions.title}
                                onChange={this.handleDirectionsChange(idx)}
                            />
                            <Button
                                type="button"
                                onClick={this.handleRemoveDirections(idx)}
                                className="delete"
                            >
                                <img src={Trash} alt="delete icon" className="trash"></img>
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        onClick={this.handleAddDirections}
                        className="add"
                    >
                        Add Directions
                    </Button>
                </section>
                <div className="create_button">
                    <Button type="submit" className="create" >Create Brew</Button>
                </div>
            </form>
        );
    }
}

export default AddBrewForm;
