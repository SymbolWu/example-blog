import * as actionType from "../../Constants/ActionTypes"

const initialState ={
    articleList:[],
    loading:true
}

const article = (state=initialState,action) =>{
    switch (action.type) {
        case actionType.SET_ARTICLE_LIST:
            return{
                ...state,
                articleList:action.articleList,
                loading:action.loading
            }
        default:
            return state;
    }
}
export default article;