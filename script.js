let greetingTerritory = document.querySelector('#greeting__territory');
let greetingAppeal = document.querySelector('#greeting__appeal');
let generalCheckingGreeting = document.querySelector('#general-checking__greeting');
let generalCheckingGoodbyeMistake = document.querySelector('#general-checking__goodbye-mistake');
let recallClarification = document.querySelector('#recall__clarification');
let recallMastertime = document.querySelector('#recall__mastertime');
let recallNewTime = document.querySelector('#recall__newtime');
let recallGoodbye = document.querySelector('#recall__goodbye');
let timeTransferNewTime = document.querySelector('#time-transfer__newtime');
let timeTransferNegative = document.querySelector('#time-transfer__negative');
let timeTransferClientTime = document.querySelector('#time-transfer__clienttime');
let timeTransferOurTime = document.querySelector('#time-transfer__ourtime');
let timeTransferClarification = document.querySelector('#time-transfer__clarification');
let timeTransferQuestion = document.querySelector('#time-transfer__question');
let timeTransferGoodbye = document.querySelector('#time-transfer__goodbye');
let home = document.querySelector("#home");

let isRecall = false;
let isFirstCall = false;
let isTimeTransfer = false;

document.addEventListener('click', (event) => catchClick(event));
document.addEventListener('change', (event) => catchChange(event));

function catchClick(event) {
	const elementId = event.target.id;
	switch (elementId) {
		case 'greeting__appeal-recall':
			showBlock(generalCheckingGreeting);
			console.log(isRecall);
			isRecall = true;
			console.log(isRecall);
			break;
		case 'greeting__appeal-timetransfer':
			showBlock(generalCheckingGreeting);
			console.log(isTimeTransfer);
			isTimeTransfer = true;
			console.log(isTimeTransfer);
			break;
		case 'general-checking__greeting-no':
			showBlock(generalCheckingGoodbyeMistake);
			break;
		case 'general-checking__greeting-yes':
			console.log(isRecall);
			console.log(isTimeTransfer);
			if(isRecall){
				showBlock(recallClarification);
			}
			if(isTimeTransfer){
				showBlock(timeTransferNewTime);
			}
			break;
		case 'recall__clarification-continue':
			showBlock(recallMastertime);
			break;
		case 'recall__mastertime-no':
			showBlock(recallNewTime);
			break;
		case 'recall__newtime-continue':
			showBlock(recallGoodbye);
			break;
		case 'recall__mastertime-yes':
			showBlock(recallGoodbye);
			break;
		case 'time-transfer__newtime-negative':
			showBlock(timeTransferNegative);
			break;
		case 'time-transfer__negative-yes':
			showBlock(timeTransferOurTime);
			break;
		case 'time-transfer__newtime-yes':
			showBlock(timeTransferOurTime);
			break;
		case 'time-transfer__negative-no':
			showBlock(timeTransferClientTime);
			break;
		case 'time-transfer__newtime-no':
			showBlock(timeTransferClientTime);
			break;
		case 'time-transfer__clienttime-continue':
			showBlock(timeTransferClarification);
			break;
		case 'time-transfer__ourtime-continue':
			showBlock(timeTransferClarification);
			break;
		case 'time-transfer__clarification-no':
			showBlock(timeTransferGoodbye);
			break;
		case 'time-transfer__clarification-yes':
			showBlock(timeTransferQuestion);
			break;
		case 'time-transfer__question-continue':
			showBlock(timeTransferGoodbye);
			break;
		case 'home':
			goStart();
			break;
	}
}

function catchChange(event) {
	const elementId = event.target.id;
	switch (elementId) {
		case 'greeting__territory-options':
			showBlock(greetingAppeal);
			showButton(home);
			break;
	}
}

function hideBlock(block) {
	block.style.display = 'none';
}

function showBlock(block) {
	block.style.display = 'flex';
	javascript:window.scrollTo(0,document.body.scrollHeight)
}

function showButton(button) {
	button.style.display = 'inline-block';
	javascript:window.scrollTo(0,document.body.scrollHeight)
}

function goStart() {
	let elements = document.querySelectorAll('.notgreeting');

	for (let elem of elements) {
		elem.style.display = 'none';
	}
}