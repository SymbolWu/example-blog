import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ArticleTableComponent from '../../Components/Article/ArticleTableComponent'
import AlbumCollectionComponent from '../Photograph/AlbumCollectionComponent'
class HomePageView extends Component {
    static propTypes ={
        articleList:PropTypes.array.isRequired,
        articleloading:PropTypes.bool.isRequired,
        fetchArtilceListRequest:PropTypes.func.isRequired,
        setArticleList:PropTypes.func.isRequired,

        albumList: PropTypes.array.isRequired,
        albumloading: PropTypes.bool.isRequired,
        fetchAlbumListRequest:PropTypes.func.isRequired,
        setAlbumList:PropTypes.func.isRequired
    ,
    }
    componentWillMount(){
        const { setArticleList,setAlbumList } = this.props;
        setArticleList([],true);
        setAlbumList([],true);
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
                    : <ArticleTableComponent 
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
export default HomePageView;