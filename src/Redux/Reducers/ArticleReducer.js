import * as actionType from "../../Constants/ActionTypes"

const initialState = {
    articleList: [],
    articleListLoading: true,


    articleId: 'Loading...',
    articleTitle: 'Titile Loading...',
    articleAuthor: 'Author Loading...',
    articleAuthorAvatar: 'Avatar Loading...',
    articlePublishdate: 'PublishDate Loading...',
    articleContent: 'Content Loading...',
    articleBodyLoading: true
}

const article = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_ARTICLE_LIST:
            return {
                ...state,
                articleList: action.articleList,
                articleListLoading: action.loading
            }
        case actionType.SET_ARTICLE_CONTENT:
            return {
                ...state,
                articleId: action.articleBody.id,
                articleTitle: action.articleBody.title,
                articleAuthor: action.articleBody.author,
                articleAuthorAvatar: action.articleBody.authorAvatar,
                articlePublishdate: action.articleBody.publishdate,
                articleContent: action.articleBody.content,
                articleBodyLoading: action.loading
            }
        default:
            return state;
    }
}
export default article;