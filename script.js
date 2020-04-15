
var score=0;
var opscore=0;

var rock="images/icon-rock.svg";
var paper="images/icon-paper.svg";
var scissors="images/icon-scissors.svg";

document.querySelector('.rock').addEventListener("click", function() {
	document.getElementById("you").src=rock;
	var opp = Math.floor((Math.random() * 3) + 1);
	if(opp==1){document.getElementById("opp").src= rock; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
	else if(opp==2){document.getElementById("opp").src=paper; opscore++; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
	else if(opp==3){document.getElementById("opp").src=scissors; score++; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
});

document.querySelector('.paper').addEventListener("click", function a() {
	document.getElementById("you").src=paper;
	var opp = Math.floor((Math.random() * 3) + 1);
	if(opp==1){document.getElementById('opp').src=rock; score++; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
	else if(opp==2){document.getElementById('opp').src=paper; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
	else if(opp==3){document.getElementById('opp').src=scissors; opscore++; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
});

document.querySelector('.scissor').addEventListener("click", function b() {
	document.getElementById("you").src=scissors;
	var opp = Math.floor((Math.random() * 3) + 1);
	if(opp==1){document.getElementById("opp").src=rock; opscore++; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
	else if(opp==2){document.getElementById("opp").src=paper; score++; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
	else if(opp==3){document.getElementById("opp").src=scissors; document.getElementById("sc").innerText="SCORE="+ score; document.getElementById("opsc").innerText="OPPONENT SCORE="+ opscore;}
});

document.querySelector('.new').addEventListener("click", function v() {
	document.getElementById("sc").innerText="SCORE=0";
	document.getElementById("opsc").innerText="OPPONENT SCORE=0";
	score=0;
	opscore=0;
	document.getElementById("you").src="E:/WebDev/rps/images/1200px-Icon-round-Question_mark.svg.png";
	document.getElementById("opp").src="E:/WebDev/rps/images/1200px-Icon-round-Question_mark.svg.png";
	document.getElementById("en").innerText="Play in progress !!"
});

document.querySelector('.end').addEventListener("click", function o() {
	if(score > opscore){document.getElementById("en").innerText="You won !!!"}
	else if(score < opscore){document.getElementById("en").innerText="You lost !!!"}
	else if(score == opscore){document.getElementById("en").innerText="Tie !!!"}
});




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rules");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
