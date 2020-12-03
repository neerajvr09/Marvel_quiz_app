const color = require('chalk');
var input = require('readline-sync');
var score = 0;

console.log(color.green.bold.underline("WELCOME TO MARVELS QUIZ !\n"));

// input
var userName = input.question(color.redBright("ENTER YOUR NAME !\n"));
//welcoming userNameconsole
console.log(color.blue.bold("\nWELCOME " + userName + "! LET'S START !\n"));

//processing
  //play function
function play(question, answer){
  var userAnswer = input.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    //output
    console.log("\nCORRECT ANSWER !")
    score = score + 1;
    console.log("SCORE : " + score);
  }else {
    //output
    console.log("\nWRONG ANSWER")
    console.log("SCORE : " + score);
  }
}
//questions array
var queSet = [
  {
    question : color.yellow("\n1. In which film did Black Widow first appear?\n") +
               color.rgb(0,204,0)("a. Avengers Assemble\n") +
               color.rgb(0,204,0)("b. The Incridible Hulk\n") +
               color.rgb(0,204,0)("c. The Iron Man 2\n") +
               color.rgb(0,204,0)("d. Captain America : Civil War\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "c"           
  } ,
  {
    question : color.yellow("\n2. What is the name of Dr Strange’s mentor?\n\n") +
               color.rgb(0,204,0)("a. The Nameless One\n") +
               color.rgb(0,204,0)("b. The Ancient One\n") +
               color.rgb(0,204,0)("c. The Ageless One\n") +
               color.rgb(0,204,0)("d. The Hairless One\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "b"
  },{
    question : color.yellow("\n3. Who is Black Panther’s sister??\n") +
               color.rgb(0,204,0)("a. Shuri\n") +
               color.rgb(0,204,0)("b. Nakia\n") +
               color.rgb(0,204,0)("c. Ramonda\n") +
               color.rgb(0,204,0)("d. Okoye\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "a"           
  } ,
  {
    question : color.yellow("\n4. What is the name of Thor’s hammer?\n") +
               color.rgb(0,204,0)("a. Vanir\n") +
               color.rgb(0,204,0)("b. Mjolnir\n") +
               color.rgb(0,204,0)("c. Aesir\n") +
               color.rgb(0,204,0)("d. Norn\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "b"           
  } ,
  {
    question : color.yellow("\n5. What is Captain America’s shield made of?\n") +
               color.rgb(0,204,0)("a. Vibranium\n") +
               color.rgb(0,204,0)("b. Adamantium\n") +
               color.rgb(0,204,0)("c. Promethium\n") +
               color.rgb(0,204,0)("d. Carbonadium\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "a"           
  } ,
  {
    question : color.yellow("\n6. What is the alien race Loki sends to invade Earth in The Avengers?\n") +
               color.rgb(0,204,0)("a. The Skrulls\n") +
               color.rgb(0,204,0)("b. The Chitauri\n") +
               color.rgb(0,204,0)("c. The Kree\n") +
               color.rgb(0,204,0)("d. The Flerkens\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "b"           
  } ,
  {
    question : color.yellow("\n7. Who does the Mad Titan sacrifice to acquire the Soul Stone?\n") +
               color.rgb(0,204,0)("a. Nebula\n") +
               color.rgb(0,204,0)("b. Ebony Maw\n") +
               color.rgb(0,204,0)("c. Cull Obsidian\n") +
               color.rgb(0,204,0)("d. Gamora\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "d"           
  } ,
  {
    question : color.yellow("\n8. Who is killed by Loki in the Avengers?\n") +
               color.rgb(0,204,0)("a. Maria Hill\n") +
               color.rgb(0,204,0)("b. Nick Fury\n") +
               color.rgb(0,204,0)("c. Agent Coulson\n") +
               color.rgb(0,204,0)("d. Doctor Erik Selvig\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "c"           
  } ,
  {
    question : color.yellow("\n9. What fake name does Natasha use when she first meets Tony?\n") +
               color.rgb(0,204,0)("a. Natalie Rushman\n") +
               color.rgb(0,204,0)("b. Natalia Romanoff\n") +
               color.rgb(0,204,0)("c. Nicole Rohan\n") +
               color.rgb(0,204,0)("d. Naya Rabe\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "a"           
  } ,
  {
    question : color.yellow('\n10. AGE OF ULTRON: What word does Tony utter that makes Steve say, "Language?"\n') +
               color.rgb(0,204,0)("a. Crap!\n") +
               color.rgb(0,204,0)("b. Asshole!\n") +
               color.rgb(0,204,0)("c. Shit!\n") +
               color.rgb(0,204,0)("d. Idiot!\n") +
               "ENTER [a, b, c, d]\n" ,
    answer : "c"           
  } ,
]

//loop to run QUIZ
for(i = 0;i <queSet.length; i++){
		play(queSet[i].question , queSet[i].answer)
	}

//final score
console.log(color.rgb(0, 0, 153).bgWhite.underline.bold("\n\n YAY ! YOU SCORED : " + 
score + " "));

// highscore array
  var hgScore = [
  {
    name : "Naman",
    point : "10",
  },
  {
    name : "Himanshu",
    point : "9",
  },
  {
    name : "Ishan",
    point : "9",
  },
  {
    name : "Stark Fan",
    point : "8",
  }
]
//loop to print highscores
	console.log(color.blue.bold("\nCurrent Highscores-\n"))
		for (j = 0; j < hgScore.length; j++) {
			console.log(color.green((j + 1) + "." + " " + hgScore[j].name + " : " + hgScore[j].point))
	}
