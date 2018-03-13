import { merge } from 'lodash';

import {
  RECEIVE_COMMENT, DELETE_COMMENT
} from '../actions/comment_actions';
import {
  RECEIVE_ALL_POSTS, DELETE_POST
} from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment })
    case DELETE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.comments)
    default:
      return state;
  }
};

export default commentsReducer;
