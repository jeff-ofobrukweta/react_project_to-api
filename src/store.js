import {createStore} from 'redux';
import rootReducers from './reducers';

export default (initialState)=>{
    return createStore(rootReducers,initialState);
}