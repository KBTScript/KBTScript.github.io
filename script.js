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
// электрическая поверхность - не включается
let StoveFirstVariant = document.querySelector('#stove__firstvariant');
let StoveFirstVariantYes = document.querySelector('#stove__firstvariantyes');
let StoveFirstVariantNo = document.querySelector('#stove__firstvariantno');
// электрическая поверхность - пятна на стекле
let StoveSecondVariant = document.querySelector('#stove__secondvariant');
let StoveSecondVariantNo = document.querySelector('#stove__secondvariantno');

// кондиционер
let ProblemDirectoryCondition = document.querySelector('#problemdirectory__condition');
// кондиционер - капает вода из корпуса
let ConditionFirstVariant = document.querySelector('#condition__firstvariant');
let ConditionFirstVariantFirst = document.querySelector('#condition__firstvariantfirst');

// холодильник
let ProblemDirectoryRefrigerator = document.querySelector('#problemdirectory__refrigerator');
let RefrigeratorResolve = document.querySelector('#refrigerator__resolve');
// холодильник - греются стенки
let RefrigeratorFirstVariant = document.querySelector('#refrigerator__firstvariant');
// холодильник - небольшой слой инея
let RefrigeratorSecondVariant = document.querySelector('#refrigerator__secondvariant');

// стиральная машина
let ProblemDirectoryWasher = document.querySelector('#problemdirectory__washer');
// стиральная машина - течет/образуется много пены
let WasherFirstVariant = document.querySelector('#washer__firstvariant');
let WasherFirstVariantYes = document.querySelector('#washer__firstvariantyes');
let WasherFirstVariantNo = document.querySelector('#washer__firstvariantno');
// стиральная машина - вода долго набирается/самослив/ошибка "нет воды"
let WasherSecondVariant = document.querySelector('#washer__secondvariant');
let WasherSecondVariantYes = document.querySelector('#washer__secondvariantyes');
let WasherSecondVariantNo = document.querySelector('#washer__secondvariantno');
// стиральная машина - не включается стиральная машина
let WasherThirdVariant = document.querySelector('#washer__thirdvariant');
let WasherThirdVariantYes = document.querySelector('#washer__thirdvariantyes');
let WasherThirdVariantNo = document.querySelector('#washer__thirdvariantno');
// стиральная машина - не отжимает/не сливает воду
let WasherFourthVariant = document.querySelector('#washer__fourthvariant');
let WasherFourthVariantYes = document.querySelector('#washer__fourthvariantyes');
let WasherFourthVariantNo = document.querySelector('#washer__fourthvariantno');
// стиральная машина - ошибка H2O/ не заливает воду
let WasherFifthVariant = document.querySelector('#washer__fifthvariant');
// стиральная машина - сильная вибрация
let WasherSixthVariant = document.querySelector('#washer__sixthvariant');

// духовой шкаф
let ProblemDirectoryOven = document.querySelector('#problemdirectory__oven');
// духовой шкаф - во время работы выключается аппарт
let OvenFirstVariant = document.querySelector('#oven__firstvariant');
let OvenFirstVariantYes = document.querySelector('#oven__firstvariantyes');

// вытяжка
let ProblemDirectoryHood = document.querySelector('#problemdirectory__hood');
// вытяжка - плохая тяга
let HoodFirstVariant = document.querySelector('#hood__firstvariant');
let HoodFirstVariantNo = document.querySelector('#hood__firstvariantno');

// посудомоечная машина
let ProblemDirectoryDishwasher = document.querySelector('#problemdirectory__dishwasher');
// посудомоечная машина - не сливает воду/не моет посуду
let DishwasherFirstVariant = document.querySelector('#dishwasher__firstvariant');
let DishwasherFirstVariantYes = document.querySelector('#dishwasher__firstvariantyes');
let DishwasherFirstVariantNo = document.querySelector('#dishwasher__firstvariantno');
// посудомоечная машина - не набирает воду
let DishwasherSecondVariant = document.querySelector('#dishwasher__secondvariant');
let DishwasherSecondVariantNo = document.querySelector('#dishwasher__secondvariantno');
// посудомоечная машина - не выбирает режим мойки
let DishwasherThirdVariant = document.querySelector('#dishwasher__thirdvariant');
let DishwasherThirdVariantNo = document.querySelector('#dishwasher__thirdvariantno');
let DishwasherThirdVariantGoodBye = document.querySelector('#dishwasher__thirdvariantgoodbye');

