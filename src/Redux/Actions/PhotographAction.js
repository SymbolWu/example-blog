import * as actionType from '../../Constants/ActionTypes'
import axios from 'axios'
import * as api from '../../Constants/ApiConstants'
export const setAlbumList = (albumList, loading) => ({
    type: actionType.SET_ALBUM_LIST,
    albumList,
    loading
})
export const setAlbumWall = (albumBody, loading) => ({
    type: actionType.SET_ALBUM_WALL,
    albumBody,
    loading
})
export const fetchAlbumListRequest = () => async (dispatch) => {
    try {
        let response = await axios.get(api.QUERY_RECENTLY_ALBUM_LIST_DO);
        await dispatch(setAlbumList(response.data.albumList, false));
    } catch (error) {
        console.log('fetchAlbumList_error:', error)
    }
}

export const fetchAllAlbumListRequest = () => async (dispatch) => {
    try {
        let response = await axios.get(api.QUERY_ALL_ALBUM_LIST_DO);
        await dispatch(setAlbumList(response.data.albumList, false));
    } catch (error) {
        console.log('fetchAlbumList_error:', error)
    }
}

export const fetchSingleAlbumRequest = (albumId) => async (dispatch) => {
    try {
        let response = await axios.get(api.QUERY_SINGEL_ALBUM_DO, { params: { id: albumId } });
        await dispatch(setAlbumWall(response.data.albumBody, false));
    } catch (error) {
        console.log('fetchSingleAlbumRequest_error:', error)
    }
}