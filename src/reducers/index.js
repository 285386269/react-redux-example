import { combineReducers } from 'redux';
import postsReducer from './postReducer'

//新增了item后，鼠标放在posts上，会显示出来
export default combineReducers({
    posts: postsReducer,
});