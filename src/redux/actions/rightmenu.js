export const GET_TAGSLIST_REQUEST = "rightmenu/GET_TAGSLIST_REQUEST";
export const GET_TAGSLIST_SUCCESS = "rightmenu/GET_TAGSLIST_SUCCESS";
export const GET_TAGSLIST_FAIL = "rightmenu/GET_TAGSLIST_FAIL";

export function gettagsdata(url) {
    return {
        types: [GET_TAGSLIST_REQUEST, GET_TAGSLIST_SUCCESS, GET_TAGSLIST_FAIL],
        promise: client => client.get(url)
    }
}