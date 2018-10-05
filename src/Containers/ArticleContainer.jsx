import { connect } from 'react-redux'
import ArticlePageView from '../Components/Article/ArticlePageView'

import { getArticleList, getArticleListLoading } from '../Selectors/ArticleSelector'
import { getPageHeaderName, getPageDescription, getPageHeaderloading } from '../Selectors/PageHeaderSelector'

import { fetchAllArtilceListRequest, setArticleList } from '../Redux/Actions/ArticleAction'
import { fetchPageHeaderRequest, setPageHeader } from '../Redux/Actions/PageHeaderAction'

const mapStateToProps = (state) => {
    return {
        articleList: getArticleList(state),
        articleloading: getArticleListLoading(state),

        pageName:getPageHeaderName(state),
        pageDescription:getPageDescription(state),
        pageHeaderloading:getPageHeaderloading(state)
    }
}
export default connect(mapStateToProps, {
    fetchAllArtilceListRequest,
    fetchPageHeaderRequest,
    setPageHeader,
    setArticleList
})(ArticlePageView)