const repeatString = function(string, num) {
    var repeat = ""
    var i = 0
    if (num === 0) {
        return ''
    }
    if (num < 0) {
        return "ERROR"
    }
    while (i < num) {
        repeat += string
        i++
    }
    return repeat

}

module.exports = repeatString
