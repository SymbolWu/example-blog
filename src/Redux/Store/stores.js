
import{createStore,applyMiddleware} from 'redux'
import rootReducer from '../Reducers/AllReducers'
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
  
    if (module.hot) {
      module.hot.accept('../Reducers/AllReducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  
    return store;
  }
