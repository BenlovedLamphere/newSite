export const PHONE = "header/PHONE";
export const QQ = "header/QQ";
export const WEIXIN = "header/WEIXIN";
export const RESET = "header/RESET";




export function clickphone() {
    return {type: PHONE}
}

export function clickqq() {
    return {type: QQ}
}

export function clickweixin() {
    return {type: WEIXIN}
}

export function resetwhat() {
	return {type:RESET}
}