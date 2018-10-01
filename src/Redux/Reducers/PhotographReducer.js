import * as actionType from '../../Constants/ActionTypes'
const initialState = {
    albumList: [],
    loading: true
}

const photograph = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_ALBUM_LIST:
            return {
                ...state,
                albumList: action.albumList,
                loading: action.loading
            }
        default:
            return state
    }
}
export default photograph