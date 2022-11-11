let num=[10,20,30,40,50,60,70,80,90,100];

//1 . Slice(20,30,40) returns a new array copying to it all items from index start to end (not including end).

console.log("Slice " +num.slice(1,4)); 

//2. Splice - Starting from the index 1 it removed 1 element.

console.log( "Splice " + num.splice(1,1) ); 
console.log(num)

// 3. Shift - method removes the first item of an array.

console.log("Shift " + num.shift()); 
console.log(num)

// 4. Map - It creates a new array. It populates the newly created array with its function argument's returned values.


let a =[1,4,9,64,100]
const newA = a.map(Math.sqrt)  
console.log("Map " + newA);

// 5. Reduce -the method uses its function argument to reduce its calling array's items to a single value.

var s= num.reduce(function(total,count){   
    return total + count;
});
console.log("Reduce " + s)  
