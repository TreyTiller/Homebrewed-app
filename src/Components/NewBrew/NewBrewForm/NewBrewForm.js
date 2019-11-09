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


    render() {
        return (
            <div className="new-brew-renderer">
                <AddSupplies onAddItem={this.handleAddItem} />
                <SupplyList 
                    items={this.state.supplies}
                    onDeleteItem={this.handleDeleteItem} />
                <AddDirections onAddDirection={this.handleAddDirection} />
                <DirectionList
                    items={this.state.directions}
                    onDeleteItem={this.handleDeleteDirection} />
            </div>
        )
    }
}

export default NewBrewForm;