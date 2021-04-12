import { AppState } from '../../store';

export const getUsers = ({ main: { users } }: AppState): User[] => users;
