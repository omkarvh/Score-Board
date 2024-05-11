/* control board valuses assignment*/
var Run = document.getElementById("Runs");
var Wic = document.getElementById("Wicket");
var ovr = document.getElementById("Overs");
var His = document.getElementById("History");
var Tballs = document.getElementById("Tballs")
var Board = [0]; 
/* control board valuses */
var i = 0;
var j = 0;
var k = 0;

function Run1(){
i++;
k++;
Run.innerText = i ; 
Tballs.innerText = k;
over();
var rn = Board.push[i];

}

function Run2(){
i+= 2;
k++;
Run.innerText = i ; 
Tballs.innerText = k;
over();
}

function Run4(){
i+= 4;
k++;
Run.innerText = i ; 
Tballs.innerText = k;
over();
}
function Run6(){
i+= 6;
k++;
Run.innerText = i ; 
Tballs.innerText = k;
over(); 
}

function Wide(){
i++;
Run.innerText = i ; 

}

function Wicket(){
    k++;
    Tballs.innerText = k;
    if (j<=8) {
        j++
        over();
        Wic.innerText = j ; 
    } else {
        Wic.innerText = "Game over"
        alert("Score is : " +Runs.innerText+ " Overs : "+ complete + result.innerText +  "Total balls : "+ Tballs.innerText  +  " All Out , Game Over");
    }
 
}






/* Overs counter*/

let value = 0;
let complete = 0;

function over() {
if (value < 0.5) {
value += 0.1; // Increment the value by 0.1
} else {
value += 0.5; // Increment by 0.4 when it reaches 0.6
}

if (value >= 1) {
value = 0;
complete++;
document.getElementById("result").innerHTML = complete + " Over's complete";

}

ovr.innerText = value.toFixed(1);
}