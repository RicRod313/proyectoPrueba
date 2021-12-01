import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducers from './reducers/MainReducers';

const store = createStore(
    MainReducers,
    applyMiddleware(thunk)
)

store.subscribe(() => console.log(store.getState()))

export default store;