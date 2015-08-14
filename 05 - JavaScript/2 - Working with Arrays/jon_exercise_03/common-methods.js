// Arrays also come with a few common methods to make working with them easier.

// The method push will add a value we give it to the end of an array:
// var array = [];
// array.push(1);

// After doing the above, our array would now look like this:
// [1]

// We can continue to push values onto it like:
// array.push('hello');
// array.push(9);

// Now our array would look like this:
// [1, 'hello', 9]

// Anything you can store in an array, you can put between the parentheses after push
// and it will be added to the end of the array. On the lines below, create an array
// and use the push method a few different times to store different values in the array.
// Periodically console.log the array to see how it has been changing.


// Another commonly used method is pop. Pop does the opposite of push, and removes a value from
// the end of the array. So if we have the following array:
// var array = [1, 2, 3, 4, 5];
// We can use pop like this:
// var poppedValue = array.pop();

// Once we've done the above, our array will look like this:
// [1, 2, 3, 4]
// The value that was on the end of the array, 5, is now removed from the array, but we've held on
// to it in the variable poppedValue, which is now equal to 5. When using pop, you can decide whether
// or not to store the value in a variable, pop will remove the last item in the array no matter what.

// On the lines below, create an array and store some values in it. Use pop to remove values from the
// end and periodically console.log the array so you can watch it change as you use pop. Also try
// storing the result of using array.pop() in a variable and console.logging that as well.


// The last two most common methods we are going to do in this exercise are "shift" and "unshift".
// These two do the exact same thing as pop and push, but just do it at the beginning of the array
// instead of the end.

// So if we have the array:
// var array = ['b', 'c'];
// and we do the following:
// array.unshift('a');
// Now our array will look like this:
// ['a', 'b', 'c']
// Shift is similar to push, but it adds the value to the front of the array.

// Unshift does the opposite, and removes a value from the front of the array.
// If we have the same array as above:
// var array = ['a', 'b', 'c'];
// and we do the following:
// var shifted = array.shift();
// Our array now looks like this:
// ['b', 'c']
// And we've stored the value "a" in the variable "shifted"

// On the lines below, create an array and use the shift and unshift methods until you understand
// how they work. Also try storing the values that are removed from arrays and verifying they
// have been stored correctly by using console.log.
