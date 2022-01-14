const pigLatin = (string) =>{
    /* 
    First split the string into an array and use the space between the words in the sentence as a delimiter E.g string = 'This is a string' => ['This', 'is','a', 'string']
    */
     const splitSentArr = string.split(" ")
     let mutatedArr = []
     /* 
     The next thing is to loop through the array of words and check whether the first letter is a vowel 
     */
     splitSentArr.forEach(element => {
         if(/[aeiou]/i.test(element[0])){
         // If the first letter is a vowel, add 'ay' to the element
         /* 
         E.g when the element is equals Antony, which starts with a vowel, add ay at the end. And since element is a string we can simply say Antony + ay
         */
         mutatedArr.push(element + "ay")
         }else{
             // If the firstLetter in the element is not a vowel, set the first letter of the element to a variable, which is element[0]
             // Remember, element is a string eg; hello, so to get the first element, you say element[0]
             let firstConsonant = element[0];
             // The next step is to create an array out of the elements.
             // Currently, the elements are strings, so we convert them using Array.from and pass in the elements as a parameter
             // So is element is equals to 'hello', it's transformed to ['h','e','l','l','o']
             // Then once you have an array, remove the first letter of the array using array.slice
             //So array.slice(1) will remove the first element, since it removes the element at position 0 but not position 1
             // If you were to pass to say array.slice(2), it would remove the elements in positon 0 and 1 but not 2
             element = Array.from(element).slice(1)
             element =element.join('').concat(firstConsonant+'ay')
             mutatedArr.push(element)
         }
     });
     return mutatedArr.join(' ')
   }
   console.log(pigLatin('Hello there Samoina Antony'))