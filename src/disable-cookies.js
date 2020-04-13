module.exports = function(context) {
    const isCookiesDisabled = context.request.getEnvironmentVariable('DISABLE_COOKIES');
    if (!isCookiesDisabled) {
        console.log(`[cookies] Enable sending cookies.`)
        return;
    }
    context.request.settingSendCookies(false);
    console.log(`[cookies] Disable sending cookies.`)
}