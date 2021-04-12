import api from '../../../api/request';
import { asyncDispatch } from '../../store';

// тут будут структуры типа таких
export const getBoards = async (id: number) => {
  try {
    const { data: boards } = await api.get('/boards', { params: id });
    asyncDispatch({ type: 'SUCCESS_ACTION_TYPE', payload: boards });
  } catch (e) {
    asyncDispatch({ type: 'ERROR_ACTION_TYPE' });
  }
};
