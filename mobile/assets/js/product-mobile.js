
const imgSlider = new Swiper('.imgSlider', {
    speed: 1000,
    // Navigation arrows
    pagination: {
        el: '.imgSliderPagination',
        clickable: true,
    },


});

let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {
    console.log(args);

}
document.querySelector('.submitComment').addEventListener('click', (event) => {
    //  let input1  = document.querySelector('.namee')
    event.preventDefault();
    let textar = document.querySelectorAll('.commentP input')
    let emptyFlag = false;
    textar.forEach(element => {
        if (element.value == "") {
            emptyFlag = true
        }
    });
    if (!emptyFlag) {

        let val = document.querySelector(".commentP textarea").value;
        let userName = document.querySelector(".commentP .userName").value;
        console.log("val", val);
        $bc.setSource('db.send', true)
        $bc.setSource('db.senduserName', userName)
        $bc.setSource('db.sendcomment', val)
        $bc.setSource('db.run', true)
        let sendbox = document.querySelector('.messageSend')
        let text = sendbox.querySelector('p')
        text.innerHTML = 'درخواست شما با موفقیت ثبت شد'
        commentP.reset()
        messageSend.style.display = "block"

        document.querySelector(".commentP").reset();
        setTimeout(() => {
            messageSend.style.display = "none"
        }, 3500)
    }
    else {
        let sendbox = document.querySelector('.messageSend')
        let text = sendbox.querySelector('p')
        text.innerHTML = 'فیلدهای الزامی را پر کنید'
        messageSend.style.display = "block"

        setTimeout(() => {
            messageSend.style.display = "none"
        }, 3500)

    }


})




const commentListSlider = new Swiper('.commentListSlider', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});
const relatedBlog = new Swiper('.relatedBlog', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});
const relatedProductSlider = new Swiper('.relatedProductSlider', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});
const relatedProjectSlider = new Swiper('.relatedProjectSlider', {

    slidesPerView: 1.2,
    spaceBetween: 20,
    // Navigation arrows


});






// let schemaId = document.querySelector(".schemaId")
// if (schemaId.innerHTML == 1226) {
//     const data = {
//         A: {
//             label: "فریم لس با چهارچوب",
//             steps: [
//                 {
//                     label: "پروفیل",
//                     options: ["پودری", "آنادایز"]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "لمینیت 5+5 با طلق شفاف",
//                         "لمینیت 5+5 با طلق رنگی",
//                         "لمینیت 5+5 با طلق رنگی ترنسپرنت",
//                         "شیشه 10 میل سکوریت سوپرکلیر",
//                         "شیشه 10 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 },
//                 {
//                     label: "لولا",
//                     options: [
//                         "طرح مرونی استیل",
//                         "طرح مرونی مشکی",
//                         "مرونی اصل",
//                         "لولا هاتیک"
//                     ]
//                 },
//                 {
//                     label: "دستگیره",
//                     options: [
//                         "فرودگاهی استیل",
//                         "فرودگاهی مشکی",
//                         "طرح هوپه",
//                         "طرح مرونی",
//                         "مرونی اصل"
//                     ]
//                 }
//             ]
//         },
//         B: {
//             label: "فریم لس بدون چهارچوب",
//             steps: [
//                 {
//                     label: "لولا",
//                     options: [
//                         "دوطرف بازشو افقی استیل",
//                         "دوطرف بازشو عمودی استیل",
//                         "دوطرف بازشو عمودی مشکی"
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "لمینیت 5+5 با طلق شفاف",
//                         "لمینیت 5+5 با طلق رنگی",
//                         "لمینیت 5+5 با طلق رنگی ترنسپرنت",
//                         "شیشه 10 میل سکوریت سوپرکلیر",
//                         "شیشه 10 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 },
//                 {
//                     label: "دستگیره",
//                     options: [
//                         "مکعبی 30 سانت استیل",
//                         "مکعبی 30 سانت مشکی",
//                         "استوانه 30 سانت استیل",
//                         "استوانه 30 سانت مشکی",
//                         "دستگیره تک سوراخ",
//                         "دستگیره کریستال"
//                     ]
//                 }
//             ]
//         },
//         C: {
//             label: "تک جداره فریم دار",
//             steps: [
//                 {
//                     label: "پروفیل",
//                     options: ["رنگ پودری", "رنگ آنادایز"]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا",
//                         "لمینیت 5+5 با طلق رنگی",
//                         "لمینیت 5+5 با طلق رنگی ترنسپرنت"
//                     ]
//                 },
//                 {
//                     label: "لولا",
//                     options: ["ترک", "اروپایی"]
//                 },
//                 {
//                     label: "دستگیره",
//                     options: ["ترک", "اروپایی"]
//                 }
//             ]
//         },
//         D: {
//             label: "دوجداره فریم دار",
//             steps: [
//                 {
//                     label: "پروفیل",
//                     options: ["پودری", "آنادایز"]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "دو لایه سفید چاپی 5 میل",
//                         "دو لایه مشکی چاپی 5 میل",
//                         "دو لایه رنگی چاپی 5 میل"
//                     ]
//                 },
//                 {
//                     label: "لولا",
//                     options: ["ترک", "اروپایی"]
//                 },
//                 {
//                     label: "دستگیره",
//                     options: ["ترک", "اروپایی"]
//                 }
//             ]
//         }
//     };

//     let currentSelections = {
//         category: null,
//         steps: {},
//         currentStepIndex: 0
//     };

//     function toggleOptions(header) {
//         const options = header.parentElement.querySelector('.select-options');
//         options.style.display = options.style.display === 'block' ? 'none' : 'block';
//     }

//     function handleSelection(element, category, isCategory = false) {
//         const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی

//         const stepContainer = element.closest('.step-container');
//         const stepLabelElement = stepContainer.querySelector('.step-label');
//         const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";

//         const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");


//         for (let i = 0; i < fieldSetForm.length - 1; i++) {
//             const fieldset = fieldSetForm[i];
//             const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");

//             dataQuestions.forEach((el, index) => {
//                 const questionTitleElement = el.querySelector("[data-bc-question-title]");

//                 if (questionTitleElement) {
//                     const questionTitle = normalizeText(questionTitleElement.textContent);

//                     console.log(`Comparing: "${stepLabel}" with "${questionTitle}"`);

//                     if (questionTitle.includes(stepLabel)) {
//                         el.querySelector("input").value = element.textContent
//                     } else {
//                         console.log(`❌ "${stepLabel}" در "${questionTitle}" پیدا نشد.`);
//                     }
//                 }
//             });
//         }

//         if (isCategory) {
//             // مرحله اول - انتخاب دسته اصلی
//             if (!data[category]) return;

//             currentSelections.category = category;
//             currentSelections.steps = {};
//             currentSelections.currentStepIndex = 0;
//             document.getElementById('dynamic-steps').innerHTML = '';
//             generateNextStep();
//             updateStepUI(stepContainer, element);
//         } else {
//             // مراحل داینامیک
//             if (!currentSelections.category || !data[currentSelections.category]) return;

//             const stepNumber = parseInt(stepContainer.dataset.step.split('-')[1]);
//             currentSelections.steps[stepNumber] = element.textContent;

//             if (currentSelections.currentStepIndex < data[currentSelections.category].steps.length - 1) {
//                 currentSelections.currentStepIndex++;
//                 generateNextStep();
//             }
//             // else {
//             //     showFinalResult();
//             // }
//             updateStepUI(stepContainer, element);
//         }
//     }

//     function generateNextStep() {
//         if (!currentSelections.category || !data[currentSelections.category]) return;

//         const container = document.getElementById('dynamic-steps');
//         const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];

//         if (!stepData) return;

//         const stepHTML = `
//             <div class="step-container" data-step="2-${currentSelections.currentStepIndex + 1}">
//                 <span class="step-label">${stepData.label}:</span>
//                 <div class="custom-select">
//                     <div class="select-header" onclick="toggleOptions(this)">
//                         <span>لطفا انتخاب کنید</span>
//                         <span>
//                         <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
// </svg>

//                         </span>
//                     </div>
//                     <div class="select-options">
//                         ${stepData.options.map(option => `
//                             <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
//                         `).join('')}
//                     </div>
//                 </div>
//             </div>
//         `;

//         container.insertAdjacentHTML('beforeend', stepHTML);
//     }

//     function updateStepUI(container, selectedElement) {
//         const headerText = container.querySelector('.select-header span:first-child');
//         headerText.textContent = selectedElement.textContent;

//         container.querySelectorAll('.option-item').forEach(item => {
//             item.classList.remove('selected');
//         });
//         selectedElement.classList.add('selected');
//         container.querySelector('.select-options').style.display = 'none';
//     }



// }
// else if (schemaId.innerHTML == 1248) {
//     const data = {
//         '1': {
//             label: "ترمال بریک",
//             steps: [
//                 {
//                     label: "نوع رنگ",
//                     options: ["پودری", "آنادایز"]
//                 },
//                 {
//                     label: "نوع بازشو",
//                     options: ["لولایی", "ثابت", "LIFT", "ریلی"]
//                 },
//                 {
//                     label: "نوع شیشه",
//                     options: [
//                         "دوجداره 6+6 سکوریت سوپرکلیر",
//                         "دوجداره 4+4 ساده سوپرکلیر"
//                     ]
//                 }
//             ]
//         },
//         '2': {
//             label: "نرمال",
//             steps: [
//                 {
//                     label: "نوع رنگ",
//                     options: ["پودری", "آنادایز"]
//                 },
//                 {
//                     label: "نوع بازشو",
//                     options: ["لولایی", "ثابت", "LIFT", "ریلی"]
//                 },
//                 {
//                     label: "نوع شیشه",
//                     options: [
//                         "دوجداره 6+6 سکوریت سوپرکلیر",
//                         "دوجداره 4+4 ساده سوپرکلیر"
//                     ]
//                 }
//             ]
//         }
//     };

//     let currentSelections = {
//         category: null,
//         steps: {},
//         currentStepIndex: 0
//     };

//     function toggleOptions(header) {
//         const options = header.parentElement.querySelector('.select-options');
//         options.style.display = options.style.display === 'block' ? 'none' : 'block';
//     }

//     function handleSelection(element, category, isCategory = false) {
//         const stepContainer = element.closest('.step-container');
//         const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی

