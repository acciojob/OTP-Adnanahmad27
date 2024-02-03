//your JS code here. If required.
const container = document.querySelector(".code-container");
let lastEnteredInputElemet = null;

function onEnter(e) {
	if(e.target.value){
		e.target.nextElementSibling && e.target.nextElementSibling.focus();
	}
}
function onBackspace(e) {
	e.target.value = "";
	e.target.previousElementSibling && e.target.previousElementSibling.focus();
}

function onInput(e){
	const currEle = e.target;
	if(currEle.value){
		lastEnteredInputElemet = currEle;
		currEle.nextElementSibling && currEle.nextElementSibling.focus();
	}
}
function onKeyUp(e) {
	if(e.key === "Enter"){
		onEnter(e);
	}else if(e.key ==="Backspace"){
		onBackspace(e);
	}
}


for(let i=1 ; i<=6 ; i++){
	const code_continer = document.createElement("input");
	code_continer.className = "code";
	code_continer.id = `code-{i}` ;
	code_continer.maxLength = 1;
	container.appendChild(code_continer);
	code_continer.addEventListener("input" , onInput);
	code_continer.addEventListener("keyup" , onKeyUp);
}

