/**
 * The QuickSort Algorithm
 * Link: https://en.wikipedia.org/wiki/Quicksort
 *
 * Key Points:
 *
 * - Works in Place (assuming partitioning does)
 *
 */


function quicksortLomuto(A, low, high) {

  if(!(A instanceof Array)) throw new Error('no Array provided');
  if(typeof low === "undefined") low = 0;
  if(typeof high === "undefined") high = A.length - 1;

  if(low < high) {
    let pivot = partitionLomuto(A, low, high);

    quicksortLomuto(A, low, pivot - 1);
    quicksortLomuto(A, pivot + 1, high);
  }

  return A;
}

function quicksortHoare(A, low, high) {

  if(!(A instanceof Array)) throw new Error('no Array provided');
  if(typeof low === "undefined") low = 0;
  if(typeof high === "undefined") high = A.length - 1;

  if(low < high) {

    let pivot = partitionHoare(A, low, high);

    quicksortHoare(A, low, pivot);
    quicksortHoare(A, pivot + 1, high);
  }

  return A;

}


function partitionHoare(A, low, high) {

  let pivot = A[low];
  let i = low;
  let j = high;


  if(process.env.DEBUG) {
    console.log('------ Hoare -------');
    console.log(`sorting: ${A}`);
    console.log(`pivot: ${pivot}`);
    console.log(`partition [${i}, ${j}] : ${A.slice(i, high + 1)}`);
    console.log('-------------------- \n');
  }

  while(true) {

    while(A[i] < pivot) { i++; }
    while(A[j] > pivot) { j--; }

    if(i >= j) {
      return j;
    }

    swap(A, i, j);

    //keep (de/in)crementing in case we have duplicates
    i++;
    j--;

  }
}

function partitionLomuto(A, low, high) {

  let pivot = A[high];
  let i = low;
  let j = low;

  if(process.env.DEBUG) {
    console.log('------ Lomuto ------');
    console.log(`sorting: ${A}`);
    console.log(`pivot: ${pivot}`);
    console.log(`partition [${i}, ${high}] : ${A.slice(i, high + 1)}`);
    console.log('--------------------\n');
  }

  for(j; j < high; j++) {
    if(A[j] <= pivot) {
      swap(A, i, j);
      i++;
    }
  }

  swap(A, i, high);

  return i;
}

function swap(A, p1, p2) {
  let val1 = A[p1];
  let val2 = A[p2];

  A[p1] = val2;
  A[p2] = val1;

  if(process.env.DEBUG) {
    console.log(`SWAP => [${A[p2]}, ${A[p1]}]`);
  }


  return A[p1] === A[p2];
}


//Hoare Perf: 7 Swaps
//Lomuto Perf: ? Swaps
var test1 = [10, 12, 1, 3, 7, 13, 9];

//Hoare Perf: ? Swaps
//Lomuto Pef: ? Swaps
var test2 = [4, 6, 1, 2, 10, 1, 3, 8, 4, 9];



console.log(`Lomuto: ${quicksortLomuto(test1.slice())}`);
console.log('\n');
console.log(`Hoares: ${quicksortHoare(test1.slice())}`);

console.log(`Lomuto: ${quicksortLomuto(test2.slice())}`);
console.log('\n');
console.log(`Hoares: ${quicksortHoare(test2.slice())}`);
