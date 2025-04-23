// I need to find the average of an array 
// Steps
// create a function
function findAverage(numbers)
{
 let average = 0;
 let addition = numbers[0];
 let divider = numbers.length;
    // An average is made by adding all the numbers and then dividing the result by the amount of numbers
    for(let i = 1; i < numbers.length; i++)
    {
     // Add all the numbers from the array
      addition = addition + numbers[i];
    }
    // Divide them with the amount of numbers (the length of the array)
      average = addition / divider;
    // Return the average
    console.log(average);
    return (average);
}
findAverage([2,4,6,8]);
// problem solved in 20 minutes