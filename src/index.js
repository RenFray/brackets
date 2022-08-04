module.exports = function check(str, bracketsConfig) {
  str = str.split("");

    if (str.length % 2 === 1) 
    
      return false;

    var count = [];

    for (var i = 0; i < str.length; i++) {
      for (var y = 0; y < bracketsConfig.length; y++) { 
        if (str[i] === bracketsConfig[y][1] && count[count.length - 1] === bracketsConfig[y][0]) {
          count.pop(); 
        } else if (str[i] === bracketsConfig[y][0]) {
          count.push(str[i]); 
        }
      }
    }

    return count == 0;
}