//         const stepLabelElement = stepContainer.querySelector('.step-label');
//         const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";

//         const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");


//         for (let i = 0; i < fieldSetForm.length - 1; i++) {
//             const fieldset = fieldSetForm[i];
//             const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");

//             dataQuestions.forEach((el, index) => {
//                 const questionTitleElement = el.querySelector("[data-bc-question-title]");

//                 if (questionTitleElement) {
//                     const questionTitle = normalizeText(questionTitleElement.textContent);

//                     console.log(`Comparing: "${stepLabel}" with "${questionTitle}"`);

//                     if (questionTitle.includes(stepLabel)) {
//                         el.querySelector("input").value = element.textContent
//                     } else {
//                         console.log(`❌ "${stepLabel}" در "${questionTitle}" پیدا نشد.`);
//                     }
//                 }
//             });
//         }

//         if (isCategory) {
//             if (!data[category]) return;

//             currentSelections = {
//                 category: category,
//                 steps: {},
//                 currentStepIndex: 0
//             };

//             document.getElementById('dynamic-steps').innerHTML = '';
//             generateNextStep();
//             updateStepUI(stepContainer, element);
//         } else {
//             if (!currentSelections.category || !data[currentSelections.category]) return;

//             const stepNumber = currentSelections.currentStepIndex + 1;
//             currentSelections.steps[stepNumber] = element.textContent;

//             if (currentSelections.currentStepIndex < data[currentSelections.category].steps.length - 1) {
//                 currentSelections.currentStepIndex++;
//                 generateNextStep();
//             }
//             //  else {
//             //     showFinalResult();
//             // }
//             updateStepUI(stepContainer, element);
//         }
//     }

//     function generateNextStep() {
//         if (!currentSelections.category || !data[currentSelections.category]) return;

//         const container = document.getElementById('dynamic-steps');
//         const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];

//         if (!stepData) return;

//         const stepHTML = `
//             <div class="step-container" data-step="${currentSelections.currentStepIndex + 2}">
//                 <span class="step-label">${stepData.label}:</span>
//                 <div class="custom-select">
//                     <div class="select-header" onclick="toggleOptions(this)">
//                         <span>لطفا انتخاب کنید</span>
//                         <span>
//                         <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
// </svg>

// </span>
//                     </div>
//                     <div class="select-options">
//                         ${stepData.options.map(option => `
//                             <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
//                         `).join('')}
//                     </div>
//                 </div>
//             </div>
//         `;

//         container.insertAdjacentHTML('beforeend', stepHTML);
//     }

//     function updateStepUI(container, selectedElement) {
//         const headerText = container.querySelector('.select-header span:first-child');
//         headerText.textContent = selectedElement.textContent;

//         container.querySelectorAll('.option-item').forEach(item => {
//             item.classList.remove('selected');
//         });
//         selectedElement.classList.add('selected');
//         container.querySelector('.select-options').style.display = 'none';
//     }


// }

// else if (schemaId.innerHTML == 1576) {
//     const data = {
//         A: {
//             label: "نوع فریم پارتیشن",
//             options: {
//                 "1": { label: "تک جداره COLCOM", children: ["آنادایز", "پودری"] },
//                 "2": { label: "تک جداره دوجزیی", children: ["آنادایز", "پودری"] },
//                 "3": { label: "دوجداره COLCOM", children: ["آنادایز", "پودری"] }
//             }
//         },
//         B: {
//             label: "نوع شیشه",
//             options: [
//                 "سکوریت 10 میل سوپرکلیر",
//                 "سکوریت 10 میل MQ",
//                 "سکوریت 8 میل سوپرکلیر",
//                 "سکوریت 8 میل MQ"
//             ]
//         }
//     };

//     let currentSelections = {
//         step1: null,
//         step2: null,
//         step3: null
//     };

//     function toggleOptions(header) {
//         const options = header.parentElement.querySelector('.select-options');
//         options.style.display = options.style.display === 'block' ? 'none' : 'block';
//     }

//     function handleSelection(element, value) {
//         const stepNumber = parseInt(stepContainer.dataset.step);
//         const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی

//         const stepContainer = element.closest('.step-container');
//         const stepLabelElement = stepContainer.querySelector('.step-label');
//         const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";

//         const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");


//         for (let i = 0; i < fieldSetForm.length - 1; i++) {
//             const fieldset = fieldSetForm[i];
//             const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");

//             dataQuestions.forEach((el, index) => {
//                 const questionTitleElement = el.querySelector("[data-bc-question-title]");

//                 if (questionTitleElement) {
//                     const questionTitle = normalizeText(questionTitleElement.textContent);

//                     console.log(`Comparing: "${stepLabel}" with "${questionTitle}"`);

//                     if (questionTitle.includes(stepLabel)) {
//                         el.querySelector("input").value = element.textContent
//                     } else {
//                         console.log(`❌ "${stepLabel}" در "${questionTitle}" پیدا نشد.`);
//                     }
//                 }
//             });
//         }

//         // Update selections
//         currentSelections[`step${stepNumber}`] = value;

//         // Update UI
//         updateStepUI(stepContainer, element);
//         clearNextSteps(stepNumber);

//         // Handle next steps
//         if (stepNumber === 1) {
//             generateNextStep(stepNumber + 1, value);
//         } else if (stepNumber === 2 && value in data.A.options) {
//             generateNextStep(stepNumber + 1, value);
//         }
//         // else {
//         //     showFinalResult();
//         // }
//     }

//     function updateStepUI(container, selectedElement) {
//         // Update header text
//         const headerText = container.querySelector('.select-header span:first-child');
//         headerText.textContent = selectedElement.textContent;

//         // Remove previous selections
//         container.querySelectorAll('.option-item').forEach(item => {
//             item.classList.remove('selected');
//         });

//         // Add selection style
//         selectedElement.classList.add('selected');

//         // Close dropdown
//         container.querySelector('.select-options').style.display = 'none';
//     }

//     function clearNextSteps(currentStep) {
//         // Clear all subsequent steps
//         for (let step = currentStep + 1; step <= 3; step++) {
//             const stepContainer = document.querySelector(`[data-step="${step}"]`);
//             if (stepContainer) {
//                 stepContainer.classList.add('hidden');
//                 stepContainer.innerHTML = '';
//                 currentSelections[`step${step}`] = null;
//             }
//         }
//         // document.getElementById('result').classList.add('hidden');
//     }

//     function generateNextStep(nextStep, value) {
//         const stepContainer = document.querySelector(`[data-step="${nextStep}"]`);

//         let optionsHTML = '';
//         let label = '';

//         if (nextStep === 2) {
//             label = data[currentSelections.step1].label;
//             if (currentSelections.step1 === 'A') {
//                 optionsHTML = Object.values(data.A.options).map((item, index) => `
//                     <div class="option-item" 
//                          data-value="${index + 1}" 
//                          onclick="handleSelection(this, '${index + 1}')">
//                         ${item.label}
//                     </div>
//                 `).join('');
//             } else {
//                 optionsHTML = data.B.options.map(item => `
//                     <div class="option-item" onclick="handleSelection(this, '${item}')">${item}</div>
//                 `).join('');
//             }
//         } else if (nextStep === 3) {
//             label = "نوع پوشش";
//             optionsHTML = data.A.options[value].children.map(item => `
//                 <div class="option-item" onclick="handleSelection(this, '${item}')">${item}</div>
//             `).join('');
//         }

//         stepContainer.innerHTML = `
//             <span class="step-label">${label}:</span>
//             <div class="custom-select">
//                 <div class="select-header" onclick="toggleOptions(this)">
//                     <span>لطفا انتخاب کنید</span>
//                     <span>
//                     <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
// </svg>
//                     </span>
//                 </div>
//                 <div class="select-options">
//                     ${optionsHTML}
//                 </div>
//             </div>
//         `;

//         stepContainer.classList.remove('hidden');
//     }

