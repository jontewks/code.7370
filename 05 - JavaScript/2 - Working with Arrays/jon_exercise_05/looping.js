// One of the most important concepts with arrays is the ability to loop over them to perform
// some action many times, but only have to write it once.

// The most common loop in JavaScript is the for loop, and it looks like the following:
// var array = [1, 2, 3]
// for (var i = 0; i < array.length; i++) {
//   do some action here
// }

// That looks a bit odd, so lets go through it. The first part of the code in the parentheses,
// "var i = 0" tells the loop what index we want to start at, and in this case, we are starting
// at index 0. The second part tells the loop when to keep going. In this case, we want the loop
// to keep going as long as i is less than the total number of items in the array. The third part,
// "i++", tells the loop how to increment i on each loop, in this case, we are adding 1 to it
// each time. As long as the loop is running, its going to run just the code inside of the curly
// brakets one time for each iteration.

// Here is a more useful example:
// var names = ['Jon', 'Alex', 'Wes', 'Natrina'];
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// Go ahead and uncomment out that code and see what results. The powerful part about for loops
// is the ability to easily access the array with [i]. This allows us to take some action on
// every element in the array. In the case above, we are simply console.logging each name.

// On the lines below, create an array and use a for loop to loop over its values and do some
// action. It can be anything, math operations, console.logging, comparisons, etc.


// WARNING: You will inevitably end up creating an "infinite loop" that never ends. Don't worry!
// You'll just need to close chrome and try again. If it happens, take a look at the for loop
// to see why it thinks the middle section that looks something like "i < array.length" never
// becomes true, and thus the loop never stops.
