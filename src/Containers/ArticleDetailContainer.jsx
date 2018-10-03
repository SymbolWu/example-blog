import { connect } from 'react-redux'
import ArticleDetail from '../Components/Article/ArticleDetail'
import { fetchSingleArticle } from '../Redux/Actions/ArticleAction'
import {
    getArticleBodyLoading,
    getArticleBodyId,
    getArticleBodyTitle,
    getArticleBodyAuthor,
    getArticleBodyAuthorAvatar,
    getArticleBodyPublishdate,
    getArticleBodyContent
} from '../Selectors/ArticleSelector'
const mapStateToProps = (state) => {
    return {
        id: getArticleBodyId(state),
        title: getArticleBodyTitle(state),
        author: getArticleBodyAuthor(state),
        authorAvatar: getArticleBodyAuthorAvatar(state),
        publishdate: getArticleBodyPublishdate(state),
        content: getArticleBodyContent(state),
        loading: getArticleBodyLoading(state)
    }
}
export default connect(mapStateToProps, {
    fetchSingleArticle
})(ArticleDetail);
