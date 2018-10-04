import {connect} from 'react-redux'
import {
    getAlbumWallId,
    getAlbumWallName,
    getAlbumWallPicList,
    getAlbumWallBuildDate,
    getAlbumWallBuildBy,
    getAlbumWallBuilderAvatar,
    getAlbumWallLoading
} from '../Selectors/PhotographSelector'
import {fetchSingleAlbumRequest,setAlbumWall} from '../Redux/Actions/PhotographAction'
import AlbumDetailPageView from '../Components/Photograph/AlbumDetailPageView'
const mapStateToProps = (state) => {
    return{
        id:getAlbumWallId(state),
        albumName:getAlbumWallName(state),
        picList:getAlbumWallPicList(state),
        buildDate:getAlbumWallBuildDate(state),
        buildBy:getAlbumWallBuildBy(state),
        builderAvatar:getAlbumWallBuilderAvatar(state),
        loading:getAlbumWallLoading(state)
    }
}
export default connect(mapStateToProps,{
    fetchSingleAlbumRequest,
    setAlbumWall
})(AlbumDetailPageView)