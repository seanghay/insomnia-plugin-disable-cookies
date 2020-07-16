module.exports = function(context) {
    const isCookiesDisabled = context.request.getEnvironmentVariable('DISABLE_COOKIES');
    context.request.settingSendCookies(!isCookiesDisabled);
    if (isCookiesDisabled) {
        console.log(`[cookies] Disable sending cookies.`)
    } else {
        console.log(`[cookies] Enable sending cookies.`)
    }
}
