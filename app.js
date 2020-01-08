let Userscore=0;
let Computerscore=0;
const Userscore_span=document.getElementById("user-score");
const Computerscore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".Scoreboard");
const Result_div=document.querySelector(".Result > p");   // as p is inside Result
const Rock_button=document.getElementById("Rock");
const Scissors_button=document.getElementById("scissors");
const Paper_button=document.getElementById("paper");
// This is known as caching the DOM(Document object Model)
// Step 1 : Adding Event Listners
function getComputerchoice()
{
    const choices=["Rock","Paper","Scissors"];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
}
function ConverttoWord(letter)
{
    if(letter=="Rock") return "Rock";
    if(letter="Scissors") return "Scissors";
    return "Paper"
}
function win(userChoice,Computerchoice)
{
    Userscore++;
    Userscore_span.innerHTML=Userscore;
    Computerscore_span.innerHTML=Computerscore;
    const UsersmallWord="You".fontsize(3).sub();
    const ComputersmallWorld="Comp".fontsize(3).sub()
    const YouWin="You Win".fontsize(6).fontcolor("light green").sup()
    const user_choice_div=document.getElementById(userChoice);
    Result_div.innerHTML=  ConverttoWord(userChoice) + " " + UsersmallWord + " beats " 
    + ConverttoWord(Computerchoice) + " "+  ComputersmallWorld + YouWin + "  :) ";
    // Add green glow
    user_choice_div.classList.add("green-glow");
    setTimeout(function(){
        user_choice_div.classList.remove("green-glow");
    },300);

}
function lose(userChoice,Computerchoice)
{
    Computerscore++;
    Userscore_span.innerHTML=Userscore
    Computerscore_span.innerHTML=Computerscore;
    const UsersmallWord="You".fontsize(3).sub();
    const ComputersmallWorld="Comp".fontsize(3).sub();
    const ComputerWin="You Lose".fontsize(6).fontcolor("Red").sup();
    Result_div.innerHTML= ConverttoWord(Computerchoice) + " " + ComputersmallWorld +
    " beats " + ConverttoWord(userChoice) + " " + UsersmallWord + ComputerWin + " :(( "; 
    const computer_choice_div=document.getElementById(Computerchoice);
    // Add red glow
    computer_choice_div.classList.add("red-glow");
    setTimeout(() => {
        computer_choice_div.classList.remove("red-glow");
    }, 300);

}
function draw(userChoice,Computerchoice)
{
    const UsersmallWord="You".fontsize(3).sub();
    const ComputersmallWorld="Comp".fontsize(3).sub();
    const Draw="It's a Draw".fontsize(6).fontcolor("grey").sup();
    Result_div.innerHTML=ConverttoWord(userChoice) + " " +  UsersmallWord + "Equals" +
    ConverttoWord(Computerchoice) + " " + ComputersmallWorld + Draw + " : // ";

    // Add gray glow
    const draw_choice_div=document.getElementById(userChoice);
    draw_choice_div.classList.add("gray-glow");
    setTimeout(() => {
        draw_choice_div.classList.remove("gray-glow");
    }, 300);
   
}

function game(userChoice)
{
    const Computerchoice=getComputerchoice();
   switch(userChoice+Computerchoice){
       case"RockScissors":
       case"PaperRock":
       case"ScissorsPaper":
            win(userChoice,Computerchoice);
            break;

        case"RockPaper":
        case"PaperScissors":
        case"ScissorsRock":
            lose(userChoice,Computerchoice);
            break;

        case"RockRock":
        case"ScissorsScissors":
        case"PaperPaper":
            draw(userChoice,Computerchoice);
            break;

   }

}
function main()
{
    Rock_button.addEventListener("click",function(){
        game("Rock")
    })
    Scissors_button.addEventListener("click",function(){
        game("Scissors")
    })
    Paper_button.addEventListener("click",function(){
        game("Paper")
    })
}
//-------------------------------------------------------Main-----------------------------------
main();