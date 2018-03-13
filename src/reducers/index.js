import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import denunciaComSucessoReducer from './denunciaComSucessoReducer';


export default combineReducers({
  form: reduxFormReducer,
  denunciaComSucessoReducer,
});
