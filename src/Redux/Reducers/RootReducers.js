import { combineReducers } from 'redux'
import navMenu from './NavReducers'
import article from './ArticleReducer'
import photograph from './PhotographReducer'
import pageHeader from './PageHeaderReducer'

const rootReducer = combineReducers({
    navMenu,
    article,
    photograph,
    pageHeader
});

export default rootReducer;