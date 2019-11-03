
// EXERCITIUL 1

// we use for loop in wich we declare i = 0 and if i < 21 then increment i;
// we use modulo to find the even numbers 
// I verify if i % 2 is equal to 0 and if it is I print to console i + " este numar par.". I if`s not I print i.
// I used ternary instead of if/else conditionals

for (i = 0; i < 21; i++) {
    i % 2 === 0 ? console.log(i + " este numar par.") : console.log(i);
}



// // I declare a variable i equal to zero;
// // I use while loop and set the condition to i < 21 so it can count to 20;
// // I use modulo to find the even numbers 
// // I verify if i % 2 is equal to 0 and if it is I print to console i + " este numar par.". I if`s not I print i.
// // I increment i to verify the next number like above.

let i = 0;
while (i < 21) {
    i % 2 === 0 ? console.log(i + " este numar par.") : console.log(i);
    i++;
}



// // EXERCITIUL 2

// // I declare i as a variable;
// // I use for loop and set the first statement i = 0, the second statement is i < 11 so it can increment i to 10, the third statement is to increment i;
// // inside the for loop I declare a variable result wich stores the result of multiplication;
// // I print to console i * 9 = result.

let i;
for (i = 0; i < 11; i++) {
    let result = i * 9;
    console.log(i + " * 9"  + " = " + result);
}


// // I declare i as a variable;
// // I used while and give it a condition of i < 11 so it can increment to 10.
// // // inside the for loop I declare a variable result wich stores the result of multiplication;
// // I print to console i * 9 = result.
// // I increment i.

let i = 0;
while (i < 11) {
  let result = i * 9;
  console.log(i + " * 9 " + " = " + result);
  i++
}



// // EXERCITIUL 3 

// // I created a named function wich take i as a parameter;
// // inside the function we declare two variables, multiply and result. we will use them in the next for loop.
// // I used a for loop with the first statement i = 0, the second statement i < 11 (so it can count to 10), and third statement to increment i.
// // Inside the for loop we are using another for loop, this time for multiply, and making the same statements as above. 
// // we give the result a value of i * multiply;
// // we print to console the result.
// // we call the function.

function multiplication(i) {
  let multiply;
  let result;

  for (i = 0; i < 11; i++) {
    for (multiply = 0; multiply < 11; multiply++) {
      result = i * multiply;
      console.log(i + " * " + multiply + " = " + result);
    }
  }
}

multiplication();




// //  EXERCITIUL 4 

// // we are using a function wich retuns a mark for a specified number of points.
// // we create another named function to display the marks table from the first function.
// // we declare a variable i.
// // we use a for in wich we increment i from 1 to 10.
// // inside the for we declare a variable mark wich holds the mark returned by the previous function. 
// // we print to console the result.
// // we call the function


var grade = function (points) {
  var mark;
  if (points >= 1 && points <= 3) {
    mark = "E";
    return mark;
  } else if (points > 3 && points <= 6) {
    mark = "D";
    return mark;
  } else if (points >= 7 && points <= 8) {
    mark = "B";
    return mark;
  } else if (points == 9) {
    mark = "A";
    return mark;
  } else if (points == 10) {
    mark = "A+";
    return mark;
  }
}

function display(displayMarksTable) {
  
  let i;
  for (i = 1; i < 11; i++) {
    let mark = grade(i);
    console.log("Pentru punctajul " + i + " obtii calificativul " + mark);
  }
}

display();