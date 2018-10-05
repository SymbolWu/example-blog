import { connect } from 'react-redux'
import PhotographPageView from '../Components/Photograph/PhotographPageView'

import { fetchAllAlbumListRequest, setAlbumList } from '../Redux/Actions/PhotographAction'
import { fetchPageHeaderRequest, setPageHeader } from '../Redux/Actions/PageHeaderAction'

import { getAlbumList, getAlbumLoading } from '../Selectors/PhotographSelector'
import { getPageHeaderName, getPageDescription, getPageHeaderloading } from '../Selectors/PageHeaderSelector'
const mapStateToProps = (state) => {
    return {
        albumList: getAlbumList(state),
        albumloading: getAlbumLoading(state),

        pageName:getPageHeaderName(state),
        pageDescription:getPageDescription(state),
        pageHeaderloading:getPageHeaderloading(state)
    }
}
export default connect(mapStateToProps, {
    fetchAllAlbumListRequest,
    fetchPageHeaderRequest,
    setPageHeader,
    setAlbumList
})(PhotographPageView)