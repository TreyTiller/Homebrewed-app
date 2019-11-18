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

    updateState = (newSkill) => {
        this.setState({
            skill: newSkill.value
        })
    }

    handleSubmit = evt => {
        const { title } = this.state;
        alert(`Created ${title} brew guide! Let's make some coffee!`);
    };

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
                <input placeholder="French Press" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                <label>What is the difficulty of this method:</label>
                <select value={this.state.skill} onChange={this.updateState}>
                    <option value="hard">Hard</option>
                    <option value="medium">Medium</option>
                    <option value="easy">Easy</option>
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
