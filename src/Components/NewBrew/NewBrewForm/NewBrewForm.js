import React from 'react';
import AddSupplies from './Supply/AddSupplies';
import SupplyList from './Supply/SupplyList';
import AddDirections from './Direction/AddDirections';
import DirectionList from '../NewBrewForm/Direction/DirectionList';

class NewBrewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplies: [],
            directions: []
        }
    }

    handleAddItem = (itemName) => {
        const newItems = [
            ...this.state.supplies,
            { name: itemName }
        ]
        this.setState({
            supplies: newItems
        })
    }

    handleDeleteItem = (item) => {
        const newItems = this.state.supplies.filter(itm => itm !== item)
        this.setState({
            supplies: newItems
        })
    }

    handleDeleteDirection = (item) => {
        const newItems = this.state.directions.filter(itm => itm !== item)
        this.setState({
            directions: newItems
        })
    }

    handleAddDirection = (directionName) => {
        const newDirections = [
            ...this.state.directions,
            { name: directionName }
        ]
        this.setState({
            directions: newDirections
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()

        fetch('http://localhost:8000/api/recipes', {
            method: "POST",
            body: JSON.stringify({
                title: e.target.title.value,
                skill: e.target.skill.value,
                time: e.target.time.value
            })
        })
        
        // fetch('http://localhost:8000/api/directions', {
        //     method: "POST",
        //     body: JSON.stringify({
        //         title: e.target.itemToAdd.value,
        //         recipe_id: this.props.recipe_id
        //     })
        //})
        .then(res => res.json())
        .then(data => {
            this.state.onAddDirection(e.target.itemToAdd.value)
        })
      }


    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <label>Add a title for your brew method:</label>
                <input placeholder="French Press" name="title"/>
                <label>What is the difficulty of this method:</label>
                <input type="radio" name="skill" value="Easy" checked /> Easy<br></br>
                <input type="radio" name="skill" value="Medium" /> Medium<br></br>
                <input type="radio" name="skill" value="Hard" /> Hard<br></br>
                <label>How long will this take to make:</label>
                <input type="text" placeholder="4:00" name="time" />


                <div className="new-brew-renderer">
                    <label>Supplies:</label>
                    <AddSupplies onAddItem={this.handleAddItem} />
                    <SupplyList
                        items={this.state.supplies}
                        onDeleteItem={this.handleDeleteItem} />
                    <label>Directions:</label>
                    <AddDirections recipe_id={this.recipe_id} onAddDirection={this.handleAddDirection} />
                    <DirectionList
                        items={this.state.directions}
                        onDeleteItem={this.handleDeleteDirection} />
                </div>
                <button type="submit">Let's Brew!</button>
            </form>
        )
    }
}

export default NewBrewForm;