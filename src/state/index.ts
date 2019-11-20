import makeStore from './store';

export default makeStore;

export * from './store';
export * from './DeployDuck';
export * from './GitDuck';

/**
 * Sugar for Object.assign({}, state, val), the
 * cleanest way to shallowMerge object in JS.
 * @param state 
 * @param val 
 */
export function shallowMerge<State extends object, Payload extends object>(state:State, val:Payload) {
  return Object.assign({}, state, val);
}