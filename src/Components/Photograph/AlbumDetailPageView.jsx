import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AlbumDetailPageView extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        albumName: PropTypes.string.isRequired,
        picList: PropTypes.array.isRequired,

        buildDate: PropTypes.string.isRequired,
        buildBy: PropTypes.string.isRequired,
        builderAvatar: PropTypes.string.isRequired,

        loading: PropTypes.bool.isRequired,
        fetchSingleAlbumRequest: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { setAlbumWall } = this.props;
        setAlbumWall({
            id: '',
            albumName: '',
            picList: [],

            buildDate: '',
            buildBy: '',
            builderAvatar: '',
        }, true);
    }
    componentDidMount() {
        const { fetchSingleAlbumRequest } = this.props;
        let albumId = this.props.match.params.id;
        fetchSingleAlbumRequest(albumId);
    }
    render() {
        const { id, albumName, picList, buildDate, buildBy, loading, builderAvatar } = this.props;
        return loading
            ? <div>
                Loading...
            </div>
            : <div>
                <header>
                    <h1>{albumName}</h1>
                    <img src={builderAvatar} alt={buildBy} />
                    <p>Created Date:{buildDate}</p>
                    <p>Created By:{buildBy}</p>
                </header>
                <ul>
                    {
                        picList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <ul>
                                        <li><img src={item.picURL} alt={item.id} /></li>
                                        <li>{item.title}</li>
                                        <li>{item.description}</li>
                                        <li>{item.publishDate}</li>
                                        <li>{item.publishBy}</li>
                                    </ul>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
    }
}

export default AlbumDetailPageView