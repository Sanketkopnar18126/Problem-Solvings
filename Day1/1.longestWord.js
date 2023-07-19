/**
 * @param
 *
 *
 *     Algo
 *
 *
 * 1] first i have to split the string and store into a variable  i.e newarr
 * 2] declare a variable outside the loop which store the first index i.e newarr2= newarr[0]
 * 3]Create a function
 * 4] inside the function run a loop till the length of arr i.e arr.length
 * 5]inside the loop create a variable which stores the all indexes i,e st=n[i]
 * 6] run a condition if my curent variable length is grater than the outside variable lenthe  i.e
 *    st.length>newarr2.length
 * 7] then simply store into a my outside variabl
 * 8] last return that variable
 */

let arr = "My name is ankit jain & i'm from morena";

let newarr = arr.split(" ");

let newarr2 = newarr[0];

let str = (n) => {
  for (let i = 0; i < n.length; i++) {
    let st = n[i];
    if (st.length > newarr2.length) {
      newarr2 = st;
    }
  }
  return newarr2;
};

console.log(str(newarr));
