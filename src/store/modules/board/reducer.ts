import { IList } from '../../../interfaces/list';
import { IUser } from '../../../interfaces/user';

export interface BoardState {
  users: IUser[];
  lists: IList[];
}

const initialState: BoardState = {
  users: [],
  lists: [],
};

export default function boardReducer(state = initialState, action: { type: string }): BoardState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
