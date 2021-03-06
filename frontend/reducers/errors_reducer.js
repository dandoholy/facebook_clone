import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import profilesErrorsReducer from './profiles_errors_reducer';
import postsErrorsReducer from './posts_errors_reducer';
import commentsErrorsReducer from './comments_errors_reducer';


const errorsReducer = combineReducers(
  {
    session: sessionErrorsReducer,
    profile: profilesErrorsReducer,
    posts: postsErrorsReducer,
    comments: commentsErrorsReducer,

  }
);

export default errorsReducer;
