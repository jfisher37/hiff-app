const capitalize = (word) => {

    const wordArr = word.split("");
    
    wordArr[0] = wordArr[0].toUpperCase();
    
    const capitalizedWord = wordArr.join("");
    
    return capitalizedWord;
    
    };
    
 module.exports = { capitalize };