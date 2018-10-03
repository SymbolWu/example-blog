import {connect} from 'react-redux'
import PhotographComponent from '../Components/Photograph/PhotographComponent'
import { fetchAllAlbumListRequest,setAlbumList } from '../Redux/Actions/PhotographAction'
import {getAlbumList,getAlbumLoading} from '../Selectors/PhotographSelector'
const mapStateToProps = (state) =>{
    return{
        albumList: getAlbumList(state),
        albumloading: getAlbumLoading(state)
    }
}
export default connect(mapStateToProps,{
    fetchAllAlbumListRequest,
    setAlbumList
})(PhotographComponent)