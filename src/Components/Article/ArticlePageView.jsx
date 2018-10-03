import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleTableComponent from './ArticleTableComponent'
class ArticlePageView extends Component {
    static propTypes = {
        articleList: PropTypes.array.isRequired,
        articleloading: PropTypes.bool.isRequired,
        fetchAllArtilceListRequest: PropTypes.func.isRequired,
        setArticleList: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { setArticleList } = this.props;
        setArticleList([], true);
    }
    componentDidMount() {
        const { fetchAllArtilceListRequest } = this.props;
        fetchAllArtilceListRequest();
    }
    render() {
        const { articleList, articleloading } = this.props;
        return articleloading
            ? <div>Loading...</div>
            : <div>
                <ArticleTableComponent
                    articleList={articleList}
                    loading={articleloading}
                />
            </div>

    }
}
export default ArticlePageView;