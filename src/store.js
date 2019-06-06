import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
const initialState = {

}
const middleware = [thunk];

//第一个参数 reducer，第二个参数是状态，第三个参数是一个中间件
const store = createStore(
    rootReducer, 
    initialState, 
    compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;