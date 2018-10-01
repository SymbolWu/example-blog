import {connect} from 'react-redux'
import HomeComponent from '../Components/Home/HomeComponent'

import {getArtilceList,getArtilceListLoading} from '../Selectors/ArticleSelector'
import {getAlbumList,getAlbumLoading} from '../Selectors/PhotographSelector'

import { fetchArtilceListRequest } from '../Redux/Actions/ArticleAction'
import { fetchAlbumListRequest } from '../Redux/Actions/PhotographAction'
const mapStateToProps = (state) =>{
    return{
        articleList:getArtilceList(state),
        articleloading:getArtilceListLoading(state),

        albumList: getAlbumList(state),
        albumloading: getAlbumLoading(state)

    }
}

export default connect(mapStateToProps,{
    fetchArtilceListRequest,
    fetchAlbumListRequest
})(HomeComponent)
