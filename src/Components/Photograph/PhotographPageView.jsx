import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AlbumCollectionComponent from './AlbumCollectionComponent'
class PhotographComponent extends Component {
    static propType = {
        albumList: PropTypes.array.isRequired,
        albumloading: PropTypes.bool.isRequired,
        fetchAllAlbumListRequest: PropTypes.func.isRequired,
        setAlbumList: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { setAlbumList } = this.props;
        setAlbumList([], true);
    }
    componentDidMount() {
        const { fetchAllAlbumListRequest } = this.props;
        fetchAllAlbumListRequest();
    }
    render() {
        const { albumList, albumloading } = this.props;
        return albumloading
            ? <div>
                Loading...
            </div>
            : <div>
                < AlbumCollectionComponent
                    albumList={albumList}
                    loading={albumloading}
                />
            </div>
    }
}
export default PhotographComponent;