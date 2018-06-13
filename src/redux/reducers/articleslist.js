import {GET_ARTICLESLIST_REQUEST, GET_ARTICLESLIST_SUCCESS, GET_ARTICLESLIST_FAIL} from 'actions/articleslist';


const initState = {
    isLoading: false,
    list: [],
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_ARTICLESLIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                list: [],
                errorMsg: ''
            };
        case GET_ARTICLESLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.result.data,
                errorMsg: ''
            };
        case GET_ARTICLESLIST_FAIL:
            return {
                ...state,
                isLoading: false,
                list: [],
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}