// газовая поверхность
let ProblemDirectoryGas = document.querySelector('#problemdirectory__gas');
// газовая поверхность - проблема с подключением газового шланга
let GasFirstVariant = document.querySelector('#gas__firstvariant');
// газовая поверхность - во время работы выключается аппарт
let GasSecondVariant = document.querySelector('#gas__secondvariant');
let GasSecondVariantYes = document.querySelector('#gas__secondvariantyes');

// завершение регистрации
let ProblemDirectoryAskResolve = document.querySelector('#problemdirectory__askresolve');
let ProblemDirectoryNeedMaster = document.querySelector('#problemdirectory__needmaster');

// гарантийный ремонт - поиск чека 
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

// метки для обозначения техники
let isPaidHood = false;
let isPaidGas = false;

document.addEventListener('click', (event) => catchClick(event));

function catchClick(event) {
	const elementId = event.target.id;
	switch (elementId) {
		// общий блок
		case 'greeting__appeal-recall':
			showBlock(generalCheckingGreeting);
			showButton(home);
			isRecall = true;
			break;
		case 'greeting__appeal-timetransfer':
			showBlock(generalCheckingGreeting);
			showButton(home);
			isTimeTransfer = true;
			break;
		case 'greeting__appeal-firstcall':
			showBlock(generalCheckingGreeting);
			showButton(home);
			isFirstCall = true;
			break;
		case 'general-checking__greeting-no':
			showBlock(generalCheckingGoodbyeMistake);
			break;
		case 'general-checking__greeting-yes':
			if(isRecall){
				showBlock(recallClarification);
			}
			if(isTimeTransfer){
				showBlock(timeTransferNewTime);
			}
			if(isFirstCall){
				showBlock(firstCallChecking);
			}
			break;

		// повторное обращение
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

		// перенос времени
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

		// первичное обращение - общее проверка бренда
		case 'first-call__checking-warranty':
			showBlock(firstCallCheckingBrand);
			isWarranty = true;
			break;
		case 'first-call__checking-paid':
			showBlock(firstCallCheckingBrand);
			isPaid = true;
			break;
		case 'first-call__checkingbrand-continue':
			console.log(isPaid);
			console.log(isWarranty);
			if (isPaid) {
				showBlock(firstCallPaidModel); 
			} 
			else if (isWarranty) {
				showBlock(firstCallWarrantyWhereBuy);
			}
			break;

		// первичное обращение - гарантийный ремонт - 
		// изделие приобретено не в ДНС/ 
		// изделие приобретено в ДНС (нет авторизации)/ 
		// проверка качества
		case 'first-call__warrantyDNS-no':
			showBlock(firstCallWarrantyNumber);
			break;
		case 'first-call__warrantyDNS-yes':
			showBlock(firstCallWarrantyDNSClient);
			break;

		// первичное обращение - гарантийный ремонт - 
		// покупали в ДНС
		case 'first-call__warrantyDNSClient-dexp':
			showBlock(warrantyBill);
			break;
		case 'first-call__warrantyDNSClient-notautor':		
			showBlock(firstCallWarrantyNumber);
			isDNSClient = true;
			isNotASC = true;
			break;
		case 'first-call__warrantyDNSClient-autor':
			showBlock(warrantyBill);
			isDNSClient = true;
			isASC = true;
			break;
		case 'first-call__warrantyDNSClient-qual':
			showBlock(firstCallWarrantyNumber);
			isDNSClient = true;
			isNotASC = true;
			break;
		
		// первичное обращение - гарантийный ремонт - 
		// покупали не в ДНС
		case 'first-call__warrantynumber-yes':
			showBlock(firstCallWarrantyNumberYes);
			break;
		case 'first-call__warrantynumber-no':
			if(isDNSClient) {
				showBlock(firstCallWarrantyNumberNoDNS);
			} else {
				showBlock(firstCallWarrantyNumberNoNotDNS);
			}
			break;
		case 'first-call__warrantynumberno-moreyear':
			showBlock(firstCallWarrantyNumberYes);
			break;
		case 'first-call__warrantynumberno-lessyear':
			showBlock(firstCallDeffect);
			break;
		case 'first-call__warrantynumbernoDNS-continue':
			showBlock(firstCallDeffect);
			break;

		// гарантийный ремонт - поиск чека
		case 'warranty__bill-have':
			showBlock(warrantyBillHave);
			break;
		case 'warranty__bill-havenot':
			showBlock(warrantyBillHaveNot);
			break;
		case 'warranty__bill-havedata':
			showBlock(warrantyBillHaveData);
			break;
		case 'warranty__bill-havenotdata':
			showBlock(warrantyBillHaveNotData);
			break;
		case 'warranty__billhavedata-product':
			showBlock(firstCallDeffect);
			break;
		case 'warranty__billhavedata-productnot':
			showBlock(warrantyBillWrongData);
			break;
		case 'warranty__billhavedata-searchinstruction':
			showBlock(warrantyBillInstruction);
			break;
		case 'warranty__billhave-product':
			showBlock(firstCallDeffect);
			break;
		case 'warranty__billhave-searchinstruction':
			showBlock(warrantyBillInstruction);
			break;
		case 'warranty__billinstruction-product':
			showBlock(firstCallDeffect);
			break;
		case 'warranty__billinstruction-productnot':
			showBlock(warrantyBillWrongData);
			break;

		// первичное обращение - платный ремонт 
		case 'first-call__paidmodel-continue':
			showBlock(firstCallDeffect);
			break;

		// первичное обращение - описание деффекта
		case 'first-call__deffect-continue':
			showBlock(firstCallFrequency);
			break;
		case 'first-call__frequency-continue':
			showBlock(firstCallLong);
			break;
		case 'first-call__long-continue':
			showBlock(firstCallConfirmation);
			break;
		case 'first-call__confirmation-yes':
			showBlock(ProblemDirectory);
			break;
		case 'first-call__confirmation-no':
			showBlock(firstCallAddQuestion);
			break;
		case 'first-call__addquestion-continue':
			showBlock(firstCallAfterAddQuestion);
			break;	
		case 'first-call__afteraddquestion-continue':
			showBlock(ProblemDirectory);
			break;

		// справочник неисправностей
		case 'problemdirectory-stovebut':
			showBlock(ProblemDirectoryStove);
			break;
		case 'problemdirectory-conditionbut':
			showBlock(ProblemDirectoryCondition);
			break;
		case 'problemdirectory-refrigeratorbut':
			showBlock(ProblemDirectoryRefrigerator);
			break;
		case 'problemdirectory-washerbut':
			showBlock(ProblemDirectoryWasher);
			break;
		case 'problemdirectory-ovenbut':
			showBlock(ProblemDirectoryOven);
			break;
		case 'problemdirectory-hoodbut':
			showBlock(ProblemDirectoryHood);
			break;
		case 'problemdirectory-dishwasherbut':
			showBlock(ProblemDirectoryDishwasher);
			break;
		case 'problemdirectory-gasbut':
			showBlock(ProblemDirectoryGas);
			break;

		// электрическая поверхность
		case 'problemdirectory__stove-firstvariantbut':
			showBlock(StoveFirstVariant);
			break;
		case 'problemdirectory__stove-secondvariantbut':
			showBlock(StoveSecondVariant);
			break;
		case 'problemdirectory__stove-thirdvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// электрическая поверхность - не включается
		case 'stove__firstvariant-yes':
			showBlock(StoveFirstVariantYes);
			break;
		case 'stove__firstvariant-no':
			showBlock(StoveFirstVariantNo);
			break;
		case 'stove__firstvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		case 'stove__firstvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// электрическая поверхность - пятна на стекле
		case 'stove__secondvariant-yes':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'stove__secondvariant-no':
			showBlock(StoveSecondVariantNo);
			break;
		case 'stove__secondvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;

		// кондиционер
		case 'problemdirectory__condition-firstvariantbut':
			showBlock(ConditionFirstVariant);
			break;
		case 'problemdirectory__condition-secondvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// кондиционер - капает вода из корпуса
		case 'condition__firstvariant-first':
			showBlock(ConditionFirstVariantFirst);
			break;
		case 'condition__firstvariant-second':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'condition__firstvariantfirst-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;

		// холодильник
		case 'problemdirectory__refrigerator-firstvariantbut':
			showBlock(RefrigeratorFirstVariant);
			break;
		case 'problemdirectory__refrigerator-secondvariantbut':
			showBlock(RefrigeratorSecondVariant);
			break;
		case 'problemdirectory__refrigerator-thirdvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// холодильник - греются стенки
		case 'refrigerator__firstvariant-continue':
			showBlock(RefrigeratorResolve);
			break;
		// холодильник - небольшой слой инея
		case 'refrigerator__secondvariant-continue':
			showBlock(RefrigeratorResolve);
			break;
		// холодильник - завершение
		case 'refrigerator__resolve-yes':
			showBlock(ProblemDirectoryResolved);
			break;
		case 'refrigerator__resolve-no':
			showBlock(ProblemDirectoryNeedMaster);
			break;

		// стиральная машина
		case 'problemdirectory__washer-firstvariantbut':
			showBlock(WasherFirstVariant);
			break;
		case 'problemdirectory__washer-secondvariantbut':
			showBlock(WasherSecondVariant);
			break;
		case 'problemdirectory__washer-thirdvariantbut':
			showBlock(WasherThirdVariant);
			break;
		case 'problemdirectory__washer-fourthvariantbut':
			showBlock(WasherFourthVariant);
			break;
		case 'problemdirectory__washer-fifthvariantbut':
			showBlock(WasherFifthVariant);
			break;
		case 'problemdirectory__washer-sixthvariantbut':
			showBlock(WasherSixthVariant);
			break;
		case 'problemdirectory__washer-seventhvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// стиральная машина - течет/образуется много пены
		case 'washer__firstvariant-yes':
			showBlock(WasherFirstVariantYes);
			break;
		case 'washer__firstvariant-no':
			showBlock(WasherFirstVariantNo);
			break;
		case 'washer__firstvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		case 'washer__firstvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// стиральная машина - вода долго набирается/самослив/ошибка "нет воды"
		case 'washer__secondvariant-yes':
			showBlock(WasherSecondVariantYes);
			break;
		case 'washer__secondvariant-no':
			showBlock(WasherSecondVariantNo);
			break;
		case 'washer__secondvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		case 'washer__secondvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// стиральная машина - не включается стиральная машина
		case 'washer__thirdvariant-yes':
			showBlock(WasherThirdVariantYes);
			break;
		case 'washer__thirdvariant-no':
			showBlock(WasherThirdVariantNo);
			break;
		case 'washer__thirdvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		case 'washer__thirdvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// стиральная машина - не отжимает/не сливает воду
		case 'washer__fourthvariant-yes':
			showBlock(WasherFourthVariantYes);
			break;
		case 'washer__fourthvariant-no':
			showBlock(WasherFourthVariantNo);
			break;
		case 'washer__fourthvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		case 'washer__fourthvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// стиральная машина - ошибка H2O/ не заливает воду
		case 'washer__fivethvariant-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// стиральная машина - сильная вибрация
		case 'washer__sixthvariant-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;

		// духовой шкаф
		case 'problemdirectory__oven-firstvariantbut':
			showBlock(OvenFirstVariant);
			break;
		case 'problemdirectory__oven-secondvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// духовой шкаф - во время работы выключается аппарт
		case 'oven__firstvariant-yes':
			showBlock(OvenFirstVariantYes);
			break;
		case 'oven__firstvariant-no':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'oven__firstvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;

		// вытяжка
		case 'problemdirectory__hood-firstvariantbut':
			showBlock(HoodFirstVariant);
			break;
		case 'problemdirectory__hood-secondvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// вытяжка - плохая тяга
		case 'hood__firstvariant-yes':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'hood__firstvariant-no':
			showBlock(HoodFirstVariantNo);
			break;
		case 'hood__firstvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			if (isPaid) {
				isHood = true;
			}
			break;

		// посудомоечная машина
		case 'problemdirectory__dishwasher-firstvariantbut':
			showBlock(DishwasherFirstVariant);
			break;
		case 'problemdirectory__dishwasher-secondvariantbut':
			showBlock(DishwasherSecondVariant);
			break;
		case 'problemdirectory__dishwasher-thirdvariantbut':
			showBlock(DishwasherThirdVariant);
			break;
		case 'problemdirectory__dishwasher-fourthdvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// посудомоечная машина - не сливает воду/не моет посуду
		case 'dishwasher__firstvariant-yes':
			showBlock(DishwasherFirstVariantYes);
			break;
		case 'dishwasher__firstvariant-no':
			showBlock(DishwasherFirstVariantNo);
			break;
		case 'oven__firstvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		case 'dishwasher__firstvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// посудомоечная машина - не набирает воду
		case 'dishwasher__secondvariant-yes':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'dishwasher__secondvariant-no':
			showBlock(DishwasherSecondVariantNo);
			break;
		case 'dishwasher__secondvariantno-continue':
			showBlock(ProblemDirectoryAskResolve);
			break;
		// посудомоечная машина - не выбирает режим мойки
		case 'dishwasher__thirdvariant-yes':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'dishwasher__thirdvariant-no':
			showBlock(DishwasherThirdVariantNo);
			break;
		case 'dishwasher__thirdvariantno-continue':
			showBlock(DishwasherThirdVariantGoodBye);
			break;

		// газовая поверхность
		case 'problemdirectory__gas-firstvariantbut':
			showBlock(GasFirstVariant);
			break;
		case 'problemdirectory__gas-secondvariantbut':
			showBlock(GasSecondVariant);
			break;
		case 'problemdirectory__gas-thirdvariantbut':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		// газовая поверхность - проблема с подключением газового шланга
		case 'gas__firstvariant-continue':
			showBlock(ProblemDirectoryAskResolve);
			if (isPaid) {
				isPaidGas = true;
			}
			break;
		// газовая поверхность - во время работы выключается аппарт
		case 'gas__secondvariant-yes':
			showBlock(GasSecondVariantYes);
			break;
		case 'gas__secondvariant-no':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'gas__secondvariantyes-continue':
			showBlock(ProblemDirectoryAskResolve);
			if (isPaid) {
				isPaidGas = true;
			}
			break;

		// завершение регистрации
		case 'problemdirectory__askresolve-yes':
			showBlock(ProblemDirectoryResolved);
			break;
		case 'problemdirectory__askresolve-no':
			showBlock(ProblemDirectoryNeedMaster);
			break;
		case 'problemdirectory__needmaster-continue':
			if (isPaidHood){
				showBlock(ProblemDirectoryNotDNSNotResolved);
			}
			else if (isPaidGas) {
				showBlock(ProblemDirectoryASCNotResolved);
			} else if (isASC) {
				showBlock(ProblemDirectoryASCNotResolved);
			} else if (isNotASC) {
				showBlock(warrantyNotASCBill);
			}
			else {
				showBlock(ProblemDirectoryNotResolved);
			}
			break;

		// гарантийный ремонт - поиск чека
		case 'warrantynotASC__bill-have':
			showBlock(warrantyNotASCBillHave);
			break;
		case 'warrantynotASC__bill-havenot':
			showBlock(warrantyNotASCBillHaveNot);
			break;
		case 'warrantynotASC__bill-havedata':
			showBlock(warrantyNotASCBillHaveData);
			break;
		case 'warrantynotASC__bill-havenotdata':
			showBlock(warrantyNotASCBillHaveNotData);
			break;
		case 'warrantynotASC__billhavedata-product':
			showBlock(ProblemDirectoryNotResolved);
			break;
		case 'warrantynotASC__billhavedata-productnot':
			showBlock(warrantyNotASCBillWrongData);
			break;
		case 'warrantynotASC__billhavedata-searchinstruction':
			showBlock(warrantyNotASCBillInstruction);
			break;
		case 'warrantynotASC__billhave-product':
			showBlock(ProblemDirectoryNotResolved);
			break;
		case 'warrantynotASC__billhave-searchinstruction':
			showBlock(warrantyNotASCBillInstruction);
			break;

		// проблема решена по телефону
		case 'problemdirectory__resolved-yes':
			showBlock(ProblemDirectoryResolvedQuest);
			break;
		case 'problemdirectory__resolved-no':
			showBlock(ProblemDirectoryResolvedGoodBye);
			break;
		case 'problemdirectory__resolvedquest-continue':
			showBlock(ProblemDirectoryResolvedGoodBye);
			break;

		// проблема не решена, требуется выезд мастера
		case 'problemdirectory__notresolved-continue':
			showBlock(ProblemDirectoryNotResolvedTime);
			break;
		case 'problemdirectory__notresolvedtime-yes':
			showBlock(ProblemDirectoryNotResolvedGoodBye);
			break;
		case 'problemdirectory__notresolvedtime-no':
			showBlock(ProblemDirectoryNotResolvedNewTime);
			break;
		case 'problemdirectory__notresolvednewtime-continue':
			showBlock(ProblemDirectoryNotResolvedGoodBye);
			break;

		// не в ДНС - вызов мастера
		case 'problemdirectory__notDNSnotresolved-yes':
			showBlock(ProblemDirectoryNotDNSNotResolvedYes);
			break;
		case 'problemdirectory__notDNSnotresolved-no':
			showBlock(ProblemDirectoryNotDNSNotResolvedGoodBye);
			break;
		case 'problemdirectory__notDNSnotresolvedyes-continue':
			showBlock(ProblemDirectoryNotDNSNotResolvedGoodBye);
			break;

		// АСЦ - вызов мастера
		case 'problemdirectory__ASCnotresolved-yes':
			showBlock(ProblemDirectoryASCNotResolvedYes);
			break;
		case 'problemdirectory__ASCnotresolved-no':
			showBlock(ProblemDirectoryASCNotResolvedNo);
			break;
		case 'problemdirectory__ASCnotresolvedyes-continue':
			showBlock(ProblemDirectoryASCNotResolvedQuest);
			break;
		case 'problemdirectory__ASCnotresolvedno-continue':
			showBlock(ProblemDirectoryASCNotResolvedQuest);
			break;
		case 'problemdirectory__ASCnotresolvedquest-yes':
			showBlock(ProblemDirectoryASCNotResolvedQuest);
			break;
		case 'problemdirectory__ASCnotresolvedquest-no':
			showBlock(ProblemDirectoryASCNotResolvedGoodBye);
			break;
		case 'problemdirectory__ASCnotresolvedquestyes-continue':
			showBlock(ProblemDirectoryASCNotResolvedGoodBye);
			break;

		// кнопка домой
		case 'home':
			goStart();
			break;
	}
}

// метод для сокрытия блока
function hideBlock(block) {
	block.style.display = 'none';
}

// метод для отображения блока
function showBlock(block) {
	block.style.display = 'flex';
	javascript:window.scrollTo(0,document.body.scrollHeight)
}

// метод для отображения кнопки блока
function showButton(button) {
	button.style.display = 'inline-block';
	javascript:window.scrollTo(0,document.body.scrollHeight)
}

// метод для сброса странички до стартовых условий
function goStart() {
	let elements = document.querySelectorAll('.notgreeting');

	for (let elem of elements) {
		hideBlock(elem);
	}

	isRecall = false;
	isTimeTransfer = false;
	isFirstCall = false;
	isWarranty = false;
	isPaid = false;
	isPaidHood = false;
	isPaidGas = false;
	isDNSClient = false;
	isASC = false;
	isNotASC = false;
}