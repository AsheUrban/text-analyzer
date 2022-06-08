// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});

// Business logic we want to save!!!

// From Zachary!
// function removeBadWords(words,text) {
//   const noBadWords = text.split(" ");
//   let i = 0;
//   noBadWords.forEach(function(element) {
//     if (element.toLowerCase().includes(words.toLowerCase())) {
//       noBadWords.splice(i, 1);
//     } else {i++;
//   } 
//   });
//   return noBadWords;
// }

// From Max!
// function omitOffensiveWords(word, text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let goodtext = []
//   let textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     if (!offensiveWords.includes(element.toLowerCase())) {
//       goodtext.push(element);
//     }
//   });

//   return goodtext;
// }