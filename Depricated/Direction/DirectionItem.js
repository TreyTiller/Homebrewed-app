import React from 'react';

export default function DirectionItem(props) {
  return (
    <li>
      <h2>
        {props.item.name}
      </h2>
      <button
        onClick={() => props.onDeleteItem(props.item)}
        type='button'>
        delete
</button>
    </li>
  )
}

DirectionItem.defaultProps = {
  item: {}
}