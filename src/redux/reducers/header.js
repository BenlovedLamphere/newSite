/*reducer*/
import {PHONE, QQ, WEIXIN,RESET} from '../actions/header';

const counters = {what:'none'};


export default function reducer(state = counters, action) {


  switch (action.type) {
		case PHONE:
			return {
				what: 'phone'
			}
		case QQ:
			return {
				what: 'qq'
			}
		case WEIXIN:
			return {
				what: 'weixin'
			}
		case RESET:
			return {
				what:'none'
			}
        default:
            return state
    }
}

