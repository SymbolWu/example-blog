import {connect} from 'react-redux'
import HomePageView from '../Components/Home/HomePageView'

import {getArticleList,getArticleListLoading} from '../Selectors/ArticleSelector'
import {getAlbumList,getAlbumLoading} from '../Selectors/PhotographSelector'

import {  fetchArtilceListRequest,setArticleList } from '../Redux/Actions/ArticleAction'
import { fetchAlbumListRequest,setAlbumList } from '../Redux/Actions/PhotographAction'
const mapStateToProps = (state) =>{
    return{
        articleList:getArticleList(state),
        articleloading:getArticleListLoading(state),

        albumList: getAlbumList(state),
        albumloading: getAlbumLoading(state)

    }
}

export default connect(mapStateToProps,{
    setAlbumList,
    setArticleList,
    fetchArtilceListRequest,
    fetchAlbumListRequest
})(HomePageView)
