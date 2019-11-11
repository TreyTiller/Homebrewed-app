import React from 'react';

class AddSupplies extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onAddItem(e.target.itemToAdd.value)
      }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    name='itemToAdd'
                    type='text'
                    placeholder='24 Grams Coffee'
                    aria-label='Supplies List Item'
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}

export default AddSupplies;