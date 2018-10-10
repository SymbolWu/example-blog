import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import * as routePath from '../Constants/RouterConstants'

import HomeContainer from '../Containers/HomeContainer'
import ArticleContainer from '../Containers/ArticleContainer'
import ArticleDetailContainer from '../Containers/ArticleDetailContainer'
import PhotographContainer from '../Containers/PhotographContainer'
import AlbumDetailContainer from '../Containers/AlbumDetailContainer'

import AboutMePageView from '../Components/AboutMe/AboutMePageView'
import NotFoundPageView from '../Components/Public/NotFoundPageView'

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={routePath.HOME_PATH} component={HomeContainer} />

                {/**
                 * Article route
                 */}
                <Route path={routePath.ARTICLE_PATH} component={ArticleContainer} />
                <Route path={routePath.ARTICLE_DETAIL_PATH} component={ArticleDetailContainer} />

                 {/**
                  * Album route
                  */}
                <Route path={routePath.PHOTOGRAPH_PATH} component={PhotographContainer} />
                <Route path={routePath.ALBUM_DETAIL_PATH} component={AlbumDetailContainer} />

                {/**
                 * About route
                 */}
                <Route path={routePath.ABOUTME_PATH} component={AboutMePageView} />

                <Route path={routePath.ABOUTME_PATH} component={AboutMePageView} />

                <Route  component={NotFoundPageView} />
            </Switch>
        )
    }
}
export default MainRouter;