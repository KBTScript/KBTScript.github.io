// общий блок
let greetingAppeal = document.querySelector('#greeting__appeal');
let generalCheckingGreeting = document.querySelector('#general-checking__greeting');
let generalCheckingGoodbyeMistake = document.querySelector('#general-checking__goodbye-mistake');

// повторный выезд
let recallClarification = document.querySelector('#recall__clarification');
let recallMastertime = document.querySelector('#recall__mastertime');
let recallNewTime = document.querySelector('#recall__newtime');
let recallGoodbye = document.querySelector('#recall__goodbye');

// перенос времени
let timeTransferNewTime = document.querySelector('#time-transfer__newtime');
let timeTransferNegative = document.querySelector('#time-transfer__negative');
let timeTransferClientTime = document.querySelector('#time-transfer__clienttime');
let timeTransferOurTime = document.querySelector('#time-transfer__ourtime');
let timeTransferClarification = document.querySelector('#time-transfer__clarification');
let timeTransferQuestion = document.querySelector('#time-transfer__question');
let timeTransferGoodbye = document.querySelector('#time-transfer__goodbye');

// первичное обращение
let firstCallChecking = document.querySelector('#first-call__checking');
let firstCallCheckingBrand = document.querySelector('#first-call__checkingbrand');

// первичное обращение - гарантийный ремонт
let firstCallWarrantyWhereBuy = document.querySelector('#first-call__warrantyWhereBuy');

// первичное обращение - гарантийный ремонт - 
// изделие приобретено не в ДНС/ изделие приобретено в ДНС (нет авторизации) / проверка качества
let firstCallWarrantyNumber = document.querySelector('#first-call__warrantynumber');
let firstCallWarrantyNumberYes = document.querySelector('#first-call__warrantynumberyes');

// первичное обращение - изделие куплено в ДНС
let firstCallWarrantyDNSClient = document.querySelector('#first-call__warrantyDNSClient');
let firstCallWarrantyNumberNoDNS = document.querySelector('#first-call__warrantynumbernoDNS');

// первичное обращение - изделие куплено не в ДНС
let firstCallWarrantyNumberNoNotDNS = document.querySelector('#first-call__warrantynumbernonotDNS');

// гарантийный ремонт - поиск чека 
let warrantyBill = document.querySelector('#warranty__bill');
let warrantyBillHaveNot = document.querySelector('#warranty__billhavenot');
let warrantyBillHaveNotData = document.querySelector('#warranty__billhavenotdata');
let warrantyBillHaveData = document.querySelector('#warranty__billhavedata');
let warrantyBillHave = document.querySelector('#warranty__billhave');
let warrantyBillInstruction = document.querySelector('#warranty__billinstruction');
let warrantyBillWrongData = document.querySelector('#warranty__billwrongdata');

// первичное обращение - платный ремонт - модель
let firstCallPaidModel = document.querySelector('#first-call__paidmodel');

// первичное обращение - описание неисправности
let firstCallDeffect = document.querySelector('#first-call__deffect');
let firstCallFrequency = document.querySelector('#first-call__frequency');
let firstCallLong = document.querySelector('#first-call__long');
let firstCallConfirmation = document.querySelector('#first-call__confirmation');
let firstCallAddQuestion = document.querySelector('#first-call__addquestion');
let firstCallAfterAddQuestion = document.querySelector('#first-call__afteraddquestion');

// справочник неисправностей
let ProblemDirectory = document.querySelector('#problemdirectory');

// электрическая поверхность
let ProblemDirectoryStove = document.querySelector('#problemdirectory__stove');

// кондиционер
let ProblemDirectoryCondition = document.querySelector('#problemdirectory__condition');

// холодильник
let ProblemDirectoryRefrigerator = document.querySelector('#problemdirectory__refrigerator');
let RefrigeratorResolve = document.querySelector('#refrigerator__resolve');

// стиральная машина
let ProblemDirectoryWasher = document.querySelector('#problemdirectory__washer');

// духовой шкаф
let ProblemDirectoryOven = document.querySelector('#problemdirectory__oven');

// вытяжка
let ProblemDirectoryHood = document.querySelector('#problemdirectory__hood');

