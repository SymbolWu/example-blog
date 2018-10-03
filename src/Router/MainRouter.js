import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import * as routePath from '../Constants/RouterConstants'

import HomeContainer from '../Containers/HomeContainer'
import ArticleContainer from '../Containers/ArticleContainer'
import ArticleDetailContainer from '../Containers/ArticleDetailContainer'
import PhotographContainer from '../Containers/PhotographContainer'
import AboutMeComponent from '../Components/AboutMe/AboutMeComponent'

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={routePath.HOME_PATH} component={HomeContainer} />

                {/* <Route exact path={routePath.ARTICLE_PATH} component={ArticleRoute} /> */}
                {/* <Switch>
                    <Route exact path={routePath.ARTICLE_PATH} component={ArticleContainer} />
                    <Route path={routePath.ARTICLE_DETAIL_PATH} component={ArticleDetailContainer} />
                </Switch> */}
                <Route path={routePath.ARTICLE_PATH} component={ArticleContainer} />
                <Route path={routePath.ARTICLE_DETAIL_PATH} component={ArticleDetailContainer} />

                <Route path={routePath.PHOTOGRAPH_PATH} component={PhotographContainer} />

                <Route path={routePath.ABOUTME_PATH} component={AboutMeComponent} />
            </Switch>
        )
    }
}
export default MainRouter;