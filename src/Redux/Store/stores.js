
import{createStore,applyMiddleware} from 'redux'
import rootReducer from '../Reducers/AllReducers'
import thunk from 'react-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store
