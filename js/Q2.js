var marks = 95;

if (marks < 40) {
    console.log(marks + "Failed");
}

else if (marks >= 40 && marks <= 60) {
    console.log("Pass grade");
}

else if (marks >= 60 && marks <= 70) {
    console.log("B grade");
}

else if (marks >= 70 && marks <= 90) {
    console.log("A grade");
}

else if (marks >= 90 && marks <= 100) {
    console.log("A+ grade");
}

else {
    console.log("Enter a valid Number");
}
