import React from 'react';
import DirectionItem from './DirectionItem';

export default function DirectionList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <DirectionItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
        />
      )}
    </ul>
  )
}

DirectionList.defaultProps = {
  items: []
}