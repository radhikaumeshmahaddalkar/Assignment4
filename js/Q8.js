let employee ={

    // properties

    Name :'Khushi',
    Dept : 'C. S. ',
    Salary : '40K',

    //Methods

    getDetails : function(){
        return "Name :" + this.Name + '  ||  Department : ' + this.Dept + "||  Salary :" + this.Salary
    }
}
console.log(employee.getDetails())

console.log("*****************************************")

let student = {

    // Properties

    rollNo : 1,
    name : 'Priya',

    address : {
        city : 'Ratnagiri',           // nested objects
        pincode : 415722,
        state : 'Maharashtra' 
    }
}

console.log(student)

student.email = "priyaM@gmail.com"          // Add new Property
console.log(student)

student.PrintDetails = function(){          // Add new Method
    console.log(this.name + ' is from ' + this.address.city)
}

student.PrintDetails()

delete student.address.pincode    // delete property 
console.log(student)