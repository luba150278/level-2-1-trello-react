import { createStore } from 'redux';
import rootReducer from './reducer';

export interface AppState {
  board: BoardState; // эти интерфейсы нужно описать в редьюсерах соответствующих
  boards: BoardsState;
  user: UserState;
}

const initialState: AppState = {
  board: {},
  boards: [],
  user: {},
};

const store = createStore(rootReducer, initialState);

export const asyncDispatch = store.dispatch;
export default store;
