export const GET_ARTICLESLIST_REQUEST = "articleslist/GET_ARTICLESLIST_REQUEST";
export const GET_ARTICLESLIST_SUCCESS = "articleslist/GET_ARTICLESLIST_SUCCESS";
export const GET_ARTICLESLIST_FAIL = "articleslist/GET_ARTICLESLIST_FAIL";

export function getarraydata(url) {
    return {
        types: [GET_ARTICLESLIST_REQUEST, GET_ARTICLESLIST_SUCCESS, GET_ARTICLESLIST_FAIL],
        promise: client => client.get(url)
    }
}