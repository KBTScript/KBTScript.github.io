let home = document.getElementById('home');
let greetingTerritory = document.getElementById('greeting__territory');
let greetingAppeal = document.getElementById('greeting__appeal');
let generalCheckingGreeting = document.getElementById('general-checking__greeting');
let generalCheckingGoodbyeMistake = document.getElementById('general-checking__goodbye-mistake');
let recallClarification = document.getElementById('recall__clarification');
let recallNewTime = document.getElementById('recall__newtime');
let recallGoodbye = document.getElementById('recall__goodbye');
let timeTransferNewTime = document.getElementById('time-transfer__newtime');
let timeTransferNegative = document.getElementById('time-transfer__negative');
let timeTransferClientTime = document.getElementById('time-transfer__clienttime');
let timeTransferOurTime = document.getElementById('time-transfer__ourtime');
let timeTransferClarification = document.getElementById('time-transfer__clarification');
let timeTransferQuestion = document.getElementById('time-transfer__question');
let timeTransferGoodbye = document.getElementById('time-transfer__goodbye');

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
		case 'recall__clarification-no':
			showBlock(recallNewTime);
			break;
		case 'recall__newtime-continue':
			showBlock(recallGoodbye);
			break;
		case 'recall__clarification-yes':
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
			showBlock(timeTransferQuestion);
			break;
		case 'time-transfer__clarification-yes':
			showBlock(timeTransferGoodbye);
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
}

function showButton(button) {
	button.style.display = 'inline-block';
}

function goStart() {
	hideBlock(wrap);
	showBlock(wrap);
	showBlock(greetingTerritory);
	showBlock(greetingAppeal);
}