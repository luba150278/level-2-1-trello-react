import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IBoard } from '../../../../interfaces/board';
import './board.css';

type BoardsList = {
  list: IBoard[];
};

const Board: React.FC<BoardsList> = ({ list }) => {
  const history = useHistory();

  const items = list.map((item: IBoard) => {
    const linkId = `/board/${item.id}`;
    return (
      <Link to={linkId}>
        <div className="board-title card" key={item.id}>
          {item.title}
        </div>
      </Link>
    );
  });

  return (
    <div className="contentPage">
      <button className="btn  btn-add-board" onClick={(): void => history.push('/board')}>
        Add Board
      </button>
      <div className="board">{items}</div>
    </div>
  );
};

export default Board;