// посудомоечная машина
let ProblemDirectoryDishwasher = document.querySelector('#problemdirectory__dishwasher');

// газовая поверхность
let ProblemDirectoryGas = document.querySelector('#problemdirectory__gas');

// завершение регистрации
let ProblemDirectoryAskResolve = document.querySelector('#problemdirectory__askresolve');
let ProblemDirectoryNeedMaster = document.querySelector('#problemdirectory__needmaster');

// гарантийный ремонт не АСЦ - поиск чека 
let warrantyNotASCBill = document.querySelector('#warrantynotASC__bill');
let warrantyNotASCBillHaveNot = document.querySelector('#warrantynotASC__billhavenot');
let warrantyNotASCBillHaveNotData = document.querySelector('#warrantynotASC__billhavenotdata');
let warrantyNotASCBillHaveData = document.querySelector('#warrantynotASC__billhavedata');
let warrantyNotASCBillHave = document.querySelector('#warrantynotASC__billhave');
let warrantyNotASCBillInstruction = document.querySelector('#warrantynotASC__billinstruction');
let warrantyNotASCBillWrongData = document.querySelector('#warrantynotASC__billwrongdata');

// проблема решена по телефону
let ProblemDirectoryResolved = document.querySelector('#problemdirectory__resolved');
let ProblemDirectoryResolvedQuest = document.querySelector('#problemdirectory__resolvedquest');
let ProblemDirectoryResolvedGoodBye = document.querySelector('#problemdirectory__resolvedgoodbye');

// проблема не решена, требуется выезд мастера
let ProblemDirectoryNotResolved = document.querySelector('#problemdirectory__notresolved');
let ProblemDirectoryNotResolvedTime = document.querySelector('#problemdirectory__notresolvedtime');
let ProblemDirectoryNotResolvedNewTime = document.querySelector('#problemdirectory__notresolvednewtime');
let ProblemDirectoryNotResolvedGoodBye = document.querySelector('#problemdirectory__notresolvedgoodbye');

// не в ДНС - вызов мастера
let ProblemDirectoryNotDNSNotResolved = document.querySelector('#problemdirectory__notDNSnotresolved');
let ProblemDirectoryNotDNSNotResolvedYes = document.querySelector('#problemdirectory__notDNSnotresolvedyes');
let ProblemDirectoryNotDNSNotResolvedGoodBye = document.querySelector('#problemdirectory__notDNSnotresolvedgoodbye');

// АСЦ - вызов мастера
let ProblemDirectoryASCNotResolved = document.querySelector('#problemdirectory__ASCnotresolved');
let ProblemDirectoryASCNotResolvedYes = document.querySelector('#problemdirectory__ASCnotresolvedyes');
let ProblemDirectoryASCNotResolvedNo = document.querySelector('#problemdirectory__ASCnotresolvedno');
let ProblemDirectoryASCNotResolvedQuest = document.querySelector('#problemdirectory__ASCnotresolvedquest');
let ProblemDirectoryASCNotResolvedQuestYes = document.querySelector('#problemdirectory__ASCnotresolvedquestyes');
let ProblemDirectoryASCNotResolvedGoodBye = document.querySelector('#problemdirectory__ASCnotresolvedgoodbye');

//кнопка домой
let home = document.querySelector("#home");

// массив для хранения истории блоков, которые прошли
let blocks = [];

// текущий блок
let currentBlock = greetingAppeal;

// метки первичное обращение/повторное обращение/перенос времени
let isFirstCall = false;
let isRecall = false;
let isTimeTransfer = false;

// метки гарантийный/ платный ремонт
let isWarranty = false;
let isPaid = false;

// метки товар куплен в ДНС или нет
isDNSClient = false;
isASC = false;
isNotASC = false;

document.addEventListener('click', (event) => catchClick(event));

