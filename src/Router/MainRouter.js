import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'


import * as routePath from '../Constants/RouterConstants'

import HomeComponent from '../Components/Home/HomeComponent'
import ArticleComponent from '../Components/Article/ArticleComponent'
import PhotographComponent from '../Components/Photograph/PhotographComponent'
import AboutMeComponent from '../Components/AboutMe/AboutMeComponent'

class MainRouter extends Component{
    render(){
        return(
            <Switch>
                <Route exact path={routePath.HOME_PATH} component={HomeComponent}/>
                <Route  path={routePath.ARTICLE_PATH} component={ArticleComponent}/>
                <Route  path={routePath.PHOTOGRAPH_PATH} component={PhotographComponent}/>
                <Route  path={routePath.ABOUTME_PATH} component={AboutMeComponent}/>
            </Switch>
        )
    }
}
export default MainRouter;