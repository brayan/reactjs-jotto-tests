import { combineReducers } from 'redux';
import success from './successReducer';
import { compileFunction } from 'vm';

export default combineReducers({
    success
});