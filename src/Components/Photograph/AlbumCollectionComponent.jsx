import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ALBUM_DETAIL_PATH } from '../../Constants/RouterConstants'
import photo from '../../Utils/photo-24.jpg'
class AlbumCollectionComponent extends Component {
    static propTypes = {
        albumList: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    }
    render() {
        const { albumList, loading } = this.props;
        return loading
            ? <div>
                Loading...
            </div>
            : <div className='albumCollection'>
                <ul>
                    {
                        albumList.map((item, index) => {
                            return <li key={item.id}>
                                {/* <ul> 
                                    <li><img src={item.cover} alt={item.title} /></li>
                                    <li><Link to={ALBUM_DETAIL_PATH.replace(':id',item.id)}>{item.title}</Link></li>
                                    <li>{item.description}</li>
                                </ul> */}
                                <Link to={ALBUM_DETAIL_PATH.replace(':id', item.id)}>
                                    <img src={photo} alt={item.title} />
                                    <span>{item.title}</span>
                                    <span>{item.description}</span>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
    }
}
export default AlbumCollectionComponent