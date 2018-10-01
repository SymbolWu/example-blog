import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ArticleListForm from '../../Components/Article/ArticleListForm'
class HomeComponent extends Component {
    static propTypes ={
        articleList:PropTypes.array.isRequired,
        loading:PropTypes.bool.isRequired,
        fetchArtilceListRequest:PropTypes.func.isRequired
    }
    componentDidMount(){
        const { fetchArtilceListRequest } = this.props;
        fetchArtilceListRequest();
    }
    render(){
        const {articleList,loading} = this.props;
        console.log('articleList::',articleList);
        return(
            <div>
                <ArticleListForm 
                articleList={articleList}
                loading={loading} 
                />
            </div>
        )
    }
}
export default HomeComponent;