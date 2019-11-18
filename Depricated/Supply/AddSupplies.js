import React from 'react';

class AddSupplies extends React.Component {
    submitItem = (e) => {
        //e.preventDefault()
        this.props.onAddItem(e.target.itemToAdd.value)
      }

    render() {
        return (
            <form>
                <input
                    name='itemToAdd'
                    type='text'
                    placeholder='24 Grams Coffee'
                    aria-label='Supplies List Item'
                />
                <button onCLick={this.submitItem}>Add Item</button>
            </form>
        )
    }
}

export default AddSupplies;