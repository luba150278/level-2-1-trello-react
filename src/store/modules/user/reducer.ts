import { IUser } from '../../../interfaces/user';

export interface UserState {
  user: IUser[];
}
const initialState: UserState = {
  user: [],
};

export default function userReducer(state = initialState, action: { type: string }): UserState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
