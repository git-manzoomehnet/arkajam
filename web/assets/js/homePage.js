let changeFlag = 0;


document.querySelector("header").classList.add("darkHeader")
let lSection2 = document.querySelector(".section2 .lSection")
lSection2.classList.add("leftAnim")
const projectBoxes = document.querySelectorAll('.projectBox');



document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".loaderHome").classList.add("endLoader");
    }, 6000); // Loader disappears after 3 seconds
});



projectBoxes.forEach(element => {
    element.classList.add("topBoxes")
    
});

let projects = document.querySelectorAll(".section3 .productBox")

projectBoxes.forEach((box, index) => {
                    
    box.classList.add(`delay-[${Math.floor(0.1*(index+1)*10)/10}s]`);
});
const homeSlider = new Swiper('.homeSlider', {
    // Optional parameters
    mousewheel: true,
    speed: 1000,
    allowTouchMove:false,
    on: {
        slideChange: function () {
            if(this.activeIndex==2){
                console.log("2222222");
                
                projectBoxes.forEach((box, index) => {
                    box.classList.add("topBoxes");
                  });
                projectBoxes.forEach((box, index) => {
                    box.classList.remove("bottomBoxes");
                  });
              
            }
           else  if (changeFlag > this.activeIndex ) {
            console.log(this.activeIndex);
            
                lSection2.classList.add("leftAnim")
                lSection2.classList.remove("rightAnim")

              
            } 
           
            else if(this.activeIndex==4){
                projectBoxes.forEach((box, index) => {
                    box.classList.remove("topBoxes");
                  });
                projectBoxes.forEach((box, index) => {
                    box.classList.add("bottomBoxes");
                  });
              
            }
            else {
                lSection2.classList.remove("leftAnim")
                lSection2.classList.add("rightAnim")
               

                
            }
            
            changeFlag = this.activeIndex
         
        },
    },
});
let scrollBtmHomePage = document.querySelector(".scrollBtmHomePage")
scrollBtmHomePage.addEventListener("click", function (params) {
    homeSlider.slideTo(1, 1000)
})


let cmsType = document.querySelector(".cmsType")
if (cmsType.innerHTML.trim()==1) {
    homeSlider.slideTo(4, 1000)
}

let mapSectoin = document.querySelector(".mapSectoin")
let xLat = mapSectoin.getAttribute("data-x")
let yLat = mapSectoin.getAttribute("data-y")
const map = L.map('map').setView([xLat, yLat], 12);
const config = {
    center: [xLat, yLat], // مختصات دقیق تجریش
    zoom: 18,
    tileLayer: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        options: {
            maxZoom: 21,
            minZoom: 15,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            detectRetina: true
        }
    },
   
};
const customIcon = L.icon({
        iconUrl: '/images/locationIcon.png',
        iconSize: [28, 28],
        iconAnchor: [12, 41]
    });
// استفاده از لایه تاریک CartoDB
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CartoDB'
}).addTo(map);


L.marker(config.center, { icon: customIcon })
        .addTo(map)