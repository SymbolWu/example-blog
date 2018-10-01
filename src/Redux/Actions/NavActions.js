import axios from 'axios'
import * as api from '../../Constants/ApiConstants'
import * as actiontype from '../../Constants/ActionTypes'

const setMenuList = (menuList,loading) =>({
    type:actiontype.INIT_MENU_LIST,
    menuList,
    loading
})
export const fetchMenusRequest = () =>async (dispatch)=>{
    try{
        let response =await axios.get(api.QUERY_MENULIST_DO);
        await dispatch(setMenuList(response.data.menuList,false));
    }catch(error){
        console.log('fetchMenusRequest_error:',error);
    }
}