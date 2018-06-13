import {GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL} from 'actions/article';


const initArt = {
    isLoading: false,
    art: {},
    errorMsg: ''
};

export default function reducer(state = initArt, action) {
    switch (action.type) {
        case GET_ARTICLE_REQUEST:
            return {
                ...state,
                isLoading: true,
                art: {},
                errorMsg: ''
            };
        case GET_ARTICLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                art: action.result.data,
                errorMsg: ''
            };
        case GET_ARTICLE_FAIL:
            return {
                ...state,
                isLoading: false,
                art: [],
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}