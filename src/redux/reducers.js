import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import articleslist from 'reducers/articleslist';
import header from 'reducers/header';
import article from 'reducers/article';
import rightmenu from 'reducers/rightmenu';

export default combineReducers({
    counter,
    userInfo,
    articleslist,
    header,
    article,
    rightmenu
});