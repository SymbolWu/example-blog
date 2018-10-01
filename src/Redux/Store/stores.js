
import{createStore,applyMiddleware} from 'redux'
import rootReducer from '../Reducers/RootReducers'
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState); 
    console.log('Store:',store);
    return store;
  }
