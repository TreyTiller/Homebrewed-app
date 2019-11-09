import React from 'react';
import FlavorItem from './FlavorItem';

export default function FlavorList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <FlavorItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
        />
      )}
    </ul>
  )
}

FlavorList.defaultProps = {
  items: []
}