function catchClick(event) {
	const elementId = event.target.id;
	switch (elementId) {
		// общий блок
		case 'greeting__appeal-recall':
			showNextBlock(generalCheckingGreeting);
			isRecall = true;
			break;
		case 'greeting__appeal-timetransfer':
			showNextBlock(generalCheckingGreeting);
			isTimeTransfer = true;
			break;
		case 'greeting__appeal-firstcall':
			showNextBlock(generalCheckingGreeting);
			isFirstCall = true;
			break;
		case 'general-checking__greeting-no':
			showNextBlock(generalCheckingGoodbyeMistake);
			break;
		case 'general-checking__greeting-yes':
			if(isRecall){
				showNextBlock(recallClarification);
			}
			if(isTimeTransfer){
				showNextBlock(timeTransferNewTime);
			}
			if(isFirstCall){
				showNextBlock(firstCallChecking);
			}
			break;

		// повторное обращение
		case 'recall__clarification-continue':
			showNextBlock(recallMastertime);
			break;
		case 'recall__mastertime-no':
			showNextBlock(recallNewTime);
			break;
		case 'recall__newtime-continue':
			showNextBlock(recallGoodbye);
			break;
		case 'recall__mastertime-yes':
			showNextBlock(recallGoodbye);
			break;

		// перенос времени
		case 'time-transfer__newtime-negative':
			showNextBlock(timeTransferNegative);
			break;
		case 'time-transfer__negative-yes':
			showNextBlock(timeTransferOurTime);
			break;
		case 'time-transfer__newtime-yes':
			showNextBlock(timeTransferOurTime);
			break;
		case 'time-transfer__negative-no':
			showNextBlock(timeTransferClientTime);
			break;
		case 'time-transfer__newtime-no':
			showNextBlock(timeTransferClientTime);
			break;
		case 'time-transfer__clienttime-continue':
			showNextBlock(timeTransferClarification);
			break;
		case 'time-transfer__ourtime-continue':
			showNextBlock(timeTransferClarification);
			break;
		case 'time-transfer__clarification-no':
			showNextBlock(timeTransferGoodbye);
			break;
		case 'time-transfer__clarification-yes':
			showNextBlock(timeTransferQuestion);
			break;
		case 'time-transfer__question-continue':
			showNextBlock(timeTransferGoodbye);
			break;		

		// первичное обращение - общее проверка бренда
		case 'first-call__checking-warranty':
			showNextBlock(firstCallCheckingBrand);
			isWarranty = true;
			break;
		case 'first-call__checking-paid':
			showNextBlock(firstCallCheckingBrand);
			isPaid = true;
			break;
		case 'first-call__checkingbrand-continue':
			console.log(isPaid);
			console.log(isWarranty);
			if (isPaid) {
				showNextBlock(firstCallPaidModel); 
			} 
			else if (isWarranty) {
				showNextBlock(firstCallWarrantyWhereBuy);
			}
			break;

		// первичное обращение - гарантийный ремонт - 
		// изделие приобретено не в ДНС/ 
		// изделие приобретено в ДНС (нет авторизации)/ 
		// проверка качества
		case 'first-call__warrantyDNS-no':
			showNextBlock(firstCallWarrantyNumber);
			break;
		case 'first-call__warrantyDNS-yes':
			showNextBlock(firstCallWarrantyDNSClient);
			break;

		// первичное обращение - гарантийный ремонт - 
		// покупали в ДНС
		case 'first-call__warrantyDNSClient-dexp':
			showNextBlock(warrantyBill);
			break;
		case 'first-call__warrantyDNSClient-notautor':		
			showNextBlock(firstCallWarrantyNumber);
			isDNSClient = true;
			isNotASC = true;
			break;
		case 'first-call__warrantyDNSClient-autor':
			showNextBlock(warrantyBill);
			isDNSClient = true;
			isASC = true;
			break;
		case 'first-call__warrantyDNSClient-qual':
			showNextBlock(firstCallWarrantyNumber);
			isDNSClient = true;
			isNotASC = true;
			break;
		
		// первичное обращение - гарантийный ремонт - 
		// покупали не в ДНС
		case 'first-call__warrantynumber-yes':
			showNextBlock(firstCallWarrantyNumberYes);
			break;
		case 'first-call__warrantynumber-no':
			if(isDNSClient) {
				showNextBlock(firstCallWarrantyNumberNoDNS);
			} else {
				showNextBlock(firstCallWarrantyNumberNoNotDNS);
			}
			break;
		case 'first-call__warrantynumberno-moreyear':
			showNextBlock(firstCallWarrantyNumberYes);
			break;
		case 'first-call__warrantynumberno-lessyear':
			showNextBlock(firstCallDeffect);
			break;
		case 'first-call__warrantynumbernoDNS-continue':
			showNextBlock(firstCallDeffect);
			break;

		// гарантийный ремонт - поиск чека
		case 'warranty__bill-have':
			showNextBlock(warrantyBillHave);
			break;
		case 'warranty__bill-havenot':
			showNextBlock(warrantyBillHaveNot);
			break;
		case 'warranty__bill-havedata':
			showNextBlock(warrantyBillHaveData);
			break;
		case 'warranty__bill-havenotdata':
			showNextBlock(warrantyBillHaveNotData);
			break;
		case 'warranty__billhavedata-product':
			showNextBlock(firstCallDeffect);
			break;
		case 'warranty__billhavedata-productnot':
			showNextBlock(warrantyBillWrongData);
			break;
		case 'warranty__billhavedata-searchinstruction':
			showNextBlock(warrantyBillInstruction);
			break;
		case 'warranty__billhave-product':
			showNextBlock(firstCallDeffect);
			break;
		case 'warranty__billhave-searchinstruction':
			showNextBlock(warrantyBillInstruction);
			break;
		case 'warranty__billinstruction-product':
			showNextBlock(firstCallDeffect);
			break;
		case 'warranty__billinstruction-productnot':
			showNextBlock(warrantyBillWrongData);
			break;

		// первичное обращение - платный ремонт 
		case 'first-call__paidmodel-continue':
			showNextBlock(firstCallDeffect);
			break;

		// первичное обращение - описание деффекта
		case 'first-call__deffect-continue':
			showNextBlock(firstCallFrequency);
			break;
		case 'first-call__frequency-continue':
			showNextBlock(firstCallLong);
			break;
		case 'first-call__long-continue':
			showNextBlock(firstCallConfirmation);
			break;
		case 'first-call__confirmation-yes':
			showNextBlock(ProblemDirectory);
			break;
		case 'first-call__confirmation-no':
			showNextBlock(firstCallAddQuestion);
			break;
		case 'first-call__addquestion-continue':
			showNextBlock(firstCallAfterAddQuestion);
			break;	
		case 'first-call__afteraddquestion-continue':
			showNextBlock(ProblemDirectory);
			break;

		// справочник неисправностей
		case 'problemdirectory-stovebut':
			showNextBlock(ProblemDirectoryStove);
			break;
		case 'problemdirectory-conditionbut':
			showNextBlock(ProblemDirectoryCondition);
			break;
		case 'problemdirectory-refrigeratorbut':
			showNextBlock(ProblemDirectoryRefrigerator);
			break;
		case 'problemdirectory-washerbut':
			showNextBlock(ProblemDirectoryWasher);
			break;
		case 'problemdirectory-ovenbut':
			showNextBlock(ProblemDirectoryOven);
			break;
		case 'problemdirectory-hoodbut':
			showNextBlock(ProblemDirectoryHood);
			break;
		case 'problemdirectory-dishwasherbut':
			showNextBlock(ProblemDirectoryDishwasher);
			break;
		case 'problemdirectory-gasbut':
			showNextBlock(ProblemDirectoryGas);
			break;

		// электрическая поверхность
		case 'problemdirectory__stove-firstvariantbut':
			showNextBlock(StoveFirstVariant);
			break;
		case 'problemdirectory__stove-secondvariantbut':
			showNextBlock(StoveSecondVariant);
			break;
		case 'problemdirectory__stove-thirdvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// кондиционер
		case 'problemdirectory__condition-firstvariantbut':
			showNextBlock(ConditionFirstVariant);
			break;
		case 'problemdirectory__condition-secondvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// холодильник
		case 'problemdirectory__refrigerator-firstvariantbut':
			showNextBlock(RefrigeratorFirstVariant);
			break;
		case 'problemdirectory__refrigerator-secondvariantbut':
			showNextBlock(RefrigeratorSecondVariant);
			break;
		case 'problemdirectory__refrigerator-thirdvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// стиральная машина
		case 'problemdirectory__washer-firstvariantbut':
			showNextBlock(WasherFirstVariant);
			break;
		case 'problemdirectory__washer-secondvariantbut':
			showNextBlock(WasherSecondVariant);
			break;
		case 'problemdirectory__washer-thirdvariantbut':
			showNextBlock(WasherThirdVariant);
			break;
		case 'problemdirectory__washer-fourthvariantbut':
			showNextBlock(WasherFourthVariant);
			break;
		case 'problemdirectory__washer-fifthvariantbut':
			showNextBlock(WasherFifthVariant);
			break;
		case 'problemdirectory__washer-sixthvariantbut':
			showNextBlock(WasherSixthVariant);
			break;
		case 'problemdirectory__washer-seventhvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// духовой шкаф
		case 'problemdirectory__oven-firstvariantbut':
			showNextBlock(OvenFirstVariant);
			break;
		case 'problemdirectory__oven-secondvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// вытяжка
		case 'problemdirectory__hood-firstvariantbut':
			showNextBlock(HoodFirstVariant);
			break;
		case 'problemdirectory__hood-secondvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// посудомоечная машина
		case 'problemdirectory__dishwasher-firstvariantbut':
			showNextBlock(DishwasherFirstVariant);
			break;
		case 'problemdirectory__dishwasher-secondvariantbut':
			showNextBlock(DishwasherSecondVariant);
			break;
		case 'problemdirectory__dishwasher-thirdvariantbut':
			showNextBlock(DishwasherThirdVariant);
			break;
		case 'problemdirectory__dishwasher-fourthdvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// газовая поверхность
		case 'problemdirectory__gas-firstvariantbut':
			showNextBlock(GasFirstVariant);
			break;
		case 'problemdirectory__gas-secondvariantbut':
			showNextBlock(GasSecondVariant);
			break;
		case 'problemdirectory__gas-thirdvariantbut':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// завершение регистрации
		case 'problemdirectory__askresolve-yes':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'problemdirectory__askresolve-no':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		case 'problemdirectory__needmaster-continue':
			if (isASC) {
				showNextBlock(ProblemDirectoryASCNotResolved);
			} else if (isNotASC) {
				showNextBlock(warrantyNotASCBill);
			}
			else {
				showNextBlock(ProblemDirectoryNotResolved);
			}
			break;

		// гарантийный ремонт - поиск чека
		case 'warrantynotASC__bill-have':
			showNextBlock(warrantyNotASCBillHave);
			break;
		case 'warrantynotASC__bill-havenot':
			showNextBlock(warrantyNotASCBillHaveNot);
			break;
		case 'warrantynotASC__bill-havedata':
			showNextBlock(warrantyNotASCBillHaveData);
			break;
		case 'warrantynotASC__bill-havenotdata':
			showNextBlock(warrantyNotASCBillHaveNotData);
			break;
		case 'warrantnotASCy__billhavedata-searchinstruction':
			showNextBlock(warrantyNotASCBillInstruction);
			break;
		case 'warrantynotASC__billhavedata-product':
			showNextBlock(ProblemDirectoryNotResolved);
			break;
		case 'warrantynotASC__billhavedata-productnot':
			showNextBlock(warrantyNotASCBillWrongData);
			break;
		case 'warrantynotASC__billhavedata-searchinstruction':
			showNextBlock(warrantyNotASCBillInstruction);
			break;
		case 'warrantnotASC__billhavedata-searchinstruction':
			showNextBlock(warrantyNotASCBillInstruction);
			break;
		case 'warrantynotASC__billhave-product':
			showNextBlock(ProblemDirectoryNotResolved);
			break;
		case 'warrantynotASC__billhave-searchinstruction':
			showNextBlock(warrantyNotASCBillInstruction);
			break;
		case 'warrantynotASC__billinstruction-product':
			showNextBlock(ProblemDirectoryNotResolved);
			break;
		case 'warrantynotASC__billinstruction-productnot':
			showNextBlock(warrantyNotASCBillWrongData);
			break;

		// проблема решена по телефону
		case 'problemdirectory__resolved-yes':
			showNextBlock(ProblemDirectoryResolvedQuest);
			break;
		case 'problemdirectory__resolved-no':
			showNextBlock(ProblemDirectoryResolvedGoodBye);
			break;
		case 'problemdirectory__resolvedquest-continue':
			showNextBlock(ProblemDirectoryResolvedGoodBye);
			break;

		// проблема не решена, требуется выезд мастера
		case 'problemdirectory__notresolved-continue':
			showNextBlock(ProblemDirectoryNotResolvedTime);
			break;
		case 'problemdirectory__notresolvedtime-yes':
			showNextBlock(ProblemDirectoryNotResolvedGoodBye);
			break;
		case 'problemdirectory__notresolvedtime-no':
			showNextBlock(ProblemDirectoryNotResolvedNewTime);
			break;
		case 'problemdirectory__notresolvednewtime-continue':
			showNextBlock(ProblemDirectoryNotResolvedGoodBye);
			break;

		// не в ДНС - вызов мастера
		case 'problemdirectory__notDNSnotresolved-yes':
			showNextBlock(ProblemDirectoryNotDNSNotResolvedYes);
			break;
		case 'problemdirectory__notDNSnotresolved-no':
			showNextBlock(ProblemDirectoryNotDNSNotResolvedGoodBye);
			break;
		case 'problemdirectory__notDNSnotresolvedyes-continue':
			showNextBlock(ProblemDirectoryNotDNSNotResolvedGoodBye);
			break;

		// АСЦ - вызов мастера
		case 'problemdirectory__ASCnotresolved-yes':
			showNextBlock(ProblemDirectoryASCNotResolvedYes);
			break;
		case 'problemdirectory__ASCnotresolved-no':
			showNextBlock(ProblemDirectoryASCNotResolvedNo);
			break;
		case 'problemdirectory__ASCnotresolvedyes-continue':
			showNextBlock(ProblemDirectoryASCNotResolvedQuest);
			break;
		case 'problemdirectory__ASCnotresolvedno-continue':
			showNextBlock(ProblemDirectoryASCNotResolvedQuest);
			break;
		case 'problemdirectory__ASCnotresolvedquest-yes':
			showNextBlock(ProblemDirectoryASCNotResolvedQuestYes);
			break;
		case 'problemdirectory__ASCnotresolvedquest-no':
			showNextBlock(ProblemDirectoryASCNotResolvedGoodBye);
			break;
		case 'problemdirectory__ASCnotresolvedquestyes-continue':
			showNextBlock(ProblemDirectoryASCNotResolvedGoodBye);
			break;

		// кнопка домой
		case 'home':
			goStart();
			break;
		// кнопка назад
		case 'back':
			goBack();
			break;
	}
}

