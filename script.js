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

// холодильник
let ProblemDirectoryRefrigerator = document.querySelector('#problemdirectory__refrigerator');
let RefrigeratorFirstVariant = document.querySelector('#refrigerator-firstvariant');
let RefrigeratorSecondVariant = document.querySelector('#refrigerator-secondvariant');
let RefrigeratorThirdVariant = document.querySelector('#refrigerator-thirdvariant');
let RefrigeratorFourthVariant = document.querySelector('#refrigerator-fourthvariant');
let RefrigeratorFifthVariant = document.querySelector('#refrigerator-fifthvariant');
let RefrigeratorSixthVariant = document.querySelector('#refrigerator-sixthvariant');
 
// стиральная машина
let ProblemDirectoryWasher = document.querySelector('#problemdirectory__washer');
let WasherFirstVariant = document.querySelector('#washer-firthvariant');
let WasherSecondVariant = document.querySelector('#washer-secondvariant');
let WasherThirdVariant = document.querySelector('#washer-thirdvariant');
let WasherFourthVariant = document.querySelector('#washer-fourthvariant');
let WasherFifthVariant = document.querySelector('#washer-fifthvariant');

// электрическая поверхность
let ProblemDirectoryStove = document.querySelector('#problemdirectory__stove');
let StoveFirstVariant = document.querySelector('#stove-firstvariant');
let StoveSecondVariant = document.querySelector('#stove-secondvariant');

// кондиционер
let ProblemDirectoryCondition = document.querySelector('#problemdirectory__condition');
let ConditionFirstVariant = document.querySelector('#condition-firstvariant');

// духовой шкаф
let ProblemDirectoryOven = document.querySelector('#problemdirectory__oven');
let OvenFirstVariant = document.querySelector('#oven-firstvariant');

// вытяжка
let ProblemDirectoryHood = document.querySelector('#problemdirectory__hood');
let HoodFirstVariant = document.querySelector('#hood-firstvariant');

// посудомоечная машина
let ProblemDirectoryDishwasher = document.querySelector('#problemdirectory__dishwasher');
let DishwasherFirstVariant = document.querySelector('#dishwasher-firstvariant');
let DishwasherSecondVariant = document.querySelector('#dishwasher-secondvariant');
let DishwasherThirdVariant = document.querySelector('#dishwasher-thirdvariant');

// газовая поверхность
let ProblemDirectoryGas = document.querySelector('#problemdirectory__gas');
let GasFirstVariant = document.querySelector('#gas-firstvariant');
let GasSecondVariant = document.querySelector('#gas-secondvariant');

// завершение регистрации
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

		// холодильник
		// 1 вариант
		case 'problemdirectory__refrigerator-firstvariantbut':
			showNextBlock(RefrigeratorFirstVariant);
			break;
		case 'refrigerator-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 2 вариант
		case 'problemdirectory__refrigerator-secondvariantbut':
			showNextBlock(RefrigeratorSecondVariant);
			break;
		case 'refrigerator-secondvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator-secondvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 3 вариант
		case 'problemdirectory__refrigerator-thirdvariantbut':
			showNextBlock(RefrigeratorThirdVariant);
			break;
		case 'refrigerator-thirdvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator-thirdvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 4 вариант
		case 'problemdirectory__refrigerator-fourthvariantbut':
			showNextBlock(RefrigeratorFourthVariant);
			break;
		case 'refrigerator-fourthvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator-fourthvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 5 вариант
		case 'problemdirectory__refrigerator-fifthvariantbut':
			showNextBlock(RefrigeratorFifthVariant);
			break;
		case 'refrigerator-fifthvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator-fifthvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 6 вариант
		case 'problemdirectory__refrigerator-sixthvariantbut':
			showNextBlock(RefrigeratorSixthVariant);
			break;
		case 'refrigerator-sixthvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator-sixthvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// стиральная машина
		// 1 вариант
		case 'problemdirectory__washer-firstvariantbut':
			showNextBlock(WasherFirstVariant);
			break;
		case 'washer-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'washer-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 2 вариант
		case 'problemdirectory__washer-secondvariantbut':
			showNextBlock(WasherSecondVariant);
			break;
		case 'washer-secondvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'washer-secondvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 3 вариант
		case 'problemdirectory__washer-thirdvariantbut':
			showNextBlock(WasherThirdVariant);
			break;
		case 'washer-thirdvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'washer-thirdvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 4 вариант
		case 'problemdirectory__washer-fourthvariantbut':
			showNextBlock(WasherFourthVariant);
			break;
		case 'washer-fourthdvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'washer-fourthvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 5 вариант
		case 'problemdirectory__washer-fifthvariantbut':
			showNextBlock(WasherFifthVariant);
			break;
		case 'washer-fifthvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'washer-fifthvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// электрическая поверхность
		// 1 вариант
		case 'problemdirectory__stove-firstvariantbut':
			showNextBlock(StoveFirstVariant);
			break;
		case 'stove-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'stove-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 2 вариант
		case 'problemdirectory__stove-secondvariantbut':
			showNextBlock(StoveSecondVariant);
			break;
		case 'stove-secondvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'stove-secondvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// кондиционер
		// 1 вариант
		case 'problemdirectory__condition-firstvariantbut':
			showNextBlock(ConditionFirstVariant);
			break;
		case 'condition-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'condition-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// духовой шкаф
		// 1 вариант
		case 'problemdirectory__oven-firstvariantbut':
			showNextBlock(OvenFirstVariant);
			break;
		case 'oven-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'oven-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// вытяжка
		// 1 вариант
		case 'problemdirectory__hood-firstvariantbut':
			showNextBlock(HoodFirstVariant);
			break;
		case 'hood-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'hood-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// посудомоечная машина
		// 1 вариант
		case 'problemdirectory__dishwasher-firstvariantbut':
			showNextBlock(DishwasherFirstVariant);
			break;
		case 'dishwasher-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'dishwasher-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 2 вариант
		case 'problemdirectory__dishwasher-secondvariantbut':
			showNextBlock(DishwasherSecondVariant);
			break;
		case 'dishwasher-secondvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'dishwasher-secondvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 3 вариант
		case 'problemdirectory__dishwasher-thirdvariantbut':
			showNextBlock(DishwasherThirdVariant);
			break;
		case 'dishwasher-thirdvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'dishwasher-thirdvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// газовая поверхность
		// 1 вариант
		case 'problemdirectory__gas-firstvariantbut':
			showNextBlock(GasFirstVariant);
			break;
		case 'gas-firstvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'gas-firstvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;
		// 2 вариант
		case 'problemdirectory__gas-secondvariantbut':
			showNextBlock(GasSecondVariant);
			break;
		case 'gas-secondvariant-solved':
			showNextBlock(ProblemDirectoryResolved);
			break;
		case 'gas-secondvariant-master':
			showNextBlock(ProblemDirectoryNeedMaster);
			break;

		// завершение регистрации
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