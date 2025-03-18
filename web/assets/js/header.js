let menuItem = document.querySelector(".menuItem")
let menuBar = document.querySelector(".menuBar")
let menuItemUl = document.querySelector(".innerMenuItem")
let lists = document.querySelectorAll(".menuItem ul li")
let megaHeader = document.querySelector(".megaHeader")
let header = document.querySelector("header")
let headerDarkFlag = header.classList.contains("darkHeader")

let headerFlag = false
menuItemUl.addEventListener("mouseenter", function () {
    menuItem.classList.add("activeListMenu");
});

menuItemUl.addEventListener("mouseleave", function () {
    menuItem.classList.remove("activeListMenu");
});


lists.forEach(element => {
    element.addEventListener("mouseenter", function (params) {

    })
    element.addEventListener("mouseout", function (params) {

    })
});
menuBar.addEventListener("click", function () {
    headerFlag = !headerFlag; // تغییر مقدار
    if (headerFlag) {
        menuBar.classList.add("activeMenuBar")
        megaHeader.classList.add("activeMegaMenu");
        header.classList.add("darkHeader");
        setTimeout(() => {

            // نمایش آیتم‌ها از پایین به بالا (دونه‌دونه)
            lists.forEach((element, index) => {
                setTimeout(() => {
                    element.querySelector("a").style.transform = "translateY(0)";
                }, index * 100); // هر آیتم 50ms بعد از قبلی ظاهر بشه
            });

        }, 700);
    } else {
        // مخفی کردن آیتم‌ها از بالا به پایین (دونه‌دونه)
        menuBar.classList.remove("activeMenuBar")

        lists.forEach((element, index) => {
            setTimeout(() => {
                element.querySelector("a").style.transform = "translateY(-100%)";
            }, index * 100);
        });

        // بعد از اتمام انیمیشن، megaMenu رو ببندیم
        setTimeout(() => {
            megaHeader.classList.remove("activeMegaMenu");
            if (!headerDarkFlag) {

                header.classList.remove("darkHeader");
            }
        }, lists.length * 100 + 200); // 200ms اضافه برای اطمینان
    }
});



let searchBtn = document.querySelector(".searchBtn");
let searchForm = document.querySelector(".searchForm");
let toggleSearch = document.querySelector(".toggleSearch");

searchBtn.addEventListener("click", function () {
    searchBtn.classList.toggle("activeSearchBtn");
    searchForm.classList.toggle("activeSearchForm");
    toggleSearch.classList.toggle("activeToggleSearch");
});


let contactUsLiItem = document.querySelector(".contactUsLiItem")
let homePage = document.querySelector(".homePage")
if (homePage) {
    contactUsLiItem.addEventListener("click", function (e) {
        e.preventDefault()
        homeSlider.slideTo(4, 0)
        closeHeader()
    })
    let aboutUsLiItem = document.querySelector(".aboutUsLiItem")
    aboutUsLiItem.addEventListener("click", function (e) {
        e.preventDefault()
        closeHeader()
        homeSlider.slideTo(1, 0)

    })
    let prodoctListLiItem = document.querySelector(".prodoctListLiItem")
    prodoctListLiItem.addEventListener("click", function (e) {
        e.preventDefault()
        closeHeader()
        homeSlider.slideTo(2, 0)

    })
    let projectListLiItem = document.querySelector(".projectListLiItem")
    projectListLiItem.addEventListener("click", function (e) {
        e.preventDefault()
        closeHeader()
        homeSlider.slideTo(3, 0)

    })
}
else {
    contactUsLiItem.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector("footer").scrollIntoView();
        closeHeader()
    })
}

function closeHeader(params) {
    menuBar.classList.remove("activeMenuBar")

    lists.forEach((element, index) => {
        setTimeout(() => {
            element.querySelector("a").style.transform = "translateY(-100%)";
        }, index * 100);
    });

    // بعد از اتمام انیمیشن، megaMenu رو ببندیم
    setTimeout(() => {
        megaHeader.classList.remove("activeMegaMenu");
        if (!headerDarkFlag) {

            header.classList.remove("darkHeader");
        }
    }, lists.length * 100 + 200); // 200ms اضافه برای اطمینان
    headerFlag = false

}


header.style.transition = "0.5s"
document.addEventListener("scroll", function (params) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    else {

        header.style.backgroundColor = "rgba(0,0,0,0)"
    }

})

if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "rgba(0,0,0,0.5)"
}
else {

    header.style.backgroundColor = "rgba(0,0,0,0)"
}
