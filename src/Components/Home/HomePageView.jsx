import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleListComponent from '../Article/ArticleListComponent'
import AlbumCollectionComponent from '../Photograph/AlbumCollectionComponent'
import PageHeaderComponent from '../Public/PageHeaderComponent'

import PubSub from 'pubsub-js'
class HomePageView extends Component {
    static propTypes = {
        pageName: PropTypes.string.isRequired,
        pageDescription: PropTypes.string.isRequired,
        pageHeaderloading: PropTypes.bool.isRequired,
        fetchPageHeaderRequest: PropTypes.func.isRequired,
        setPageHeader: PropTypes.func.isRequired,

        articleList: PropTypes.array.isRequired,
        articleloading: PropTypes.bool.isRequired,
        fetchArtilceListRequest: PropTypes.func.isRequired,
        setArticleList: PropTypes.func.isRequired,

        albumList: PropTypes.array.isRequired,
        albumloading: PropTypes.bool.isRequired,
        fetchAlbumListRequest: PropTypes.func.isRequired,
        setAlbumList: PropTypes.func.isRequired,
    }
    componentWillMount() {
        const { setArticleList, setAlbumList, setPageHeader } = this.props;
        setArticleList([], true);
        setAlbumList([], true);
        setPageHeader({
            pageName: '',
            pageDescription: ''
        }, true);
    }
    componentDidMount() {
        const { fetchArtilceListRequest, fetchAlbumListRequest, fetchPageHeaderRequest } = this.props;
        fetchArtilceListRequest();
        fetchAlbumListRequest();
        fetchPageHeaderRequest();

        PubSub.publish('sendPathName',this.props.location.pathname);
    }
    componentWillUnmount(){

        PubSub.publish('sendPathName','Home dismissed');
    }
    render() {
        const {
            articleList,
            articleloading,
            albumList,
            albumloading,
            pageName,
            pageDescription,
            pageHeaderloading
        } = this.props;
        return (
            <div className='home'>
                {/**
                 * Home header 
                 */}
                <div className='homePic'>
                    <div className='blackMask'>
                        <header>
                            <section>
                                <h1>I am Wu Xinbo</h1>
                                <aside>Hola! The quiet world!</aside>
                            </section>
                        </header>
                    </div>
                </div>

                {/**
                 * Home content header 
                 */}
                <div className='homePageHeader'>
                    {
                        pageHeaderloading
                            ? <div>Page Header Loding...</div>
                            : <PageHeaderComponent
                                pageName={pageName}
                                pageDescription={pageDescription}
                            />
                    }
                </div>

                {/**
                 * Recent Article
                 */}
                <h1>Recent Article</h1>
                <div className='homeArticle'>
                    {
                        articleloading
                            ? <div>Article Loading...</div>
                            : <ArticleListComponent
                                articleList={articleList}
                                loading={articleloading}
                            />

                    }
                </div>

                {/**
                 * Recent Album
                 */}
                <h1>Recent Album</h1>
                <div className='homePhoto'>
                    {
                        albumloading
                            ? <div>Album Loading... </div>
                            : <AlbumCollectionComponent
                                albumList={albumList}
                                loading={albumloading}
                            />
                    }
                </div>

            </div>
        )
    }
}
export default HomePageView;