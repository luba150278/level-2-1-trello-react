import React, { useEffect, useState } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import { IBoard } from '../../interfaces/board';
import Board from './components/Board/Board';

const Main: React.FC = () => {
  /*   const history = useHistory(); */
  const [list, setTodos] = useState<IBoard[]>([]);
  useEffect(() => {
    const boards = [
      { id: 1, title: 'покупки' },
      { id: 2, title: 'подготовка к свадьбе' },
      { id: 3, title: 'курс по продвижению' },
      { id: 4, title: 'разработка магазина' },
    ];
    setTodos(boards);
  }, []);

  return (
    <>
      <h1>My Boards</h1>
      <p>This is a training React-project. An analogue of the "Trello" service.</p>
      <Board list={list} />
      {/*       <button className="btn" onClick={(): void => history.push('/board')}>
        Go to the 'Board' page
      </button> */}
    </>
  );
};

export default Main;
