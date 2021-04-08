import { asyncDispatch } from '../store';
import api from '/src/api';
import config from '/src/common/constants/api';

/* export const getBoards = async (id: number): Board => {
  try {
    const { data: boards } = await api.get(config.boards, { id });
    await asyncDispatch('SUCCESS_ACTION_TYPE', boards);
  } catch (e) {
    asyncDispatch('ERROR_ACTION_TYPE');
  }
}; */
