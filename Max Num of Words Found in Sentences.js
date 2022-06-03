var mostWordsFound = function(sentences) {
      let count = 0;
    for(let i = 0;i<=sentences.length-1;i++){
        newString = sentences[i].split(" ").length
        if(count < newString){
            count = newString;
        }   
    }
    return count;
};
