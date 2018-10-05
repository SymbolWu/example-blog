import * as actionType from '../../Constants/ActionTypes'
const initialState = {
    pageName: '',
    pageDescription: '',
    pageHeaderloading: true,
}
const pageHeader = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_PAGE_HEADER:
            return {
                ...state,
                pageName: action.pageHeaderContent.pageName,
                pageDescription: action.pageHeaderContent.pageDescription,
                pageHeaderloading: action.loading
            }
        default:
            return state
    }
}
export default pageHeader;