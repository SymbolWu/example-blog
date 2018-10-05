import * as action from '../../Constants/ActionTypes'
import * as api from '../../Constants/ApiConstants'
import axios from 'axios';
export const setPageHeader = (pageHeaderContent, loading) => ({
    type: action.SET_PAGE_HEADER,
    pageHeaderContent,
    loading
})

export const fetchPageHeaderRequest = (pageId) => async (dispatch) => {
    try {
        let response = await axios.get(api.QUERY_PAGE_HEADER_DO, { params: { id: pageId } });
        await dispatch(setPageHeader(response.data.pageHeaderContent, false));
    } catch (error) {
        console.log('fetchPageHeaderRequest_error:', error);
    }
}