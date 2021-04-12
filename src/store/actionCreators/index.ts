import * as UserActionCreators from '../modules/user/action';
import * as BoardActionCreators from '../modules/board/action';
import * as BoardsActionCreators from '../modules/boards/action';

export default {
  ...UserActionCreators,
  ...BoardActionCreators,
  ...BoardsActionCreators,
};
