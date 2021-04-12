import { AppState } from '../../store';

export const getBoards = ({ main: { boards } }: AppState): Board[] => boards;
