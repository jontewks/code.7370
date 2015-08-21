// There are a few more methods that are a bit less commonly used than things like push and pop,
// but can be extremely helpful. They are "reverse", "join", "indexOf", "slice", and "splice".

// Reverse: Reverses the order of the items held in the array.
// Example: var array = [1, 2, 3];
// array.reverse();
// The variable "array" is now [3, 2, 1]

// On the lines below, create an array of values and use the reverse method on it. Console.log
// as you do so you can see the array changing order.


// Join: Joins all the values in the array into a single string. Join takes a single argument
// that it uses to separate the values in the joined string.
// Example: var array = ['Jon', 'Tewksbury'];
// We have an array with a first name and a last name that we now want to join together separated
// by a space. To do that, we can do the following: array.join(' ');

// In the example above, you can see we are passing a single space character to the join method.
// This will take our array of values and separate them by a single space in the resulting string.
// The array.join above will output a string that looks like this: 'Jon Tewksbury'.

// If we were to do array.join(', ') instead, we would get 'Jon, Tewksbury'. You can pass any
// string to join and it will use it to join all the values in the array.

// On the lines below, use the join method to turn some arrays into strings. Try using arrays with
// more than two items in them, and try giving different arguments to join to see how it works.


// IndexOf: IndexOf will return us the index of an item that we are looking for in an array, or
// -1 if the item doesnt exist in the array.
// Example: var array = [1, 2, 3, 4, 5];
// array.indexOf(3) will return 2, since the value 3 is stored in the array at index 2.
// array.indexOf(1) will return 0.
// array.indexOf('dog') will return -1, since the value 'dog' is not stored in the array.

// On the lines below create an array and use indexOf to search through it for values that may
// or may not be stored in it.


// Slice: Slice returns a copy of an array, either the whole thing or a range you define.
// Example: var array = [1, 2, 3, 4, 5];
// var slicedArray = array.slice();
// Now we have a variable slicedArray that also looks just like the original array, but since
// it is a copy, if we do slicedArray.pop(), slicedArray will now look like [1, 2, 3, 4], but
// array will still be [1, 2, 3, 4, 5];

// Slice can also take two arguments, the first is the index to begin the slice, and the second
// is where to end the slice (non-inclusive). So if we did array.slice(0, 2), we would be given
// the array [1, 2]. If we were to do array.slice(2, 4) we would be given [3, 4]

// On the lines below, create an array and use slice to make copies of it. Make entire copies as
// well as copies of just portions of it. The first argument has to be a number of 0 or greater,
// not to exceed the largest index in the array, but what would happen if the second argument we
// gave it was negative?


// Splice: Splice modifies the array it is called on to either add values to it, or remove values
// from it, usually in the middle somewhere where other methods like pop and shift can't reach.
// Example: var array = [1, 3, 4, 5];
// array.splice(1, 0, 2); array now looks like the following: [1, 2, 3, 4, 5]

// The arguments we can pass to splice are the following: first is the starting index. We wanted
// to insert something at index 1 in the array, so we pass splice 1 as its first argument. The
// second argument is how many items to remove from that index going forward. Since we only want
// to add an item and not remove any, we pass 0 as the second argument. All the arguments that
// come after the second are items to add, and you can pass as many as you want. We only wanted
// to add a single item, so we only passed one additional argument.

// If we wanted to remove from an array using splice, it would look like the following:
// var array = [1, 2, 'ghosts-r-spooky', 3, 4];
// array.splice(2, 1) -> this says start at index 2, and remove 1 element, and don't add anything.
// Now array is [1, 2, 3, 4];

// On the lines below create an array and use splice to remove and add to the middle of it.
// Be sure to be console.logging the array to see it change as you use splice.
