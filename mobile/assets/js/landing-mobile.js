// const accordions = document.querySelectorAll(".accordion");

// const openAccordion = (accordion) => {
// 	const content = accordion.querySelector(".accordion__content");
// 	accordion.classList.add("accordion__active");
// 	content.style.maxHeight = content.scrollHeight+25 + "px";
// };

// const closeAccordion = (accordion) => {
// 	const content = accordion.querySelector(".accordion__content");
// 	accordion.classList.remove("accordion__active");
// 	content.style.maxHeight = null;
// };

// accordions.forEach((accordion) => {
// 	const intro = accordion.querySelector(".accordion__intro");
// 	const content = accordion.querySelector(".accordion__content");

// 	intro.onclick = () => {
// 		if (content.style.maxHeight) {
// 			closeAccordion(accordion);
// 		} else {
// 			accordions.forEach((accordion) => closeAccordion(accordion));
// 			openAccordion(accordion);
// 		}
// 	};
// });




let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {

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
   } else {
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