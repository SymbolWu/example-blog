import * as type from '../../Constants/ActionTypes'
const initialState = {
    menuList: [],
    loading: true
}
const navMenu = (state = initialState, action) => {
    switch (action.type) {
        case type.INIT_MENU_LIST:
            return {
                ...state,
                menuList: action.menuList,
                loading: action.loading
            }
        default:
            return state;
    }
}
export default navMenu;