// }
// else if (schemaId.innerHTML == 3487) {
//     const data = {
//         A: {
//             label: "دیوایدر",
//             steps: [
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 },
//                 {
//                     label: "یراق",
//                     options: [
//                         "بست گونیا استیل",
//                         "بست گونیا رنگی",
//                         "پروفیل 2 سانت استیل",
//                         "پروفیل 3 سانت آلومینیوم"
//                     ]
//                 }
//             ]
//         },
//         B: {
//             label: "خطی لولایی",
//             steps: [
//                 {
//                     label: "یراق",
//                     subSteps: [
//                         {
//                             label: "بست گونیا",
//                             options: ["استیل", "رنگی"]
//                         },
//                         {
//                             label: "لولا",
//                             options: [
//                                 "عمودی استیل",
//                                 "عمودی رنگی",
//                                 "افقی استیل",
//                                 "افقی رنگی"
//                             ]
//                         },
//                         {
//                             label: "دستگیره",
//                             options: [
//                                 "تک سوراخ استیل",
//                                 "تک سوراخ رنگی",
//                                 "30 سانت استیل",
//                                 "30 سانت رنگی"
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 }
//             ]
//         },
//         C: {
//             label: "ریلی خطی",
//             steps: [
//                 {
//                     label: "بست نگهدارنده",
//                     options: [
//                         "بست گونیا استیل",
//                         "بست گونیا مشکی",
//                         "پروفیل 20 سانت استیل",
//                         "پروفیل 3 سانت آلومینیوم رنگی"
//                     ]
//                 },
//                 {
//                     label: "یراق",
//                     options: [
//                         "ست ریلی A02 استیل",
//                         "ست ریلی A02 مشکی",
//                         "ست ریلی A02 طلایی",
//                         "ست ریلی A010 استیل",
//                         "ست ریلی A010 مشکی",
//                         "ست ریلی A010 طلایی"
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 }
//             ]
//         },
//         D: {
//             label: "نود درجه ریلی",
//             steps: [
//                 {
//                     label: "بست نگهدارنده",
//                     options: [
//                         "بست گونیا استیل",
//                         "بست گونیا مشکی",
//                         "پروفیل 20 سانت استیل",
//                         "پروفیل 3 سانت آلومینیوم رنگی"
//                     ]
//                 },
//                 {
//                     label: "یراق",
//                     options: [
//                         "ست ریلی A02 استیل",
//                         "ست ریلی A02 مشکی",
//                         "ست ریلی A02 طلایی",
//                         "ست ریلی A010 استیل",
//                         "ست ریلی A010 مشکی",
//                         "ست ریلی A010 طلایی"
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 }
//             ]
//         },
//         E: {
//             label: "نود درجه لولایی",
//             steps: [
//                 {
//                     label: "بست نگهدارنده",
//                     options: [
//                         "بست گونیا استیل",
//                         "بست گونیا مشکی",
//                         "پروفیل 20 سانت استیل",
//                         "پروفیل 3 سانت آلومینیوم رنگی"
//                     ]
//                 },
//                 {
//                     label: "لولا",
//                     options: [
//                         "عمودی استیل",
//                         "عمودی مشکی",
//                         "افقی استیل",
//                         "افقی مشکی"
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 }
//             ]
//         },
//         F: {
//             label: "ریلی خطی دو طرف ثابت",
//             steps: [
//                 {
//                     label: "بست نگهدارنده",
//                     options: [
//                         "بست گونیا استیل",
//                         "بست گونیا مشکی",
//                         "پروفیل 20 سانت استیل",
//                         "پروفیل 3 سانت آلومینیوم رنگی"
//                     ]
//                 },
//                 {
//                     label: "یراق",
//                     options: [
//                         "ست ریلی A02 استیل",
//                         "ست ریلی A02 مشکی",
//                         "ست ریلی A02 طلایی",
//                         "ست ریلی A010 استیل",
//                         "ست ریلی A010 مشکی",
//                         "ست ریلی A010 طلایی"
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 }
//             ]
//         },
//         G: {
//             label: "لولایی خطی دو طرف ثابت",
//             steps: [
//                 {
//                     label: "بست نگهدارنده",
//                     options: [
//                         "بست گونیا استیل",
//                         "بست گونیا مشکی",
//                         "پروفیل 20 سانت استیل",
//                         "پروفیل 3 سانت آلومینیوم رنگی"
//                     ]
//                 },
//                 {
//                     label: "یراق",
//                     options: [
//                         "ست ریلی A02 استیل",
//                         "ست ریلی A02 مشکی",
//                         "ست ریلی A02 طلایی",
//                         "ست ریلی A010 استیل",
//                         "ست ریلی A010 مشکی",
//                         "ست ریلی A010 طلایی"
//                     ]
//                 },
//                 {
//                     label: "شیشه",
//                     options: [
//                         "شیشه 8 میل سکوریت سوپرکلیر",
//                         "شیشه 8 میل سکوریت MQ",
//                         "شیشه 8 میل سکوریت ساتینا"
//                     ]
//                 }
//             ]
//         }
//     };

//     let currentSelections = {
//         category: null,
//         steps: {},
//         currentStepIndex: 0,
//         subStepIndex: 0
//     };

//     function toggleOptions(header) {
//         const options = header.parentElement.querySelector('.select-options');
//         options.style.display = options.style.display === 'block' ? 'none' : 'block';
//     }

//     function handleSelection(element, value, isCategory = false) {
//         const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی

//         const stepContainer = element.closest('.step-container');
//         const stepLabelElement = stepContainer.querySelector('.step-label');
//         const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";

//         const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");


//         for (let i = 0; i < fieldSetForm.length - 1; i++) {
//             const fieldset = fieldSetForm[i];
//             const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");

//             dataQuestions.forEach((el, index) => {
//                 const questionTitleElement = el.querySelector("[data-bc-question-title]");

//                 if (questionTitleElement) {
//                     const questionTitle = normalizeText(questionTitleElement.textContent);

//                     console.log(`Comparing: "${stepLabel}" with "${questionTitle}"`);

//                     if (questionTitle.includes(stepLabel)) {
//                         el.querySelector("input").value = element.textContent
//                     } else {
//                         console.log(`❌ "${stepLabel}" در "${questionTitle}" پیدا نشد.`);
//                     }
//                 }
//             });
//         }

//         if (isCategory) {
//             if (!data[value]) return;

//             currentSelections = {
//                 category: value,
//                 steps: {},
//                 currentStepIndex: 0,
//                 subStepIndex: 0
//             };

//             document.getElementById('dynamic-steps').innerHTML = '';
//             generateNextStep();
//             updateStepUI(stepContainer, element);
//         } else {
//             if (!currentSelections.category || !data[currentSelections.category]) return;

//             const currentStep = data[currentSelections.category].steps[currentSelections.currentStepIndex];

//             if (currentStep.subSteps) {
//                 const stepKey = `${currentSelections.currentStepIndex + 1}-${currentSelections.subStepIndex + 1}`;
//                 currentSelections.steps[stepKey] = element.textContent;

//                 if (currentSelections.subStepIndex < currentStep.subSteps.length - 1) {
//                     currentSelections.subStepIndex++;
//                     generateNextSubStep();
//                 } else {
//                     currentSelections.currentStepIndex++;
//                     currentSelections.subStepIndex = 0;
//                     generateNextStep();
//                 }
//             } else {
//                 const stepKey = currentSelections.currentStepIndex + 1;
//                 currentSelections.steps[stepKey] = element.textContent;

//                 if (currentSelections.currentStepIndex < data[currentSelections.category].steps.length - 1) {
//                     currentSelections.currentStepIndex++;
//                     generateNextStep();
//                 }
//                 // else {
//                 //     showFinalResult();
//                 // }
//             }

//             updateStepUI(stepContainer, element);
//         }
//     }

//     function generateNextStep() {
//         if (!currentSelections.category || !data[currentSelections.category]) return;

//         const container = document.getElementById('dynamic-steps');
//         const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];

//         if (!stepData) return;

//         let stepHTML = '';

//         if (stepData.subSteps) {
//             stepHTML = generateSubStep(stepData.subSteps[0]);
//         } else {
//             stepHTML = `
//                 <div class="step-container" data-step="${currentSelections.currentStepIndex + 2}">
//                     <span class="step-label">${stepData.label}:</span>
//                     <div class="custom-select">
//                         <div class="select-header" onclick="toggleOptions(this)">
//                             <span>لطفا انتخاب کنید</span>
//                             <span>
//                             <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
// </svg>

//                             </span>
//                         </div>
//                         <div class="select-options">
//                             ${stepData.options.map(option => `
//                                 <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
//                             `).join('')}
//                         </div>
//                     </div>
//                 </div>
//             `;
//         }

//         container.insertAdjacentHTML('beforeend', stepHTML);
//     }

//     function generateNextSubStep() {
//         const container = document.getElementById('dynamic-steps');
//         const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];
//         const subStepData = stepData.subSteps[currentSelections.subStepIndex];

//         const stepHTML = generateSubStep(subStepData);
//         container.insertAdjacentHTML('beforeend', stepHTML);
//     }

//     function generateSubStep(subStepData) {
//         return `
//             <div class="step-container" data-step="${currentSelections.currentStepIndex + 2}-${currentSelections.subStepIndex + 1}">
//                 <span class="step-label">${subStepData.label}:</span>
//                 <div class="custom-select">
//                     <div class="select-header" onclick="toggleOptions(this)">
//                         <span>لطفا انتخاب کنید</span>
//                         <span>
//                         <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
// </svg>
//                         </span>
//                     </div>
//                     <div class="select-options">
//                         ${subStepData.options.map(option => `
//                             <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
//                         `).join('')}
//                     </div>
//                 </div>
//             </div>
//         `;
//     }

//     function updateStepUI(container, selectedElement) {
//         const headerText = container.querySelector('.select-header span:first-child');
//         headerText.textContent = selectedElement.textContent;

//         container.querySelectorAll('.option-item').forEach(item => {
//             item.classList.remove('selected');
//         });
//         selectedElement.classList.add('selected');
//         container.querySelector('.select-options').style.display = 'none';
//     }

// }
// else if (schemaId.innerHTML == 1287) {
//     const thermalData = {
//         insulation: {
//             label: "عایق حرارتی",
//             options: [
//                 "جلوگیری از اتلاف انرژی در فصول سرد و گرم",
//                 "ضریب انتقال حرارت 0.8 W/m²K",
//                 "مطابق با استانداردهای بین‌المللی"
//             ]
//         },
//         soundproof: {
//             label: "عایق صوتی",
//             options: [
//                 "کاهش انتقال صدا تا 45 دسیبل",
//                 "مناسب برای محیط‌های پرترافیک",
//                 "ساختار چندلایه عایق"
//             ]
//         },
//         durability: {
//             label: "مقاومت بالا",
//             options: [
//                 "مقاوم در برابر زنگ‌زدگی و خوردگی",
//                 "تحمل فشار تا 1500 کیلوگرم",
//                 "گارانتی 20 ساله"
//             ]
//         },
//         coating: {
//             label: "پوشش سطحی",
//             options: [
//                 "پودری با 50 رنگ انتخابی",
//                 "آنادایز با سطح متالیک",
//                 "هیبرید (ترکیب پودری و آنادایز)"
//             ]
//         },
//         glass: {
//             label: "سازگاری با شیشه",
//             options: [
//                 "شیشه دوجداره 6+6 میلیمتر",
//                 "شیشه لمینت 5+5 میلیمتر",
//                 "شیشه سکوریت 8 میلیمتر"
//             ]
//         }
//     };

//     let currentSelections = {
//         selectedFeatures: {},
//         currentStep: 0
//     };

//     function toggleOptions(header) {
//         const options = header.parentElement.querySelector('.select-options');
//         options.style.display = options.style.display === 'block' ? 'none' : 'block';
//     }

//     function handleSelection(element, featureType) {
//         const featureData = thermalData[featureType];
//         const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی

//         const stepContainer = element.closest('.step-container');
//         const stepLabelElement = stepContainer.querySelector('.step-label');
//         const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";

//         const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");


//         for (let i = 0; i < fieldSetForm.length - 1; i++) {
//             const fieldset = fieldSetForm[i];
//             const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");

//             dataQuestions.forEach((el, index) => {
//                 const questionTitleElement = el.querySelector("[data-bc-question-title]");

//                 if (questionTitleElement) {
//                     const questionTitle = normalizeText(questionTitleElement.textContent);

//                     console.log(`Comparing: "${stepLabel}" with "${questionTitle}"`);

