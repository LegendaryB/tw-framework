const createValueWithElementContext = (value, element) => {
    return {
        Value: value,
        Element: element
    }
}


function() {
    function e() {
        var e = $("#serverDate").text(),
            r = $("#serverTime").text(),
            t = e.match(/(..)\/(..)\/(....)/);
        return t[3] + "-" + t[2] + "-" + t[1] + " " + r
    }

    function r(e) {
        var r = (new Date).getMilliseconds();
        return (1e3 + r - e) - (1e3 * Math.floor((1e3 + r - e) / 1e3))
    }

    function t(e) {
        var t = setInterval(function() {
            var t = r(e);
            $("#serverMs").text(":" + ("00" + t).substr(-3))
        }, 80);
        return t
    }
    if (!$("#serverMs").length) {
        $("#serverTime").after('<span id="serverMs"></span>'), $("#serverMs, #serverTime").css({
            color: "Black",
            "font-weight": "Bold",
            "font-size": "20px"
        });
        var n, s = e(),
            i = s,
            a = setInterval(function() {
                s = e(), s !== i && (n = (new Date).getMilliseconds(), clearInterval(a), t(n)), i = s
            }, 20)
    }
}();