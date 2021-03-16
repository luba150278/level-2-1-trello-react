import React from 'react';
import { useHistory } from 'react-router-dom';

const Main: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About</h1>
      <p>This is a training React-project. An analogue of the "Trello" service.</p>
      <button className="btn" onClick={(): void => history.push('/board')}>
        Go to the 'Board' page
      </button>
    </>
  );
};

export default Main;
