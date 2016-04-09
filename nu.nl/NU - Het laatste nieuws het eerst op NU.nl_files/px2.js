var abp = abp || false;
var script=document.currentScript||document.getElementById("crtblock2");
if (script) {
    var query = script.src.replace(/^[^\?]+\??/, "").split("&");
    var params = {};
    for (var i = 0; i < query.length; i++) {
        var param = query[i].split("=");
        params[param[0]] = param[1]
    }
    if (params["ch"] == 1) abp = true;
    else if (params["ch"] == 2) abp = abp && false
};