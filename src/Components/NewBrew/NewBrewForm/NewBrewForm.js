import React from "react";



class AddBrewForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            time: "",
            skill: "",
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
        const { title, skill, time } = this.state;
        alert(` ${title}, ${skill}, ${time} `);

        var url = 'http://localhost:8000/api/recipes';
        var data = { title: this.state.title, time: this.state.time, skill: this.state.skill }
        let recipe = {}


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                recipe = response
                return fetch(`http://localhost:8000/api/supplies/${recipe.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state.supplies)
                })
            })
            .then(response => {
                return fetch(`http://localhost:8000/api/directions/${recipe.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state.directions)
                })
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
            <form onSubmit={this.handleSubmit}>
                <label>Add a title for your brew method:</label>
                <input placeholder="French Press" name="title" value={this.state.title} onChange={this.handleTitleChange} required />
                <label>What is the difficulty of this method:</label>
                <select value={this.state.skill} onChange={(evt) => this.updateState(evt)} name={this.state.skill}>
                    <option value="Hard">Hard</option>
                    <option value="Medium">Medium</option>
                    <option value="Easy">Easy</option>
                </select>
                <label>How long will this take to make:</label>
                <input type="text" placeholder="4:00" name="time" value={this.state.time} onChange={this.handleTimeChange} />

                <h4>Supplies</h4>

                {this.state.supplies.map((supplies, idx) => (
                    <div className="supplies">
                        <input
                            type="text"
                            placeholder="Coffee Filter"
                            value={supplies.title}
                            onChange={this.handleSuppliesChange(idx)}
                        />
                        <button
                            type="button"
                            onClick={this.handleRemoveSupplies(idx)}
                            className="small"
                        >
                            -
            </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddSupplies}
                    className="small"
                >
                    Add Supplies
        </button>

                <h4>Directions</h4>

                {this.state.directions.map((directions, idx) => (
                    <div className="directions">
                        <input
                            type="text"
                            placeholder="Grind beans to the coarseness of sea salt"
                            value={directions.title}
                            onChange={this.handleDirectionsChange(idx)}
                        />
                        <button
                            type="button"
                            onClick={this.handleRemoveDirections(idx)}
                            className="small"
                        >
                            -
            </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddDirections}
                    className="small"
                >
                    Add Directions
        </button>
                <button type="submit">Create Brew</button>
            </form>
        );
    }
}

export default AddBrewForm;
