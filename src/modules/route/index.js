import { SET_ROUTE } from './actions';
export * from './actions';

function route (state = 'catalog', action) {
  switch(action.type) {
    case SET_ROUTE:
      return action.route;
    default:
      return state;
  }
}

export default route;
