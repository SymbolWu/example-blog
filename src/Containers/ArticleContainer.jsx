import ArticlePageView from '../Components/Article/ArticlePageView'
import { getArticleList, getArticleListLoading } from '../Selectors/ArticleSelector'
import { fetchAllArtilceListRequest, setArticleList } from '../Redux/Actions/ArticleAction'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        articleList: getArticleList(state),
        articleloading: getArticleListLoading(state)
    }
}
export default connect(mapStateToProps, {
    fetchAllArtilceListRequest,
    setArticleList
})(ArticlePageView)