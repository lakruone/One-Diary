import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import UserReducer from './modules/user/reducers/userReducer';

const reducer = combineReducers({
  form: formReducer,
  UserReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;