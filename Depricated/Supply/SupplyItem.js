import React from 'react';

export default function SupplyItem(props) {
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

SupplyItem.defaultProps = {
  item: {}
}