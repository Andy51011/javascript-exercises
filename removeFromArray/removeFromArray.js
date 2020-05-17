const removeFromArray = function(array, ...args) {
   
 let newArray = array.filter(function(item, index) {
     if (!args.includes(item)) {
         return item;
     }
 })
 return newArray
 }

module.exports = removeFromArray
