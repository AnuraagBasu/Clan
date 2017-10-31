import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import * as reducers from './reducers';

export default combineReducers( Object.assign( { form: reduxFormReducer }, reducers ) );