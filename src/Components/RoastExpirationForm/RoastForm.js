import React from 'react';
import AddFlavor from './AddFlavor';
import FlavorList from './FlavorList';

class RoastForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flavors: []
        }
    }

    handleAddItem = (itemName) => {
        const newItems = [
            ...this.state.flavors,
            { name: itemName }
        ]
        this.setState({
            flavors: newItems
        })
    }

    handleDeleteItem = (item) => {
        const newItems = this.state.flavors.filter(itm => itm !== item)
        this.setState({
            flavors: newItems
        })
    }

    render() {
        return(
            <form>
                <input placeholder="Title" />
                <div className="meta">
                    <input placeholder="Country of Origin" />
                    <input placeholder="Roast Date" />
                </div>
                <div className="flavors">
                    <label>Flavor Notes:</label>
                    <AddFlavor onAddItem={this.handleAddItem} />
                    <FlavorList 
                        items={this.state.flavors}
                        onDeleteItem={this.handleDeleteItem}/>
                </div>
                <button>Done</button>
            </form>
        )
    }
}

export default RoastForm;