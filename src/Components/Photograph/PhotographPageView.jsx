import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AlbumCollectionComponent from './AlbumCollectionComponent'
import PageHeaderComponent from '../Public/PageHeaderComponent'
class PhotographComponent extends Component {
    static propType = {
        albumList: PropTypes.array.isRequired,
        albumloading: PropTypes.bool.isRequired,
        fetchAllAlbumListRequest: PropTypes.func.isRequired,
        setAlbumList: PropTypes.func.isRequired,

        articleList: PropTypes.array.isRequired,
        articleloading: PropTypes.bool.isRequired,
        fetchAllArtilceListRequest: PropTypes.func.isRequired,
        setArticleList: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { setAlbumList, setPageHeader } = this.props;
        setAlbumList([], true);
        setPageHeader({
            pageName: '',
            pageDescription: ''
        }, true);
    }
    componentDidMount() {
        const { fetchAllAlbumListRequest, fetchPageHeaderRequest } = this.props;
        fetchAllAlbumListRequest();
        fetchPageHeaderRequest();
    }
    render() {
        const {
            albumList,
            albumloading,
            pageName,
            pageDescription,
            pageHeaderloading
        } = this.props;
        return (
            <div className='photogragh'>
                <div>
                    {
                        pageHeaderloading
                            ? <div>Page Header Loding...</div>
                            : <PageHeaderComponent
                                pageName={pageName}
                                pageDescription={pageDescription}
                            />
                    }
                </div>
                <div>
                    {
                        albumloading
                            ? <div>Loading...</div>
                            : <div>
                                < AlbumCollectionComponent
                                    albumList={albumList}
                                    loading={albumloading}
                                />
                            </div>
                    }
                </div>
            </div>
        )
    }
}
export default PhotographComponent;