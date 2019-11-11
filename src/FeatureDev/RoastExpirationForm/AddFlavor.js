import React from 'react';

class AddFlavor extends React.Component {
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
                    placeholder='Nutty'
                    aria-label='Flavor List Item'
                />
                <button type='submit'>Add Flavor</button>
            </form>
        )
    }
}

export default AddFlavor;