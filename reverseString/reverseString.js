const reverseString = function(string) {
    var split = string.split("");
    var reversed = split.reverse().join("");
    return reversed;

}

module.exports = reverseString
