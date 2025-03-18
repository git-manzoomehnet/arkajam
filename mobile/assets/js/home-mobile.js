let projects = document.querySelectorAll(".section5 .projectBox")
projects.forEach((element,i) => {
    element.querySelector(".number").innerHTML=`0${projects.length-(i)}`
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loaderHome").classList.add("endLoader");
    }, 6000); 
    setTimeout(() => {
        
        let cmsType = document.querySelector(".cmsType")
        if (cmsType.innerHTML.trim()==1) {
            document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
});

let scrollBtmHomePage = document.querySelector(".scrollBtmHomePage")
scrollBtmHomePage.addEventListener("click", function (params) {
    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });

})

