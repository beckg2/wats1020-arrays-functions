// This is the file where you will write the Truncate Words function and related code.

var originalText = "There are two hard things in Computer Science: Cache invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

// TODO: Create a Function called truncateWords() that accepts two arguments:
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)
// TODO: Within the truncateWords() Function, complete the following steps:

function truncateWords(longText, numWords) {
  
var splitText = originalText.split(" ");  // 1. Use the split() function to split the String into an Array
console.log(splitText)

var lengthWords = splitText.length;  // 2. Use the length attribute to find the number of words in the Array
console.log(lengthWords);

var shortWords = splitText.splice(0, numWords); // 3. Determine how many words should be removed from the String
console.log(shortWords);

var removeWords = lengthWords - wordLimit; // 4. Remove those words from the Array
console.log(removeWords);
  
 shortWords.push("..."); // 5. Add an additional String item to the Array to put an ellipses in: "..."
  
  var finalWords = shortWords.join(" "); // 6. Use the join() function to convert the Array back into a String
  
  return finalWords; // 7. Return the truncated String from the Function

}
  
// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.

var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