// метод для вывода следующего блока
function showNextBlock(newBlock) {
	blocks.push(currentBlock);
	hideBlock(currentBlock);
	currentBlock = newBlock;
	showBlock(currentBlock);
//	javascript:window.scrollTo(0,document.body.scrollHeight)
}

// метод для отображения блока
function showBlock(block) {
	block.style.display = 'flex';
}

// метод для сокрытия блока
function hideBlock(block) {
	block.style.display = 'none';
}

// метод для отображения кнопки блока
function showButton(button) {
	button.style.display = 'inline-block';
//	javascript:window.scrollTo(0,document.body.scrollHeight)
}

// метод для сброса странички до стартовых условий
function goStart() {
	isRecall = false;
	isTimeTransfer = false;
	isFirstCall = false;
	isWarranty = false;
	isPaid = false;
	isDNSClient = false;
	isASC = false;
	isNotASC = false;

	hideBlock(currentBlock);
	currentBlock = greetingAppeal;
	showBlock(currentBlock);
	blocks = [];
}

function goBack() {
	hideBlock(currentBlock);
	if (currentBlock == generalCheckingGreeting) {
		isRecall = false;
		isTimeTransfer = false;
		isFirstCall = false;
	}
	if (currentBlock == firstCallCheckingBrand){
		isWarranty = false;
		isPaid = false;
	}
	if (currentBlock == firstCallWarrantyNumber){
		isDNSClient = false;
		isNotASC = false;
	}
	if (currentBlock == warrantyBill) {
		isDNSClient = false;
		isASC = false;
	}
	currentBlock = blocks[blocks.length - 1];
	blocks.pop();
	showBlock(currentBlock);
}