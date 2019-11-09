import React from 'react';
import SupplyItem from './SupplyItem';

export default function SupplyList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <SupplyItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
        />
      )}
    </ul>
  )
}

SupplyList.defaultProps = {
  items: []
}