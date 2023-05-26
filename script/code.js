let person = {


    fristName : "logan",
    lastName : "Thomas",
    age : 23,
}


let subjects = ['english ','afrikaans','Maths','life science'];

let adress = {
    streetName : "ABCrest",
    streetNumb: 125,
    suburb: "Pinelands,",
    city: "Cape Town",
    CountryName: "South Africa"
}


console.log(person)
console.log(subjects);
console.log(adress)


// question 3

function calculate(math) {
  let numb1 = parseFloat(document.getElementById("numb1").value);
  let numb2 = parseFloat(document.getElementById("numb2").value);
  let operation = document.getElementById("operation").value;
  let resultLabel = document.getElementById("lblResult");

      let result;
      
      switch(operation) {
        case "+":
          result = numb1 + numb2;
          break;
        case "-":
          result = numb1 - numb2;
          break;
        case "*":
          result = numb1 * numb2;
          break;
        case "/":
          result = numb1 / numb2;
          break;
        default:
          result = "try again";
      }
      
      resultLabel.textContent = "Answer: " + result;
      document.getElementById("resultBox");
    }
