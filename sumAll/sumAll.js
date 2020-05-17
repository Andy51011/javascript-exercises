const sumAll = function(val1, val2) { 
    if (typeof val1 !== "number" || typeof val2 !== "number") {
        return "ERROR"
    }
    if (val1 < 0 || val2 < 0) {
        return "ERROR"
    }
    var sum = 0
    if (val1 < val2) {
        for (var i = val1; i <= val2; i++) {
            sum += i
        }
    }
    if (val1 > val2) {
        for (var i = val2; i <= val1; i++) {
            sum += i
        }
    }
  return sum
}

module.exports = sumAll
