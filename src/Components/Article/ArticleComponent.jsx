import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleListForm from './ArticleListForm'
class ArticleComponent extends Component {
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
                <ArticleListForm
                    articleList={articleList}
                    loading={articleloading}
                />
            </div>

    }
}
export default ArticleComponent;