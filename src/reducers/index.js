// reducers/index.js

import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;