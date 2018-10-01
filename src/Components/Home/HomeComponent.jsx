import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ArticleListForm from '../../Components/Article/ArticleListForm'
import AlbumCollectionComponent from '../../Components/Photograph/AlbumCollectionComponent'
class HomeComponent extends Component {
    static propTypes ={
        articleList:PropTypes.array.isRequired,
        articleloading:PropTypes.bool.isRequired,
        fetchArtilceListRequest:PropTypes.func.isRequired,

        albumList: PropTypes.array.isRequired,
        albumloading: PropTypes.bool.isRequired,
        fetchAlbumListRequest:PropTypes.func.isRequired
    }
    componentDidMount(){
        const { fetchArtilceListRequest,fetchAlbumListRequest } = this.props;
        fetchArtilceListRequest();
        fetchAlbumListRequest();
    }
    render(){
        const {articleList,articleloading,albumList,albumloading} = this.props;
        return(
            <div>
                {
                    articleloading 
                    ? <div>Article Loading...</div> 
                    : <ArticleListForm 
                        articleList={articleList}
                        loading={articleloading}
                    />

                }

                {
                    albumloading
                    ? (<div>Album Loading... </div>)
                    :<AlbumCollectionComponent
                        albumList={albumList}
                        loading={albumloading}
                    />

                }
            </div>
        )
    }
}
export default HomeComponent;