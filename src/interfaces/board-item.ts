import { IList } from './list';

export interface IBoard {
  id: number;
  title: string;
  cards: IList[];
}
