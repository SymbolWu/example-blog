import {combineReducers} from 'redux'
import navMenu from './NavReducers'
import article from './ArticleReducer'

const rootReducer = combineReducers({
    navMenu,
    article
});

export default rootReducer;