import React from 'react';

class AddDirections extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onAddDirection(e.target.itemToAdd.value)
      }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    name='itemToAdd'
                    type='text'
                    placeholder='This is a direction'
                    aria-label='Directions List Item'
                />
                <button type='submit'>Add Direction</button>
            </form>
        )
    }
}

export default AddDirections;