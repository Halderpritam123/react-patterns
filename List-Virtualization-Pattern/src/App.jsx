import React from 'react';
import { FixedSizeList as List } from 'react-window';

const data = Array(10000).fill(true).map((_, index) => `Item ${index + 1}`);

function Row({ index, style }) {
  return (
    <div style={style}>
      {data[index]}
    </div>
  );
}

export default function App() {
  return (
    <List
      height={400}       // height of the visible window
      itemCount={data.length} 
      itemSize={35}      // height of each row
      width={300}
    >
      {Row}
    </List>
  );
}