//                     if (questionTitle.includes(stepLabel)) {
//                         el.querySelector("input").value = element.textContent
//                     } else {
//                         console.log(`❌ "${stepLabel}" در "${questionTitle}" پیدا نشد.`);
//                     }
//                 }
//             });
//         }

//         // ذخیره انتخاب کاربر
//         currentSelections.selectedFeatures[featureType] = {
//             label: featureData.label,
//             value: element.textContent.trim()
//         };

//         // آپدیت UI
//         updateStepUI(stepContainer, element);
//         showNextOptions();
//     }

//     function updateStepUI(container, selectedElement) {
//         const headerText = container.querySelector('.select-header span:first-child');
//         headerText.textContent = selectedElement.textContent;

//         container.querySelectorAll('.option-item').forEach(item => {
//             item.classList.remove('selected');
//         });
//         selectedElement.classList.add('selected');
//         container.querySelector('.select-options').style.display = 'none';
//     }

//     function showNextOptions() {
//         const container = document.getElementById('dynamic-steps');
//         const remainingFeatures = Object.keys(thermalData).filter(f =>
//             !Object.keys(currentSelections.selectedFeatures).includes(f)
//         );

//         if (remainingFeatures.length > 0) {
//             const nextFeature = remainingFeatures[0];
//             const featureData = thermalData[nextFeature];

//             const stepHTML = `
//                 <div class="step-container" data-step="${currentSelections.currentStep + 2}">
//                     <span class="step-label">${featureData.label}:</span>
//                     <div class="custom-select">
//                         <div class="select-header" onclick="toggleOptions(this)">
//                             <span>لطفا انتخاب کنید</span>
//                             <span>▼</span>
//                         </div>
//                         <div class="select-options">
//                             ${featureData.options.map(option => `
//                                 <div class="option-item" onclick="handleSelection(this, '${nextFeature}')">${option}</div>
//                             `).join('')}
//                         </div>
//                     </div>
//                 </div>
//             `;

//             container.innerHTML += stepHTML;
//             currentSelections.currentStep++;
//         } else {
//             showFinalResult();
//         }
//     }

//     function showFinalResult() {
//         const resultDiv = document.getElementById('result');
//         let html = `<h3>ویژگی‌های انتخاب شده:</h3>`;

//         Object.values(currentSelections.selectedFeatures).forEach(feature => {
//             html += `<p><strong>${feature.label}:</strong> ${feature.value}</p>`;
//         });

//         html += `
//             <h4>کاربردهای پیشنهادی:</h4>
//             <ul>
//                 <li>ساختمان‌های مدرن</li>
//                 <li>پنجره‌های دوجداره</li>
//                 <li>پروژه‌های کم‌مصرف انرژی</li>
//                 <li>مناطق با شرایط جوی خاص</li>
//             </ul>
//         `;

//         resultDiv.innerHTML = html;
//         resultDiv.classList.remove('hidden');
//     }


// }
// if (schemaId.innerHTML == 1226 || schemaId.innerHTML == 1248 || schemaId.innerHTML == 1576 || schemaId.innerHTML == 3487 || schemaId.innerHTML == 1287) {
//     let openProductFormBtn2 = document.querySelector(".openProductFormBtn2");
//     let popProduct = document.querySelector(".popProduct");
//     let closePopProductForm = document.querySelector(".closePopProductForm");

//     openProductFormBtn2.addEventListener("click", function (params) {
//         popProduct.classList.add("activePopProduct");
//     });
//     closePopProductForm.addEventListener("click", function (params) {
//         popProduct.classList.remove("activePopProduct");
//     });


//     let captchaInput1;
//     let captchaContainerclass1;

//     let loaderContainer2 = document.querySelector(".loaderContainer2");
//     let formBtn2 = document.querySelector(".formBtn2");
//     let loaderForm2 = document.querySelector(".loaderForm2");
//     formBtn2.addEventListener("click", function (params) {
//         // formBtn2.querySelector("span").style.display = "none";
//         loaderForm2.style.display = "block";
//         console.log(captchaInput1.value);
//         let allertData = document.querySelectorAll("[data-bc-validation-part]")
//         allertData.forEach(element => {
//             let prevInput = element.previousElementSibling
//             if (prevInput.value == "") {
//                 // یک نمونه جدید از allertDiv می‌سازیم
//                 let allertDivTemplate = document.querySelector(".allertDiv");

//                 if (allertDivTemplate) {
//                     let allertDivClone = allertDivTemplate.cloneNode(true); // کل عنصر را کپی می‌کنیم
//                     allertDivClone.classList.remove("hidden"); // کلاس hidden را حذف می‌کنیم

//                     // بررسی می‌کنیم که از قبل در این والد وجود نداشته باشد
//                     if (!element.parentElement.querySelector(".allertDiv")) {
//                         prevInput.classList.add("allertBgInput")
//                         element.parentElement.classList.add("relative"); // کلاس لازم را اضافه می‌کنیم
//                         element.parentElement.insertAdjacentElement("afterbegin", allertDivClone);
//                     }
//                 }
//             }
//             setTimeout(() => {
//                 let existingAllertDiv = element.parentElement.querySelector(".allertDiv");

//                 if (existingAllertDiv) {
//                     existingAllertDiv.remove();
//                 }
//                 prevInput.classList.remove("allertBgInput")

//             }, 5000);
//         });
//         if (captchaInput1.value == "") {
//             captchaContainerclass1.style.background = "#FFE1E1";
//             captchaInput1.setAttribute("placeholder", "لطفا عبارت امنیتی را وارد کنید");
//             captchaInput1.classList.add("errorPlaceholder");
//             setTimeout(() => {
//                 captchaContainerclass1.style.background = "#FFFFFF";
//                 captchaInput1.classList.remove("errorPlaceholder");

//                 formBtn2.querySelector("span").style.display = "block";
//                 loaderForm2.style.display = "none";
//             }, 3000);
//         }
//     });
//     function onSource11(args) {
//         console.log("onSource");
//         const captcha = document.querySelector(
//             ".homeForm2 #requestBox input[name='captcha']"
//         ).value;
//         const captchaid = document.querySelector(
//             ".homeForm2 #requestBox input[name='captchaid']"
//         ).value;
//         const stringJson = JSON.stringify(args.source?.rows[0]);
//         console.log("stringJson", stringJson);
//         $bc.setSource("edit.object12", {
//             value: stringJson,
//             captcha: captcha,
//             captchaid: captchaid,
//         });
//     }
//     let responsMsg1 = document.querySelector(".responsMsg11");
//     let responsMsg1In = document.querySelector(".responsMsg11 span");
//     async function OnProcessedEditObject11(args) {
//         console.log("OnProcessedEditObject11");
//         const response = args.response;
//         const json = await response.json();
//         console.log(json);

//         if (json.errorid == 6) {
//             console.log(json);
//             responsMsg1.style.display = "block";
//             responsMsg1In.innerHTML = "درخواست شما با موفقیت ثبت گردید";
//             responsMsg1In.style.color = "#1A6902";
//             document.querySelector(".homeForm2").reset();
//             let questions = document.querySelectorAll(
//                 ".homeForm2 div[data-bc-question]"
//             );
//             setTimeout(() => {
//                 responsMsg1.style.display = "none";

//                 loaderForm2.style.display = "none";
//             }, 2000);
//         }
//         if (json.errorid == 4) {
//             console.log(json);

//             responsMsg1In.innerHTML = "مشکلی پیش آمده، لطفا مجدد تلاش فرمایید.";

//             responsMsg1.style.display = "block";
//             responsMsg1In.style.color = "#FF2727";
//             document.querySelector("form").reset();

//             setTimeout(() => {
//                 loaderForm2.style.display = "none";
//                 responsMsg1.style.display = "block";
//             }, 2000);
//         }
//         if (json.errorid == 15 && captchaInput1.value != "") {
//             console.log(json);

//             responsMsg1In.innerHTML = "لطفا کپچا را به درستی وارد کنید.";

//             setTimeout(() => {
//                 loaderForm2.style.display = "none";
//                 responsMsg1.style.display = "block";
//             }, 2000);
//         }
//     }

//     function renderFn11(params) {

//         let questionTitle = document.querySelectorAll("[data-bc-question-title]")
//         questionTitle.forEach(element => {
//             if (element.innerHTML == "توضیحات") {
//                 element.style.display = "none"
//             }
//         });
//         document.querySelector(".qclass81").style.display = "flex";
//         captchaInput1 = document.querySelector(".captchaContainerclass1 .codeinputm");
//         captchaContainerclass1 = document.querySelector(".captchaContainerclass1");
//         loaderContainer2.style.display = "none";
//         console.log(loaderContainer2, 'loaderContainer2');
//         let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
//         questions.forEach((element) => {
//             element.classList.add("afterStar");

//             let title = element.querySelector(".homeForm2 [data-bc-question-title]");
//             let qInput = element.querySelector(".homeForm2 input");
//             let qTxtArea = element.querySelector(".homeForm2 textarea");
//             let productTitle = document.querySelector(".productTitle")
//             let titleElement = title ? title.innerHTML.trim() : "";

//             if (title) {
//                 title = element.querySelector(
//                     ".homeForm2 [data-bc-question-title]"
//                 ).innerHTML;
//                 if (qInput) {
//                     qInput.setAttribute("placeholder", title);
//                     qInput.setAttribute("aria-label", title);
//                 } else if (qTxtArea) {
//                     qTxtArea.setAttribute("placeholder", title);
//                     qTxtArea.setAttribute("aria-label", title);
//                 }
//             }
//             if (title == "نام محصول") {
//                 qInput.value = productTitle?.innerHTML
//             }

//             if (titleElement && (titleElement.includes("نام خانوادگی") || titleElement.includes("تلفن") || titleElement.includes("توضیحات") || titleElement.includes("عبارت"))) {
//                 console.log("عنوان شامل یکی از موارد مشخص شده است!");
//             } else {
//                 if (qInput) {
//                     qInput.setAttribute("disabled", "disabled");
//                 }
//             }
//         });
//     }

//     function renderEditobject1(params) {
//         loaderContainer2.style.display = "none";
//     }
// }


