import { createStore } from 'redux';
import { BoardState } from './modules/board/reducer';
import { BoardsState } from './modules/boards/reducer';
import { UserState } from './modules/user/reducer';
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
