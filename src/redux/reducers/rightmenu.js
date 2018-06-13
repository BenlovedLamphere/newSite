import {GET_TAGSLIST_REQUEST, GET_TAGSLIST_SUCCESS, GET_TAGSLIST_FAIL} from 'actions/rightmenu';


const initState = {
    isLoading: false,
    tags: [],
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_TAGSLIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                tags: [],
                errorMsg: ''
            };
        case GET_TAGSLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tags: action.result.data,
                errorMsg: ''
            };
        case GET_TAGSLIST_FAIL:
            return {
                ...state,
                isLoading: false,
                tags: [],
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}