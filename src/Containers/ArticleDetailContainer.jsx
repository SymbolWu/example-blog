import { connect } from 'react-redux'
import ArticleDetailPageView from '../Components/Article/ArticleDetailPageView'
import { fetchSingleArticle,setSingleArticle } from '../Redux/Actions/ArticleAction'
import {
    getArticleBodyLoading,
    getArticleBodyId,
    getArticleBodyTitle,
    getArticleBodyDescription,
    getArticleBodyAuthor,
    getArticleBodyAuthorAvatar,
    getArticleBodyPublishdate,
    getArticleBodyContent
} from '../Selectors/ArticleSelector'
const mapStateToProps = (state) => {
    return {
        id: getArticleBodyId(state),
        title: getArticleBodyTitle(state),
        description:getArticleBodyDescription(state),
        author: getArticleBodyAuthor(state),
        authorAvatar: getArticleBodyAuthorAvatar(state),
        publishdate: getArticleBodyPublishdate(state),
        content: getArticleBodyContent(state),
        loading: getArticleBodyLoading(state)
    }
}
export default connect(mapStateToProps, {
    fetchSingleArticle,
    setSingleArticle
})(ArticleDetailPageView);
