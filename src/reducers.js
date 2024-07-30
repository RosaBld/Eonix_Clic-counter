/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';

// adding a sample reducer to ensure the combineReduces receives one valide reduces
const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // language: languageProviderReducer,
    // global: globalReducer,
    //conflict with language and global reducers?
    sample: sampleReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
