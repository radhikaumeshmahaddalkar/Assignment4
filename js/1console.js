var age=24;

console.time('Time1')
console.log("Age :" ,age)
console.info('This is a Information !')
console.warn('This is a Warning Message !')
console.error('This is an error !')
console.assert(age < 18 , "You are not eligible")
console.timeEnd('Time1') 