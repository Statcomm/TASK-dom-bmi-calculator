function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const bmi  = weight/(Math.pow((height/100),2))
//   if (bmi < 18.5) {
//     alert(`Your BMI is ${bmi}. You are underweight!`)
//   } else if (bmi < 24.9) {
//     alert(`Your BMI is ${bmi}. Your weight is healthy!`)
//   } else if (bmi < 29.9) {
//     alert(`Your BMI is ${bmi}. You are overweight!`)
//   } else if (bmi > 30) {
//     alert(`Your BMI is ${bmi}. M'dude, you are over obesity and need professional help T_T`)
//   }
// }


// Challenge 3 starts here, Challenges 1 and 2 are above

if (((bmi >= 19 && bmi <= 24) && (age >= 19 && age <= 24)) 
|| ((bmi >= 20 && bmi <= 25) && (age >= 25 && age <= 34)) 
|| ((bmi >= 21 && bmi <= 26) && (age >= 35 && age <= 44))
|| ((bmi >= 22 && bmi <= 27) && (age >= 45 && age <= 54))
|| ((bmi >= 23 && bmi <= 28) && (age >= 55 && age <= 67))
|| ((bmi >= 24 && bmi <= 29) && (age > 65))) {
alert(`You are ${age} years old and your BMI is ${Math.round(bmi)}. You are healthy!`) 
} else if (bmi < 18.5 ) {
  alert(`You are ${age} years old and your BMI is ${Math.round(bmi)}. You are underweight.`) 
} else if (bmi > 25.0 && bmi < 30.0) {
  alert(`You are ${age} years old and your BMI is ${Math.round(bmi)}. You are overweight!`) 
} else {
  alert(`You are ${age} years old and your BMI is ${Math.round(bmi)}. You are above obesity, seek help!!`) 
}
}