import { connect } from 'react-redux'
import HomePageView from '../Components/Home/HomePageView'

import { getArticleList, getArticleListLoading } from '../Selectors/ArticleSelector'
import { getAlbumList, getAlbumLoading } from '../Selectors/PhotographSelector'
import { getPageHeaderName, getPageDescription, getPageHeaderloading } from '../Selectors/PageHeaderSelector'

import { fetchArtilceListRequest, setArticleList } from '../Redux/Actions/ArticleAction'
import { fetchAlbumListRequest, setAlbumList } from '../Redux/Actions/PhotographAction'
import { fetchPageHeaderRequest, setPageHeader } from '../Redux/Actions/PageHeaderAction'
const mapStateToProps = (state) => {
    return {
        articleList: getArticleList(state),
        articleloading: getArticleListLoading(state),

        albumList: getAlbumList(state),
        albumloading: getAlbumLoading(state),

        pageName:getPageHeaderName(state),
        pageDescription:getPageDescription(state),
        pageHeaderloading:getPageHeaderloading(state)
    }
}

export default connect(mapStateToProps, {
    setAlbumList,
    setArticleList,
    setPageHeader,
    fetchArtilceListRequest,
    fetchAlbumListRequest,
    fetchPageHeaderRequest
})(HomePageView)
