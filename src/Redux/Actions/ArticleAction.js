import axios from 'axios'
import * as api from '../../Constants/ApiConstants'
import * as actiontype from '../../Constants/ActionTypes'


export const setArticleList = (articleList, loading) => ({
    type: actiontype.SET_ARTICLE_LIST,
    articleList,
    loading
})
export const setSingleArticle = (articleBody, loading) => ({
    type: actiontype.SET_ARTICLE_CONTENT,
    articleBody,
    loading
})
export const fetchArtilceListRequest = () => async (dipatch) => {
    try {
        let response = await axios.get(api.QUERY_RECENTLY_ARTICLE_LIST_DO);
        await dipatch(setArticleList(response.data.articleList, false));
    } catch (error) {
        console.log('fetchArtilceListRequest_error:', error);
    }

}
export const fetchAllArtilceListRequest = () => async (dipatch) => {
    try {
        let response = await axios.get(api.QUERY_ALL_ARTICLE_LIST_DO);
        await dipatch(setArticleList(response.data.articleList, false));
    } catch (error) {
        console.log('fetchAllArtilceListRequest_error:', error);
    }

}
export const fetchSingleArticle = (articleId) => async (dipatch) => {
    try {
        let response = await axios.get(api.QUERY_SINGEL_ARTICLE_DO, { params: { id: articleId } });
        await dipatch(setSingleArticle(response.data.articleBody, false));
    } catch (error) {
        console.log('fetchSingleArticle_error:', error);
    }
}