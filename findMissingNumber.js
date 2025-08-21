A = [1, 2, 3, 4, 5, 7, 8, 9, 10]



function solution(A) {
   //fist we find the length of the array and add 1 to i
   n = A.length + 1

   console.log(n)

   let expected = 0;

   //sum array elements
   for (i = 1; i <= n; i++) {
    expected += i;
   }

console.log(`expected ${expected}`);

   let actual = 0

   for (i = 0; i < A.length; i++) {
    actual += A[i];
   }

   console.log(`actual ${actual}`);


      return expected - actual;
  }
  
A = [1, 2, 3, 4, 5, 7, 8, 9, 10]
console.log(solution(A))