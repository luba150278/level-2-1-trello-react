import React from 'react';
import { IBoard } from '../../../../interfaces/board';
import './board.css';

type BoardsList = {
  list: IBoard[];
  onRemove: (id: number) => void;
};

const Board: React.FC<BoardsList> = ({ list, onRemove }) => {
  const removeHandler = (event: React.MouseEvent, id: number): void => {
    event.preventDefault();
    onRemove(id);
  };

  const items = list.map((item: IBoard) => (
    <div className="board-title card" key={item.id} onClick={(event): void => removeHandler(event, item.id)}>
      {item.borardTitle}
    </div>
  ));

  return (
    <div className="contentPage">
      <div className="board">{items}</div>
      <button className="btn boardAdd">Add Board</button>
    </div>
  );
};

export default Board;
