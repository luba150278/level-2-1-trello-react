import React from 'react';
import { IBoard } from '../../../../interfaces/board';

type BoardsList = {
  list: IBoard[];
};

const Board: React.FC<BoardsList> = ({ list }) => {
  const items = list.map((item: IBoard) => <li>{item}</li>);
  return <ul>{items}</ul>;
};

export default Board;
