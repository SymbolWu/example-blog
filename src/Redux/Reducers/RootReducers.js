import { combineReducers } from 'redux'
import navMenu from './NavReducers'
import article from './ArticleReducer'
import photograph from './PhotographReducer'

const rootReducer = combineReducers({
    navMenu,
    article,
    photograph
});

export default rootReducer;