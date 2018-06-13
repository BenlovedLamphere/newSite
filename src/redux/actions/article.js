export const GET_ARTICLE_REQUEST = "article/GET_ARTICLE_REQUEST";
export const GET_ARTICLE_SUCCESS = "article/GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_FAIL = "article/GET_ARTICLE_FAIL";

export function getarticle(num) {
    return {
        types: [GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL],
        promise: client => client.get('https://api.github.com/repos/BenlovedLamphere/Blog/issues/' + num)
    }
}