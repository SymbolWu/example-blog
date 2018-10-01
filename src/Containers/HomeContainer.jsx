import {connect} from 'react-redux'
import HomeComponent from '../Components/Home/HomeComponent'
import * as selector from '../Selectors/ArticleSelector'
import { fetchArtilceListRequest } from '../Redux/Actions/ArticleAction'
const mapStateToProps = (state) =>{
    console.log('state:',state);
    return{
        articleList:selector.getArtilceList(state),
        loading:selector.getArtilceListLoading(state)
    }
}

export default connect(mapStateToProps,{fetchArtilceListRequest})(HomeComponent)
