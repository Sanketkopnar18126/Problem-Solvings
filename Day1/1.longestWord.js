/**
 * @param
 *
 *
 *     Algo
 *
 *
 * 1] first i have to split the string and store into a variable  i.e newstr
 * 2] declare a variable inside the loop which is blank
 * 3]Create a function
 * 4] inside the function run a loop till the length of newstr i.e newstr.length
 * 5]inside the loop create a variable which stores the all indexes i,e st=newstr[i]
 * 6] run a condition if my curent variable length is grater than the outside variable lenthe  i.e
 *    st.length>forstorestr.length
 * 7] then simply store into a my outside variable
 * 8] last return that variable
 * 9] that is forstorestr
 */

let wordstr = "My name is ankit jain & i'm from morena";

let longeststring = (n) => {
  let newstr = n.split(" ");
  let forstorestr = "";

  for (let i = 0; i < newstr.length; i++) {
    let st = newstr[i];
    if (st.length > forstorestr.length) {
      forstorestr = st;
    }
  }
  return forstorestr;
};

console.log(longeststring(wordstr));
