import axios from 'axios'
import * as api from '../../Constants/ApiConstants'
import * as actiontype from '../../Constants/ActionTypes'


export const setArticleList = (articleList,loading) =>({
    type:actiontype.SET_ARTICLE_LIST,
    articleList,
    loading
})
export const fetchArtilceListRequest = () => async (dipatch) =>{
    try {
        let response = await axios.get(api.QUERY_RECENTLY_ARTICLE_LIST_DO);
        await dipatch(setArticleList(response.data.articleList,false));
    } catch (error) {
        console.log('fetchArtilceListRequest_error:',error);
    }
    
}
export const fetchAllArtilceListRequest = () => async (dipatch) =>{
    try {
        let response = await axios.get(api.QUERY_ALL_ARTICLE_LIST_DO);
        await dipatch(setArticleList(response.data.articleList,false));
    } catch (error) {
        console.log('fetchAllArtilceListRequest_error:',error);
    }
    
}