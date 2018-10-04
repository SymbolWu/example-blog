import * as actionType from '../../Constants/ActionTypes'
const initialState = {
    albumList: [],
    loading: true,

    id: '',
    albumName: '',
    picList: [],
    buildDate: '',
    buildBy: '',
    builderAvatar: '',
    albumLBodyLoading:true
}

const photograph = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_ALBUM_LIST:
            return {
                ...state,
                albumList: action.albumList,
                loading: action.loading
            }
        case actionType.SET_ALBUM_WALL:
            return {
                ...state,
                id: action.albumBody.id,
                albumName: action.albumBody.albumName,
                picList: action.albumBody.picList,
                buildDate: action.albumBody.buildDate,
                buildBy: action.albumBody.buildBy,
                builderAvatar: action.albumBody.builderAvatar,
                albumLBodyLoading:action.loading
            }
        default:
            return state
    }
}
export default photograph