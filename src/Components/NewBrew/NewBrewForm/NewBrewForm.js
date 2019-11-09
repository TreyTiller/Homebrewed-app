import React from 'react';
import AddSupplies from './Supply/AddSupplies';
import SupplyList from './Supply/SupplyList';
import DirectionList from './Direction/DirectionList';

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

      handleAddDirection = (directionName) => {
        const newDirections = [
          ...this.state.directions,
          { name: directionName }
        ]
        this.setState({
          direction: newDirections
        })
      }


    render() {
        return (
            <div className="new-brew-renderer">
                <AddSupplies onAddItem={this.handleAddItem} />
                <SupplyList 
                    items={this.state.supplies}
                    onDeleteItem={this.handleDeleteItem} />
                <DirectionList onAddDirection={this.handleAddDirection} />
            </div>
        )
    }
}

export default NewBrewForm;