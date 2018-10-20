import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import {imageLinkArray} from '../../Constants/ThirdLink'

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
        console.log('id:', id, ' builderAvatar:', builderAvatar);
        return loading
            ? <div>
                Loading...
            </div>
            : <div className='albumDetail'>
                <div className='headContainer'>
                    <header>
                        <section>
                            <h1>{albumName}</h1>
                            {/* <img src={builderAvatar} alt={buildBy} /> */}
                            <p>Created Date:{buildDate}</p>
                            <p>Created By:{buildBy}</p>
                        </section>
                    </header>
                </div>
                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'div'} // default 'div'
                    options={{ transitionDuration: 0 }} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={{ background: '.my-bg-image-el' }} // default {}
                >
                    {
                        // picList.map((item, index) => {
                        //     return (
                        //         <div key={index} className='picItem'>
                        //             <img src={item.picURL} alt={item.id} />
                        //         </div>
                        //     )
                        // })
                        imageLinkArray.map((item, index) => {
                            return (
                                <div key={index} className='picItem'>
                                    <img src={item} alt={item} />
                                </div>
                            )
                        })
                    }
                </Masonry>

            </div>

    }
}

export default AlbumDetailPageView