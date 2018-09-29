import * as type from '../../Constants/ActionTypes'
const initialState = {
    menuList:[]
}
function menuList (state=initialState,action){
    switch(action.type){
        case type.INIT_MENU_LIST:
            return action.data
        default:
            return  state;
    }
}
export default menuList;