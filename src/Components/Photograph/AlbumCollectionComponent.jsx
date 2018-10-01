import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            : <div>
                <ul>
                    {
                        albumList.map((item, index) => {
                            return <li key={item.id}>
                                <ul>
                                    <li><img src={item.cover} alt={item.title} /></li>
                                    <li>{item.title}</li>
                                </ul>
                            </li>
                        })
                    }
                </ul>
            </div>
    }
}
export default AlbumCollectionComponent