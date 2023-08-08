/**
 *
 *
 * @param  Algorithm
 *
 * 1] I want sort these array in ascending order
 * 2] so , that why i want to create function
 * 3] inside that create 1 loop for take length of array
 * 4] and inside that run again 1 loop for comparison purpose
 * 5]If my arr[j]>arr[j+1] i.e my 1>0
 * 6]I want to swap there position by creationg third variable
 * 7] then simple console it
 *
 *
 *
 *
 *
 *
 */ // These is for 0 to 1 i.e ascending order

let num = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // console.log(num);
      }
    }
  }
  console.log(num);
};

bubbleSort(num);

/**
 *
 *
 *
 *
 * @param, These is for descending order i.e 1 to 0
 */

// let num = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

// let bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = arr.length; j > 0; j--) {

//       // console.log("j-1", arr[j - 1]);  17

//       if (arr[j] > arr[j - 1]) {
//         let temp = arr[j - 1]; //  temp =0
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
// console.log(num);
//       }
//     }
//   }
//   console.log(num);
// };

// bubbleSort(num);
