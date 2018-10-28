import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import { imageLinkArray } from '../../Constants/ThirdLink'
import { Row, Col, Grid } from 'react-bootstrap'

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

                <Grid>

                    <Row className="show-grid">
                        {/* <Masonry
                            className={'my-gallery-class'} // default ''
                            elementType={'div'} // default 'div'
                            options={{ transitionDuration: 1 }} // default {}
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                            imagesLoadedOptions={{ background: '.my-bg-image-el' }} // default {}
                        > */}
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

                                        <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                            {/* <div key={index} className='picItem'> */}
                                            <img src={item} alt={item} />
                                            {/* </div> */}
                                        </Col>

                                    )
                                })
                            }
                        {/* </Masonry> */}
                    </Row>

                </Grid>


            </div>
    }
}

export default AlbumDetailPageView