let schemaId = document.querySelector(".schemaId")
//
if (schemaId.innerHTML == 1226) {
    const data = {
        A: {
            label: "فریم لس با چهارچوب",
            steps: [
                {
                    label: "پروفیل",
                    options: ["پودری", "آنادایز"]
                },
                {
                    label: "شیشه",
                    options: [
                        "لمینیت 5+5 با طلق شفاف",
                        "لمینیت 5+5 با طلق رنگی",
                        "لمینیت 5+5 با طلق رنگی ترنسپرنت",
                        "شیشه 10 میل سکوریت سوپرکلیر",
                        "شیشه 10 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                },
                {
                    label: "لولا",
                    options: [
                        "طرح مرونی استیل",
                        "طرح مرونی مشکی",
                        "مرونی اصل",
                        "لولا هاتیک"
                    ]
                },
                {
                    label: "دستگیره",
                    options: [
                        "فرودگاهی استیل",
                        "فرودگاهی مشکی",
                        "طرح هوپه",
                        "طرح مرونی",
                        "مرونی اصل"
                    ]
                }
            ]
        },
        B: {
            label: "فریم لس بدون چهارچوب",
            steps: [
                {
                    label: "لولا",
                    options: [
                        "دوطرف بازشو افقی استیل",
                        "دوطرف بازشو عمودی استیل",
                        "دوطرف بازشو عمودی مشکی"
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "لمینیت 5+5 با طلق شفاف",
                        "لمینیت 5+5 با طلق رنگی",
                        "لمینیت 5+5 با طلق رنگی ترنسپرنت",
                        "شیشه 10 میل سکوریت سوپرکلیر",
                        "شیشه 10 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                },
                {
                    label: "دستگیره",
                    options: [
                        "مکعبی 30 سانت استیل",
                        "مکعبی 30 سانت مشکی",
                        "استوانه 30 سانت استیل",
                        "استوانه 30 سانت مشکی",
                        "دستگیره تک سوراخ",
                        "دستگیره کریستال"
                    ]
                }
            ]
        },
        C: {
            label: "تک جداره فریم دار",
            steps: [
                {
                    label: "پروفیل",
                    options: ["رنگ پودری", "رنگ آنادایز"]
                },
                {
                    label: "شیشه",
                    options: [
                        "8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا",
                        "لمینیت 5+5 با طلق رنگی",
                        "لمینیت 5+5 با طلق رنگی ترنسپرنت"
                    ]
                },
                {
                    label: "لولا",
                    options: ["ترک", "اروپایی"]
                },
                {
                    label: "دستگیره",
                    options: ["ترک", "اروپایی"]
                }
            ]
        },
        D: {
            label: "دوجداره فریم دار",
            steps: [
                {
                    label: "پروفیل",
                    options: ["پودری", "آنادایز"]
                },
                {
                    label: "شیشه",
                    options: [
                        "دو لایه سفید چاپی 5 میل",
                        "دو لایه مشکی چاپی 5 میل",
                        "دو لایه رنگی چاپی 5 میل"
                    ]
                },
                {
                    label: "لولا",
                    options: ["ترک", "اروپایی"]
                },
                {
                    label: "دستگیره",
                    options: ["ترک", "اروپایی"]
                }
            ]
        }
    };
    
    let currentSelections = {
        category: null,
        steps: {},
        currentStepIndex: 0
    };
    let selectionsArray = []; // آرایه برای ذخیره‌سازی انتخاب‌ها

    function toggleOptions(header) {
        const options = header.parentElement.querySelector('.select-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }

 function handleSelection(element, category, isCategory = false) {
    const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی

    const stepContainer = element.closest('.step-container');
    const stepLabelElement = stepContainer.querySelector('.step-label'); 
    const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";
    
    const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");

    if (isCategory) {
        if (!data[category]) return;

        currentSelections = {
            category: category,
            steps: {},
            currentStepIndex: 0
        };

        selectionsArray = []; // پاک کردن آرایه انتخاب‌ها هنگام تغییر دسته‌بندی
        // ذخیره‌سازی مرحله اول (دسته‌بندی)
        selectionsArray.push({
            step: 0,
            label: "نوع درب",
            value: data[category].label
        });

        document.getElementById('dynamic-steps').innerHTML = '';
        generateNextStep();
        updateStepUI(stepContainer, element);
    } else {
        if (!currentSelections.category || !data[currentSelections.category]) return;

        const stepNumber = currentSelections.currentStepIndex + 1;
        currentSelections.steps[stepNumber] = element.textContent;

        // ذخیره‌سازی انتخاب در آرایه
        selectionsArray.push({
            step: stepNumber,
            label: stepLabel,
            value: element.textContent
        });

        if (currentSelections.currentStepIndex < data[currentSelections.category].steps.length - 1) {
            currentSelections.currentStepIndex++;
            generateNextStep();
        }
        updateStepUI(stepContainer, element);
    }

    fieldSetForm.forEach(fieldset => {
        const inputs = fieldset.querySelectorAll("input");
        console.log("fieldset" , fieldset);
        if (fieldset.querySelector("[data-bc-title-container] span").innerHTML!="نام محصول") {
            
            inputs.forEach(input => input.value = "");
        }
    });

    // مقداردهی مجدد input‌ها بر اساس آرایه selectionsArray
    selectionsArray.forEach(selection => {
        fieldSetForm.forEach(fieldset => {
            const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");
            dataQuestions.forEach(el => {
                const questionTitleElement = el.querySelector("[data-bc-question-title]");
                if (questionTitleElement) {
                    const questionTitle = normalizeText(questionTitleElement.textContent);
                    if (questionTitle.includes(selection.label)) {
                        el.querySelector("input").value = selection.value;
                    }
                }
            });
        });
    });


    let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
    questions.forEach((element) => {    
        
        let title = element.querySelector(".homeForm2 [data-bc-question-title]");
        let qInput = element.querySelector(".homeForm2 input");
        let productTitle = document.querySelector(".productTitle")

        if (title?.innerHTML.trim() == "نام محصول") {
          console.log("qInputtttttt",qInput);
          
            qInput.value = productTitle?.innerHTML
            
        }

      
    });
    // چاپ آرایه انتخاب‌ها در کنسول
    console.log(selectionsArray);
}

    function generateNextStep() {
        if (!currentSelections.category || !data[currentSelections.category]) return;

        const container = document.getElementById('dynamic-steps');
        const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];

        if (!stepData) return;

        const stepHTML = `
            <div class="step-container" data-step="2-${currentSelections.currentStepIndex + 1}">
                <span class="step-label">${stepData.label}:</span>
                <div class="custom-select">
                    <div class="select-header" onclick="toggleOptions(this)">
                        <span>لطفا انتخاب کنید</span>
                        <span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
</svg>

                        </span>
                    </div>
                    <div class="select-options">
                        ${stepData.options.map(option => `
                            <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', stepHTML);
    }

    function updateStepUI(container, selectedElement) {
        const headerText = container.querySelector('.select-header span:first-child');
        headerText.textContent = selectedElement.textContent;

        container.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        selectedElement.classList.add('selected');
        container.querySelector('.select-options').style.display = 'none';
    }



}


//
else if (schemaId.innerHTML == 1248) {
    const data = {
        '1': {
            label: "ترمال بریک",
            steps: [
                {
                    label: "نوع رنگ",
                    options: ["پودری", "آنادایز"]
                },
                {
                    label: "نوع بازشو",
                    options: ["لولایی", "ثابت", "LIFT", "ریلی"]
                },
                {
                    label: "نوع شیشه",
                    options: [
                        "دوجداره 6+6 سکوریت سوپرکلیر",
                        "دوجداره 4+4 ساده سوپرکلیر"
                    ]
                }
            ]
        },
        '2': {
            label: "نرمال",
            steps: [
                {
                    label: "نوع رنگ",
                    options: ["پودری", "آنادایز"]
                },
                {
                    label: "نوع بازشو",
                    options: ["لولایی", "ثابت", "LIFT", "ریلی"]
                },
                {
                    label: "نوع شیشه",
                    options: [
                        "دوجداره 6+6 سکوریت سوپرکلیر",
                        "دوجداره 4+4 ساده سوپرکلیر"
                    ]
                }
            ]
        }
    };
    let selectionsArray = []; // آرایه برای ذخیره‌سازی انتخاب‌ها

    let currentSelections = {
        category: null,
        steps: {},
        currentStepIndex: 0
    };

    function toggleOptions(header) {
        const options = header.parentElement.querySelector('.select-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }

    function handleSelection(element, category, isCategory = false) {
        const stepContainer = element.closest('.step-container');
        const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی
    
        const stepLabelElement = stepContainer.querySelector('.step-label'); 
        const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";
        
        const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");
        
        if (isCategory) {
            if (!data[category]) return;
    
            currentSelections = {
                category: category,
                steps: {},
                currentStepIndex: 0
            };
    
            selectionsArray = []; // پاک کردن آرایه انتخاب‌ها هنگام تغییر دسته‌بندی
            // ذخیره‌سازی مرحله اول (دسته‌بندی)
            selectionsArray.push({
                step: 0,
                label: "نوع درب/پنجره آلومینیومی",
                value: data[category].label
            });
    
            document.getElementById('dynamic-steps').innerHTML = '';
            generateNextStep();
            updateStepUI(stepContainer, element);
        } else {
            if (!currentSelections.category || !data[currentSelections.category]) return;
    
            const stepNumber = currentSelections.currentStepIndex + 1;
            currentSelections.steps[stepNumber] = element.textContent;
    
            // ذخیره‌سازی انتخاب در آرایه
            selectionsArray.push({
                step: stepNumber,
                label: stepLabel,
                value: element.textContent
            });
    
            if (currentSelections.currentStepIndex < data[currentSelections.category].steps.length - 1) {
                currentSelections.currentStepIndex++;
                generateNextStep();
            }
            updateStepUI(stepContainer, element);
        }
    
        // پاک کردن مقادیر قبلی input‌ها
        fieldSetForm.forEach(fieldset => {
            const inputs = fieldset.querySelectorAll("input");
            console.log("fieldset" , fieldset);
            if (fieldset.querySelector("[data-bc-title-container] span").innerHTML!="نام محصول") {
                
                inputs.forEach(input => input.value = "");
            }
        });
        // مقداردهی مجدد input‌ها بر اساس آرایه selectionsArray
        selectionsArray.forEach(selection => {
            fieldSetForm.forEach(fieldset => {
                const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");
                dataQuestions.forEach(el => {
                    const questionTitleElement = el.querySelector("[data-bc-question-title]");
                    console.log(element);
                    
                    if (questionTitleElement) {
                        const questionTitle = normalizeText(questionTitleElement.textContent);
               
                        if (questionTitle.includes(selection.label)) {
                            el.querySelector("input").value = selection.value;
                        }
                    }
                });
            });
        });
    
        let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
        questions.forEach((element) => {    
            
            let title = element.querySelector(".homeForm2 [data-bc-question-title]");
            let qInput = element.querySelector(".homeForm2 input");
            let productTitle = document.querySelector(".productTitle")
  
            if (title?.innerHTML.trim() == "نام محصول") {
              console.log("qInputtttttt",qInput);
              
                qInput.value = productTitle?.innerHTML
                
            }
    
          
        });
        // چاپ آرایه انتخاب‌ها در کنسول
        console.log(selectionsArray);
    }
    






    function generateNextStep() {
        if (!currentSelections.category || !data[currentSelections.category]) return;

        const container = document.getElementById('dynamic-steps');
        const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];

        if (!stepData) return;

        const stepHTML = `
            <div class="step-container" data-step="${currentSelections.currentStepIndex + 2}">
                <span class="step-label">${stepData.label}:</span>
                <div class="custom-select">
                    <div class="select-header" onclick="toggleOptions(this)">
                        <span>لطفا انتخاب کنید</span>
                        <span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
</svg>

</span>
                    </div>
                    <div class="select-options">
                        ${stepData.options.map(option => `
                            <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', stepHTML);
    }

    function updateStepUI(container, selectedElement) {
        const headerText = container.querySelector('.select-header span:first-child');
        headerText.textContent = selectedElement.textContent;

        container.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        selectedElement.classList.add('selected');
        container.querySelector('.select-options').style.display = 'none';
    }


}
//
else if (schemaId.innerHTML == 1576) {
    const data = {
        A: {
            label: "نوع فریم پارتیشن",
            options: {
                "1": {label: "تک جداره COLCOM", children: ["آنادایز", "پودری"]},
                "2": {label: "تک جداره دوجزیی", children: ["آنادایز", "پودری"]},
                "3": {label: "دوجداره COLCOM", children: ["آنادایز", "پودری"]}
            }
        },
        B: {
            label: "نوع شیشه",
            options: [
                "سکوریت 10 میل سوپرکلیر",
                "سکوریت 10 میل MQ",
                "سکوریت 8 میل سوپرکلیر",
                "سکوریت 8 میل MQ"
            ]
        }
    };
    
    let currentSelections = {
        step1: null,
        step2: null,
        step3: null
    };
    let selectionsArray = []; // آرایه برای ذخیره‌سازی انتخاب‌ها

    function toggleOptions(header) {
        const options = header.parentElement.querySelector('.select-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }
    
    function handleSelection(element, value) {
        // ابتدا container مربوط به مرحله فعلی را پیدا می‌کنیم
        const stepContainer = element.closest('.step-container');
        const stepNumber = parseInt(stepContainer.dataset.step);
        const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی
    
        // گرفتن عنوان مرحله (label) به منظور ذخیره در آرایه
        const stepLabelElement = stepContainer.querySelector('.step-label');
        const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";
    
        // ذخیره یا بروزرسانی انتخاب مربوط به این مرحله در آرایه selectionsArray
        const existingIndex = selectionsArray.findIndex(item => item.step === stepNumber);
        if (existingIndex > -1) {
            selectionsArray[existingIndex] = { step: stepNumber, label: stepLabel, value: element.innerHTML.trim() };
        } else {
            selectionsArray.push({ step: stepNumber, label: stepLabel, value: element.innerHTML.trim() });
        }
    
        // پاک کردن مقادیر قبلی inputها در فرم
        const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");
        fieldSetForm.forEach(fieldset => {
            const inputs = fieldset.querySelectorAll("input");
            console.log("fieldset" , fieldset);
            if (fieldset.querySelector("[data-bc-title-container] span").innerHTML!="نام محصول") {
                
                inputs.forEach(input => input.value = "");
            }
        });
    
        // مقداردهی مجدد inputها بر اساس اطلاعات موجود در آرایه selectionsArray
        selectionsArray.forEach(selection => {
            console.log("selection" , selection);
            console.log("element" , element);
            
            fieldSetForm.forEach(fieldset => {
                const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");
                dataQuestions.forEach(el => {
                    const questionTitleElement = el.querySelector("[data-bc-question-title]");
                    if (questionTitleElement) {
                        const questionTitle = normalizeText(questionTitleElement.textContent);
                        if (questionTitle.includes(selection.label)) {
                            const inputElement = el.querySelector("input");
                            if (inputElement) {
                                inputElement.value = selection.value;
                            }
                        }
                    }
                });
            });
        });
        let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
        questions.forEach((element) => {    
            
            let title = element.querySelector(".homeForm2 [data-bc-question-title]");
            let qInput = element.querySelector(".homeForm2 input");
            let productTitle = document.querySelector(".productTitle")
  
            if (title?.innerHTML.trim() == "نام محصول") {
              console.log("qInputtttttt",qInput);
              
                qInput.value = productTitle?.innerHTML
                
            }
    
          
        });
    
        // چاپ آرایه انتخاب‌ها در کنسول (برای دیباگ)
        console.log(selectionsArray);
    
        // به‌روزرسانی انتخاب‌های جاری
        currentSelections[`step${stepNumber}`] = value;
    
        // به روز رسانی رابط کاربری مرحله فعلی
        updateStepUI(stepContainer, element);
        clearNextSteps(stepNumber);
    
        // تولید مرحله بعدی بر اساس منطق موجود
        if (stepNumber === 1) {
            generateNextStep(stepNumber + 1, value);
        } else if (stepNumber === 2 && value in data.A.options) {
            generateNextStep(stepNumber + 1, value);
        }
        // در صورت نیاز می‌توانید در اینجا نتیجه نهایی را نیز نمایش دهید
    }
    
    function updateStepUI(container, selectedElement) {
        // Update header text
        const headerText = container.querySelector('.select-header span:first-child');
        headerText.textContent = selectedElement.textContent;
        
        // Remove previous selections
        container.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Add selection style
        selectedElement.classList.add('selected');
        
        // Close dropdown
        container.querySelector('.select-options').style.display = 'none';
    }
    
    function clearNextSteps(currentStep) {
        // Clear all subsequent steps
        for(let step = currentStep + 1; step <= 3; step++) {
            const stepContainer = document.querySelector(`[data-step="${step}"]`);
            if(stepContainer) {
                stepContainer.classList.add('hidden');
                stepContainer.innerHTML = '';
                currentSelections[`step${step}`] = null;
            }
        }
        // document.getElementById('result').classList.add('hidden');
    }
    
    function generateNextStep(nextStep, value) {
        const stepContainer = document.querySelector(`[data-step="${nextStep}"]`);
        
        let optionsHTML = '';
        let label = '';
        
        if(nextStep === 2) {
            label = data[currentSelections.step1].label;
            if(currentSelections.step1 === 'A') {
                optionsHTML = Object.values(data.A.options).map((item, index) => `
                    <div class="option-item" 
                         data-value="${index + 1}" 
                         onclick="handleSelection(this, '${index + 1}')">
                        ${item.label}
                    </div>
                `).join('');
            } else {
                optionsHTML = data.B.options.map(item => `
                    <div class="option-item" onclick="handleSelection(this, '${item}')">${item}</div>
                `).join('');
            }
        } else if(nextStep === 3) {
            label = "نوع پوشش";
            optionsHTML = data.A.options[value].children.map(item => `
                <div class="option-item" onclick="handleSelection(this, '${item}')">${item}</div>
            `).join('');
        }
    
        stepContainer.innerHTML = `
            <span class="step-label">${label}:</span>
            <div class="custom-select">
                <div class="select-header" onclick="toggleOptions(this)">
                    <span>لطفا انتخاب کنید</span>
                    <span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
</svg>
                    </span>
                </div>
                <div class="select-options">
                    ${optionsHTML}
                </div>
            </div>
        `;
        
        stepContainer.classList.remove('hidden');
    }
    
}

//
else if (schemaId.innerHTML == 3487) {
    const data = {
        A: {
            label: "دیوایدر",
            steps: [
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                },
                {
                    label: "یراق",
                    options: [
                        "بست گونیا استیل",
                        "بست گونیا رنگی",
                        "پروفیل 2 سانت استیل",
                        "پروفیل 3 سانت آلومینیوم"
                    ]
                }
            ]
        },
        B: {
            label: "خطی لولایی",
            steps: [
                {
                    label: "یراق",
                    subSteps: [
                        {
                            label: "بست گونیا",
                            options: ["استیل", "رنگی"]
                        },
                        {
                            label: "لولا",
                            options: [
                                "عمودی استیل",
                                "عمودی رنگی",
                                "افقی استیل",
                                "افقی رنگی"
                            ]
                        },
                        {
                            label: "دستگیره",
                            options: [
                                "تک سوراخ استیل",
                                "تک سوراخ رنگی",
                                "30 سانت استیل",
                                "30 سانت رنگی"
                            ]
                        }
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                }
            ]
        },
        C: {
            label: "ریلی خطی",
            steps: [
                {
                    label: "بست نگهدارنده",
                    options: [
                        "بست گونیا استیل",
                        "بست گونیا مشکی",
                        "پروفیل 20 سانت استیل",
                        "پروفیل 3 سانت آلومینیوم رنگی"
                    ]
                },
                {
                    label: "یراق",
                    options: [
                        "ست ریلی A02 استیل",
                        "ست ریلی A02 مشکی",
                        "ست ریلی A02 طلایی",
                        "ست ریلی A010 استیل",
                        "ست ریلی A010 مشکی",
                        "ست ریلی A010 طلایی"
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                }
            ]
        },
        D: {
            label: "نود درجه ریلی",
            steps: [
                {
                    label: "بست نگهدارنده",
                    options: [
                        "بست گونیا استیل",
                        "بست گونیا مشکی",
                        "پروفیل 20 سانت استیل",
                        "پروفیل 3 سانت آلومینیوم رنگی"
                    ]
                },
                {
                    label: "یراق",
                    options: [
                        "ست ریلی A02 استیل",
                        "ست ریلی A02 مشکی",
                        "ست ریلی A02 طلایی",
                        "ست ریلی A010 استیل",
                        "ست ریلی A010 مشکی",
                        "ست ریلی A010 طلایی"
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                }
            ]
        },
        E: {
            label: "نود درجه لولایی",
            steps: [
                {
                    label: "بست نگهدارنده",
                    options: [
                        "بست گونیا استیل",
                        "بست گونیا مشکی",
                        "پروفیل 20 سانت استیل",
                        "پروفیل 3 سانت آلومینیوم رنگی"
                    ]
                },
                {
                    label: "لولا",
                    options: [
                        "عمودی استیل",
                        "عمودی مشکی",
                        "افقی استیل",
                        "افقی مشکی"
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                }
            ]
        },
        F: {
            label: "ریلی خطی دو طرف ثابت",
            steps: [
                {
                    label: "بست نگهدارنده",
                    options: [
                        "بست گونیا استیل",
                        "بست گونیا مشکی",
                        "پروفیل 20 سانت استیل",
                        "پروفیل 3 سانت آلومینیوم رنگی"
                    ]
                },
                {
                    label: "یراق",
                    options: [
                        "ست ریلی A02 استیل",
                        "ست ریلی A02 مشکی",
                        "ست ریلی A02 طلایی",
                        "ست ریلی A010 استیل",
                        "ست ریلی A010 مشکی",
                        "ست ریلی A010 طلایی"
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                }
            ]
        },
        G: {
            label: "لولایی خطی دو طرف ثابت",
            steps: [
                {
                    label: "بست نگهدارنده",
                    options: [
                        "بست گونیا استیل",
                        "بست گونیا مشکی",
                        "پروفیل 20 سانت استیل",
                        "پروفیل 3 سانت آلومینیوم رنگی"
                    ]
                },
                {
                    label: "یراق",
                    options: [
                        "ست ریلی A02 استیل",
                        "ست ریلی A02 مشکی",
                        "ست ریلی A02 طلایی",
                        "ست ریلی A010 استیل",
                        "ست ریلی A010 مشکی",
                        "ست ریلی A010 طلایی"
                    ]
                },
                {
                    label: "شیشه",
                    options: [
                        "شیشه 8 میل سکوریت سوپرکلیر",
                        "شیشه 8 میل سکوریت MQ",
                        "شیشه 8 میل سکوریت ساتینا"
                    ]
                }
            ]
        }
    };
    
    let currentSelections = {
        category: null,
        steps: {},
        currentStepIndex: 0,
        subStepIndex: 0
    };
    let selectionsArray = []; // آرایه برای ذخیره‌سازی انتخاب‌ها

    function toggleOptions(header) {
        const options = header.parentElement.querySelector('.select-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }
    
    function handleSelection(element, category, isCategory = false) {
        const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی
    
        const stepContainer = element.closest('.step-container');
        const stepLabelElement = stepContainer.querySelector('.step-label'); 
        const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";
        
        const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");
    
        if (isCategory) {
            if (!data[category]) return;
    
            currentSelections = {
                category: category,
                steps: {},
                currentStepIndex: 0
            };
    
            selectionsArray = []; // پاک کردن آرایه انتخاب‌ها هنگام تغییر دسته‌بندی
            // ذخیره‌سازی مرحله اول (دسته‌بندی)
            selectionsArray.push({
                step: 0,
                label: "نوع دوردوشی",
                value: data[category].label
            });
    
            document.getElementById('dynamic-steps').innerHTML = '';
            generateNextStep();
            updateStepUI(stepContainer, element);
        } else {
            if (!currentSelections.category || !data[currentSelections.category]) return;
    
            const stepNumber = currentSelections.currentStepIndex + 1;
            currentSelections.steps[stepNumber] = element.textContent;
    
            // ذخیره‌سازی انتخاب در آرایه
            selectionsArray.push({
                step: stepNumber,
                label: stepLabel,
                value: element.textContent
            });
    
            if (currentSelections.currentStepIndex < data[currentSelections.category].steps.length - 1) {
                currentSelections.currentStepIndex++;
                generateNextStep();
            }
            updateStepUI(stepContainer, element);
        }
    
        // پاک کردن مقادیر قبلی input‌ها
        fieldSetForm.forEach(fieldset => {
            const inputs = fieldset.querySelectorAll("input");
            console.log("fieldset" , fieldset);
            if (fieldset.querySelector("[data-bc-title-container] span").innerHTML!="نام محصول") {
                
                inputs.forEach(input => input.value = "");
            }
        });
    
        // مقداردهی مجدد input‌ها بر اساس آرایه selectionsArray
        selectionsArray.forEach(selection => {
            fieldSetForm.forEach(fieldset => {
                const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");
                dataQuestions.forEach(el => {
                    const questionTitleElement = el.querySelector("[data-bc-question-title]");
                    if (questionTitleElement) {
                        const questionTitle = normalizeText(questionTitleElement.textContent);
                        if (questionTitle.includes(selection.label)) {
                            el.querySelector("input").value = selection.value;
                        }
                    }
                });
            });
        });
    

        let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
        questions.forEach((element) => {    
            
            let title = element.querySelector(".homeForm2 [data-bc-question-title]");
            let qInput = element.querySelector(".homeForm2 input");
            let productTitle = document.querySelector(".productTitle")
  
            if (title?.innerHTML.trim() == "نام محصول") {
              console.log("qInputtttttt",qInput);
              
                qInput.value = productTitle?.innerHTML
                
            }
    
          
        });
        // چاپ آرایه انتخاب‌ها در کنسول
        console.log(selectionsArray);
    }
    
    function generateNextStep() {
        if(!currentSelections.category || !data[currentSelections.category]) return;
        
        const container = document.getElementById('dynamic-steps');
        const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];
        
        if(!stepData) return;
        
        let stepHTML = '';
        
        if(stepData.subSteps) {
            stepHTML = generateSubStep(stepData.subSteps[0]);
        } else {
            stepHTML = `
                <div class="step-container" data-step="${currentSelections.currentStepIndex + 2}">
                    <span class="step-label">${stepData.label}:</span>
                    <div class="custom-select">
                        <div class="select-header" onclick="toggleOptions(this)">
                            <span>لطفا انتخاب کنید</span>
                            <span>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
</svg>

                            </span>
                        </div>
                        <div class="select-options">
                            ${stepData.options.map(option => `
                                <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
        
        container.insertAdjacentHTML('beforeend', stepHTML);
    }
    
    function generateNextSubStep() {
        const container = document.getElementById('dynamic-steps');
        const stepData = data[currentSelections.category].steps[currentSelections.currentStepIndex];
        const subStepData = stepData.subSteps[currentSelections.subStepIndex];
        
        const stepHTML = generateSubStep(subStepData);
        container.insertAdjacentHTML('beforeend', stepHTML);
    }
    
    function generateSubStep(subStepData) {
        return `
            <div class="step-container" data-step="${currentSelections.currentStepIndex + 2}-${currentSelections.subStepIndex + 1}">
                <span class="step-label">${subStepData.label}:</span>
                <div class="custom-select">
                    <div class="select-header" onclick="toggleOptions(this)">
                        <span>لطفا انتخاب کنید</span>
                        <span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
</svg>
                        </span>
                    </div>
                    <div class="select-options">
                        ${subStepData.options.map(option => `
                            <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    function updateStepUI(container, selectedElement) {
        const headerText = container.querySelector('.select-header span:first-child');
        headerText.textContent = selectedElement.textContent;
        
        container.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        selectedElement.classList.add('selected');
        container.querySelector('.select-options').style.display = 'none';
    }
    
}

//
else if (schemaId.innerHTML == 1287) {
    const data = {
        insulation: {
            label: "عایق حرارتی",
            options: [
                "جلوگیری از اتلاف انرژی در فصول سرد و گرم",
                "ضریب انتقال حرارت 0.8 W/m²K",
                "مطابق با استانداردهای بین‌المللی"
            ]
        },
        soundproof: {
            label: "عایق صوتی",
            options: [
                "کاهش انتقال صدا تا 45 دسیبل",
                "مناسب برای محیط‌های پرترافیک",
                "ساختار چندلایه عایق"
            ]
        },
        durability: {
            label: "مقاومت بالا",
            options: [
                "مقاوم در برابر زنگ‌زدگی و خوردگی",
                "تحمل فشار تا 1500 کیلوگرم",
                "گارانتی 20 ساله"
            ]
        },
        coating: {
            label: "پوشش سطحی",
            options: [
                "پودری با 50 رنگ انتخابی",
                "آنادایز با سطح متالیک",
                "هیبرید (ترکیب پودری و آنادایز)"
            ]
        },
        glass: {
            label: "سازگاری با شیشه",
            options: [
                "شیشه دوجداره 6+6 میلیمتر",
                "شیشه لمینت 5+5 میلیمتر",
                "شیشه سکوریت 8 میلیمتر"
            ]
        }
    };

    let currentSelections = {
        category: null,
        options: {},
        currentStep: 1
    };
    let selectionsArray = []; // آرایه برای ذخیره‌سازی انتخاب‌ها

    function toggleOptions(header) {
        const options = header.parentElement.querySelector('.select-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }

    function handleSelection(element, category, isCategory = false) {
        const stepContainer = element.closest('.step-container');

        const normalizeText = (text) => text.replace(/[:\s]+$/g, "").trim(); // حذف ":" و فاصله‌های اضافی
    
        const stepLabelElement = stepContainer.querySelector('.step-label'); 
        const stepLabel = stepLabelElement ? normalizeText(stepLabelElement.textContent) : "";
        
        const fieldSetForm = document.querySelectorAll(".homeForm2 fieldset");
        

        if (isCategory) {

            // if (!data[category]) return;

            currentSelections = {
                category: category,
                options: {},
                currentStep: 2
            };
            selectionsArray = []; // پاک کردن آرایه انتخاب‌ها هنگام تغییر دسته‌بندی
            selectionsArray.push({
                step: 0,
                label: "ویژگی‌های پروفیل ترمال بریک",
                value: data[category].label
            });

            document.getElementById('dynamic-steps').innerHTML = '';
            generateOptionsStep();
            updateStepUI(stepContainer, element);
        } else {
            currentSelections.options[currentSelections.category] = element.textContent;
            updateStepUI(stepContainer, element);
            const stepNumber = currentSelections.currentStep + 1;


            selectionsArray.push({
                step: stepNumber,
                label: stepLabel,
                value: element.textContent
            });
    

        }






          // پاک کردن مقادیر قبلی input‌ها
          fieldSetForm.forEach(fieldset => {
            const inputs = fieldset.querySelectorAll("input");
            const titlesField = fieldset.querySelectorAll("[data-bc-title-container] [data-bc-question-title]")
            titlesField.forEach(title => {
                
                if (title.innerHTML!="نام محصول") {
                    
                    inputs.forEach(input => input.value = "");
                }
                
            });
        });
        // مقداردهی مجدد input‌ها بر اساس آرایه selectionsArray
        selectionsArray.forEach(selection => {
            fieldSetForm.forEach(fieldset => {
                const dataQuestions = fieldset.querySelectorAll("[data-bc-question]");
                dataQuestions.forEach(el => {
                    const questionTitleElement = el.querySelector("[data-bc-question-title]");
                    
                    if (questionTitleElement) {
                        const questionTitle = normalizeText(questionTitleElement.textContent);
               
                        if (questionTitle.includes(selection.label)) {
                            el.querySelector("input").value = selection.value;
                        }
                    }
                });
            });
        });
        let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
        questions.forEach((element) => {    
            
            let title = element.querySelector(".homeForm2 [data-bc-question-title]");
            let qInput = element.querySelector(".homeForm2 input");
            let productTitle = document.querySelector(".productTitle")
  
            if (title?.innerHTML.trim() == "نام محصول") {
              console.log("qInputtttttt",qInput);
              
                qInput.value = productTitle?.innerHTML
                
            }
    
          
        });
        // چاپ آرایه انتخاب‌ها در کنسول
        console.log(selectionsArray);
    }

    function generateOptionsStep() {
        const container = document.getElementById('dynamic-steps');
        const categoryData = data[currentSelections.category];

        const stepHTML = `
    <div class="step-container" data-step="2">
        <span class="step-label">${categoryData.label}:</span>
        <div class="custom-select">
            <div class="select-header" onclick="toggleOptions(this)">
                <span>لطفا انتخاب کنید</span>
                <span>
                   <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586 2.12143L5.879 7.41443C6.25406 7.78937 6.76267 8 7.293 8C7.82333 8 8.33194 7.78937 8.707 7.41443L14 2.12143L12.586 0.707427L7.293 5.99643L2 0.703427L0.586 2.12143Z" fill="#5A5A5A"/>
</svg>

                </span>
            </div>
            <div class="select-options">
                ${categoryData.options.map(option => `
                    <div class="option-item" onclick="handleSelection(this, '${option}')">${option}</div>
                `).join('')}
            </div>
        </div>
    </div>
`;

        container.innerHTML = stepHTML;
    }

    function updateStepUI(container, selectedElement) {
        const headerText = container.querySelector('.select-header span:first-child');
        headerText.textContent = selectedElement.textContent;

        container.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        selectedElement.classList.add('selected');
        container.querySelector('.select-options').style.display = 'none';
    }


}
if (schemaId.innerHTML == 1226||schemaId.innerHTML == 1248||schemaId.innerHTML == 1576||schemaId.innerHTML == 3487||schemaId.innerHTML == 1287) {
        let openProductFormBtn2 = document.querySelector(".openProductFormBtn2");
    let popProduct = document.querySelector(".popProduct");
    let closePopProductForm = document.querySelector(".closePopProductForm");

    openProductFormBtn2.addEventListener("click", function (params) {
        popProduct.classList.add("activePopProduct");
    });
    closePopProductForm.addEventListener("click", function (params) {
        popProduct.classList.remove("activePopProduct");
    });


    let captchaInput1;
    let captchaContainerclass1;
    
    let loaderContainer2 = document.querySelector(".loaderContainer2");
    let formBtn2 = document.querySelector(".formBtn2");
    let loaderForm2 = document.querySelector(".loaderForm2");
    formBtn2.addEventListener("click", function (params) {
        // formBtn2.querySelector("span").style.display = "none";
        loaderForm2.style.display = "block";
        console.log(captchaInput1.value);
        let allertData = document.querySelectorAll("[data-bc-validation-part]")
        allertData.forEach(element => {
            let prevInput = element.previousElementSibling
            if (prevInput.value == "") {
                // یک نمونه جدید از allertDiv می‌سازیم
                let allertDivTemplate = document.querySelector(".allertDiv");
    
                if (allertDivTemplate) {
                    let allertDivClone = allertDivTemplate.cloneNode(true); // کل عنصر را کپی می‌کنیم
                    allertDivClone.classList.remove("hidden"); // کلاس hidden را حذف می‌کنیم
    
                    // بررسی می‌کنیم که از قبل در این والد وجود نداشته باشد
                    if (!element.parentElement.querySelector(".allertDiv")) {
                        prevInput.classList.add("allertBgInput")
                        element.parentElement.classList.add("relative"); // کلاس لازم را اضافه می‌کنیم
                        element.parentElement.insertAdjacentElement("afterbegin", allertDivClone);
                    }
                }
            }
            setTimeout(() => {
                let existingAllertDiv = element.parentElement.querySelector(".allertDiv");
    
                if (existingAllertDiv) {
                    existingAllertDiv.remove();
                }
                prevInput.classList.remove("allertBgInput")
    
            }, 5000);
        });
        if (captchaInput1.value == "") {
            captchaContainerclass1.style.background = "#FFE1E1";
            captchaInput1.setAttribute("placeholder", "لطفا عبارت امنیتی را وارد کنید");
            captchaInput1.classList.add("errorPlaceholder");
            setTimeout(() => {
                captchaContainerclass1.style.background = "#FFFFFF";
                captchaInput1.classList.remove("errorPlaceholder");
    
                formBtn2.querySelector("span").style.display = "block";
                loaderForm2.style.display = "none";
            }, 3000);
        }
    });
    function onSource11(args) {
        console.log("onSource");
        const captcha = document.querySelector(
            ".homeForm2 #requestBox input[name='captcha']"
        ).value;
        const captchaid = document.querySelector(
            ".homeForm2 #requestBox input[name='captchaid']"
        ).value;
        const stringJson = JSON.stringify(args.source?.rows[0]);
        console.log("stringJson", stringJson);
        $bc.setSource("edit.object12", {
            value: stringJson,
            captcha: captcha,
            captchaid: captchaid,
        });
    }
    let responsMsg1 = document.querySelector(".responsMsg11");
    let responsMsg1In = document.querySelector(".responsMsg11 span");
    async function OnProcessedEditObject11(args) {
        console.log("OnProcessedEditObject11");
        const response = args.response;
        const json = await response.json();
        console.log(json);
    
        if (json.errorid == 6) {
            console.log(json);
            responsMsg1.style.display = "block";
            responsMsg1In.innerHTML = "درخواست شما با موفقیت ثبت گردید";
            responsMsg1In.style.color = "#1A6902";
            document.querySelector(".homeForm2").reset();
            let questions = document.querySelectorAll(
                ".homeForm2 div[data-bc-question]"
            );
            setTimeout(() => {
                responsMsg1.style.display = "none";
    
                loaderForm2.style.display = "none";
            }, 2000);
        }
        if (json.errorid == 4) {
            console.log(json);
    
            responsMsg1In.innerHTML = "مشکلی پیش آمده، لطفا مجدد تلاش فرمایید.";
    
            responsMsg1.style.display = "block";
            responsMsg1In.style.color = "#FF2727";
            document.querySelector("form").reset();
    
            setTimeout(() => {
                loaderForm2.style.display = "none";
                responsMsg1.style.display = "block";
            }, 2000);
        }
        if (json.errorid == 15 && captchaInput1.value != "") {
            console.log(json);
    
            responsMsg1In.innerHTML = "لطفا کپچا را به درستی وارد کنید.";
    
            setTimeout(() => {
                loaderForm2.style.display = "none";
                responsMsg1.style.display = "block";
            }, 2000);
        }
    }
    
    function renderFn11(params) {
    
      let questionTitle = document.querySelectorAll("[data-bc-question-title]")
      questionTitle.forEach(element => {
        if (element.innerHTML=="توضیحات") {
            element.style.display="none"
        }
      });
        document.querySelector(".qclass81").style.display = "block";
        captchaInput1 = document.querySelector(".captchaContainerclass1 .codeinputm");
        captchaContainerclass1 = document.querySelector(".captchaContainerclass1");
        loaderContainer2.style.display = "none";
        console.log(loaderContainer2, 'loaderContainer2');
        let questions = document.querySelectorAll(".homeForm2 div[data-bc-question]");
        questions.forEach((element) => {
            element.classList.add("afterStar");
    
            let title = element.querySelector(".homeForm2 [data-bc-question-title]");
            let qInput = element.querySelector(".homeForm2 input");
            let qTxtArea = element.querySelector(".homeForm2 textarea");
            let productTitle = document.querySelector(".productTitle")
            let titleElement = title ? title.innerHTML.trim() : "";
    
            if (title) {
                title = element.querySelector(
                    ".homeForm2 [data-bc-question-title]"
                ).innerHTML;
                if (qInput) {
                    qInput.setAttribute("placeholder", title);
                    qInput.setAttribute("aria-label", title);
                } else if (qTxtArea) {
                    qTxtArea.setAttribute("placeholder", title);
                    qTxtArea.setAttribute("aria-label", title);
                }
            }
            console.log(title);
            
            if (title == "نام محصول") {
                console.log("innnnnnnnn");
                
                qInput.value = productTitle?.innerHTML
                console.log(qInput);
                
            }
    
            if (titleElement && (titleElement.includes("نام خانوادگی") || titleElement.includes("تلفن") || titleElement.includes("توضیحات") || titleElement.includes("عبارت"))) {
                console.log("عنوان شامل یکی از موارد مشخص شده است!");
            } else {
                if (qInput) {
                    qInput.setAttribute("disabled", "disabled");
                }
            }
        });
    }
    
    function renderEditobject1(params) {
        loaderContainer2.style.display = "none";
    }
}

