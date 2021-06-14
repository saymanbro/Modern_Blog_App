import {combineReducers} from 'redux';
import {blogs , authReducer} from './index';


 const allReducer = combineReducers({blogs, authReducer});
export default allReducer;