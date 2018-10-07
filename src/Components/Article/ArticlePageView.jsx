import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleListComponent from './ArticleListComponent'
import PageHeaderComponent from '../Public/PageHeaderComponent'
class ArticlePageView extends Component {
    static propTypes = {
        pageName: PropTypes.string.isRequired,
        pageDescription: PropTypes.string.isRequired,
        pageHeaderloading: PropTypes.bool.isRequired,
        fetchPageHeaderRequest: PropTypes.func.isRequired,
        setPageHeader: PropTypes.func.isRequired,

        articleList: PropTypes.array.isRequired,
        articleloading: PropTypes.bool.isRequired,
        fetchAllArtilceListRequest: PropTypes.func.isRequired,
        setArticleList: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { setArticleList, setPageHeader } = this.props;
        setArticleList([], true);
        setPageHeader({
            pageName: '',
            pageDescription: ''
        }, true);
    }
    componentDidMount() {
        const { fetchAllArtilceListRequest, fetchPageHeaderRequest } = this.props;
        fetchAllArtilceListRequest();
        fetchPageHeaderRequest();
    }
    render() {
        const {
            articleList,
            articleloading,
            pageName,
            pageDescription,
            pageHeaderloading
        } = this.props;
        return (
            <div className='article'>
                <div>
                    {
                        pageHeaderloading
                            ? <div>Page Header Loding...</div>
                            : <PageHeaderComponent
                                pageName={pageName}
                                pageDescription={pageDescription}
                            />
                    }
                </div>
                <div>
                    {
                        articleloading
                            ? <div>Loading...</div>
                            : <ArticleListComponent
                                articleList={articleList}
                                loading={articleloading}
                            />
                    }
                </div>
            </div>
        )
    }
}
export default ArticlePageView;