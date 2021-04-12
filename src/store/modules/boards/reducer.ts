import { IBoard } from '../../../interfaces/board';

export interface BoardsState {
  boards: IBoard[];
}
const initialState: BoardsState = {
  boards: [],
};

export default function boardsReducer(state = initialState, action: { type: string }): BoardsState {
  switch (action.type) {
    case 'UPDATE_BOARDS':
      return {
        ...state,
        boards: action.boards,
      };
    default: {
      return { ...state };
    }
  }
}
