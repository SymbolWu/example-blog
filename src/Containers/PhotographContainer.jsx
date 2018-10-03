import { connect } from 'react-redux'
import PhotographPageView from '../Components/Photograph/PhotographPageView'
import { fetchAllAlbumListRequest, setAlbumList } from '../Redux/Actions/PhotographAction'
import { getAlbumList, getAlbumLoading } from '../Selectors/PhotographSelector'
const mapStateToProps = (state) => {
    return {
        albumList: getAlbumList(state),
        albumloading: getAlbumLoading(state)
    }
}
export default connect(mapStateToProps, {
    fetchAllAlbumListRequest,
    setAlbumList
})(PhotographPageView)