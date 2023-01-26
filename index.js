// function intro() {
//   window.alert("Hello, Welcome to Tinder for dogs ! 😊");

//   var dogname = "abc";
//   var dogage = 0;
//   var humanAge = 0;

//   dogname = prompt("What is your dog's name ?");
//   dogage = prompt("What is your dog's age ?");

//   humanAge = (dogage - 2) * 4 + 21;

//   var first_dogname = dogname.slice(0, 1);
//   var left_dogname = dogname.slice(1, 50);

//   var first_valid_dogname = first_dogname.toUpperCase();
//   var left_valid_dogname = left_dogname.toLowerCase();

//   alert(
//     first_valid_dogname +
//       left_valid_dogname +
//       " is name of your dog ! " +
//       humanAge +
//       " is human equivalent age of your dog"
//   );

//   var num = Math.random();
//   var loveRate = Math.floor(num * 100) + 1;
//   window.alert("Your Dog's Love Percentage is : " + loveRate + "%");

//   alert(dogname.length + " characters you have written !");
// }

// intro();



// var count = 1;
// var num = [];
// function FizzBuzz() {
//   for (var i = 0; i < 5; i++) {
//     if (count % 3 === 0) {
//       num.push("Fizz");
//     } else if (count % 5 === 0) {
//       num.push("Buzz");
//     } else if (count % 3 === 0 && num % 5 === 0) {
//       num.push("FizzBuzz");
//     } else {
//       num.push(count);
//     }
//     count++;
//   }
// }

// FizzBuzz();
// window.alert(num);


// function whosPaying(names) {
//   var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

//   let l = names.length;
//   var index = Math.floor(Math.random() * l);
//   var output = names[index] + " is going to buy lunch today!";
//   return output;
// }
// window.alert(whosPaying());



// var n = 0;
// n = window.prompt("Please enter the number of fibonaci series you want: ");
// function fibonaci(n) {
//   var o = [];
//   if (n == 1) {
//     o = [0];
//     window.alert(o);
//   } else {
//     var a = 0,
//       b = 1;
//     o = [0, 1];
//     for (var i = 0; i < n - 2; i++) {
//       var sum = a + b;
//       o.push(sum);
//       a = b;
//       b = sum;
//     }
//     window.alert(o);
//   }
// }

// fibonaci(n);

// constructor function
// function Housekeeper(name,age,experience,languages){
//     this.name=name;
//     this.age=age;
//     this.experience=experience;
//     this.languages=languages;
// }

// var housekeeper1=new Housekeeper("murli",19,3,["english","hindi","bhojpuri"]);


// reveal element on scrolling

window.addEventListener("scroll",reveal);
function reveal(){
var reveals=document.querySelectorAll(".reveal");
for(var i=0;i<reveals.length;i++){
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add("active");
    }
    else{
        reveals[i].classList.remove("active");
    }
}
}