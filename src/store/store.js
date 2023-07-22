import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const loggedMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  next(action);

  console.log('nextState', store.getState());
};

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [loggedMiddleware];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
