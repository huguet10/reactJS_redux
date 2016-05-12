import { createStore, combineReducers } from 'redux';
import route from './modules/route';
import catalog from './modules/catalog';

export default function configureStore() {
  const appReducer = combineReducers({
    route,
    catalog
  });
  const store = createStore(appReducer);
  return store;
}
