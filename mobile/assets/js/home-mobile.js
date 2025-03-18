let projects = document.querySelectorAll(".section5 .projectBox")
projects.forEach((element,i) => {
    element.querySelector(".number").innerHTML=`0${projects.length-(i)}`
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loaderHome").classList.add("endLoader");
        setTimeout(() => {
            
            document.querySelector(".section1 video").setAttribute("autoplay","")
            document.querySelector(".section1 video").play()
        }, 1000);
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


let pageQuery = document.querySelector(".pageQuery")
if (pageQuery) {
    if (pageQuery.innerHTML.trim()=="about-us") {
        document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
    }
    else if (pageQuery.innerHTML.trim()=="product-list") {
        document.querySelector(".section4").scrollIntoView({ behavior: "smooth" });
    }
    else if (pageQuery.innerHTML.trim()=="project-list") {
        document.querySelector(".section5").scrollIntoView({ behavior: "smooth" });
    }
    else if (pageQuery.innerHTML.trim()=="contact") {
        document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    }
}