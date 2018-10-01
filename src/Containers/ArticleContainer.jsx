import ArticleComponent from '../Components/Article/ArticleComponent'
import {getArtilceList,getArtilceListLoading} from '../Selectors/ArticleSelector'
import { fetchAllArtilceListRequest } from '../Redux/Actions/ArticleAction'
import {connect} from 'react-redux'
const mapStateToProps =(state)=> {
    return{
        articleList:getArtilceList(state),
        articleloading:getArtilceListLoading(state)
    }
}
export default connect(mapStateToProps,{
    fetchAllArtilceListRequest
})(ArticleComponent)