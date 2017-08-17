// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
var abc="";
var kin=[];





// 2. ARRAYS
// ==========================================================

// Create an array of five strings
abc=["a","b","c","d","e"];



// Create an array of five numbers

kin=[1,2,3,4,5];


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

for(i=0;i<=5;i++){
document.write("My name is Bob five times");
}
// Create a for loop that loops through your five string array




// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
function division(a,b){
    var div = a/b;
    console.log(div);
}
division(8,4);


// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function printArray(arrayToPrint) {
    
      for (var i = 0; i < arrayToPrint.length; i++) {
        console.log(arrayToPrint[i])
      }
    
    }
    
    var testArray = ["1", 2, 3,4,5];
    
    printArray(testArray);
    
    
    
    
    // 5. OBJECTS
    // ==========================================================
    
    // Create a JavaScript Object
    
    var tuesday = {
      date: "August 15 2017",
      time: "Night",
      students: ["Mansi", "Adrian", "Adam"],
      homework: [
        recommended: {
          title: "Crystal Collectors",
        },
        advanced: {
    
        }
      ]
    }
    tuesday.homework[0].title
    
    console.log(tuesday.time);
    console.log(tuesday.students[1]);
    cosole.log(tuesday.homework.recommended);
    
    // Console log any three of the properties in that object
    
    
    
    // Create an Array of 5 Objects
    var classes={
        students:[abc:{
            names:["q","r"],
        }
        days:[

        ]
    ],

        days:["tues","thu","sat"],

    }

    }
    
    
    // Console log 3 properties for every one of the five objects
    
    
    
    // 6. JQUERY EVENTS
    // ==========================================================
    
    // Create a basic html button then create an onClick event that triggers an on click event.
    
    
    
    
    // 7. OVERALL STRUCTURE
    // ==========================================================
    
    // Talk to student a little about the approach for "getting started" on an application.
    // Talk about the concept of variables, functions, calls.