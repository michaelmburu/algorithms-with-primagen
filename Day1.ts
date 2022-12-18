// BIG-O This is growth of a program with respect to input

// Example 1, O(N)
function sum_char_codes(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum + n.charCodeAt(i)
  }
  return sum
}

//Example 2
// O(2N = O(N)). You always drop the constant as it's not really important.
function sum_char_codes_E2(n: string): number {
  let sum = 0
  //N
  for (let i = 0; i < n.length; i++) {
    sum + n.charCodeAt(i)
  }

  //N
  for (let i = 0; i < n.length; i++) {
    sum + n.charCodeAt(i)
  }
  return sum
}

//Example 3
// O(N)
function sum_char_codes_E3(n: string): number {
  let sum = 0

  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i)
    //CAPITAL E
    if (charCode === 69) {
      return sum
    }

    sum += charCode
  }
  return sum
}

/*
  Important concepts for time space complexity
  1. Growth is with respect to input
  2. Constants are dropped
  3. Worst case is usually the way we measure
*/

//Example 4
//O(N^2): Examples are like multiplying matrices
function sum_char_codes_E4(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      const charCode = n.charCodeAt(i)
      sum += charCode
    }
  }
  return sum
}

//Example 5
//O(nLog(n)) - Quicksort
// O(log n) - Binary search trees


/*
  ARRAY
  This is a contigous memory space
*/

