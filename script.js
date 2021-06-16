
//Reservoir Images
const change = document.getElementById("img01");
const images1 =["newProjectFile/IMG-20210415-WA0061.jpg", "newProjectFile/IMG-20210415-WA0037.jpg", "newProjectFile/IMG-20210415-WA0074.jpg"];
const images2 =["newProjectFile/IMG-20210415-WA0040.jpg", "newProjectFile/IMG-20210415-WA0048.jpg", "newProjectFile/IMG-20210415-WA0056.jpg"];
const images3 = ["newProjectFile/IMG-20210415-WA0049.jpg", "newProjectFile/IMG-20210415-WA0047.jpg", "newProjectFile/IMG-20210415-WA0055.jpg"]
const images4 =["newProjectFile/IMG-20210415-WA0044.jpg","newProjectFile/IMG-20210415-WA0041.jpg", "newProjectFile/IMG-20210415-WA0081.jpg"];
const images5 =["newProjectFile/IMG-20210415-WA0039.jpg", "newProjectFile/IMG-20210415-WA0045.jpg", "newProjectFile/IMG-20210415-WA0053.jpg"];

//Timer Animation
var imgCount = 0;
function startTime(code, mode, node) {
    const parent = document.querySelector(code);
    const child = document.getElementById(mode);
    parent.removeChild(child);
    parent.appendChild(child);

    if(imgCount == node.length) {
        imgCount = 0;
    }
    document.getElementById(mode).src = node[imgCount];
    imgCount++;
}


setInterval(startTime, 5000,'picture#test_pic', "img01", images1);
setInterval(startTime, 10000, 'picture#test_pic',"img02", images2);
setInterval(startTime, 5000, 'picture#test_pic1',"img03", images3);
setInterval(startTime, 10000, 'picture#test_pic1', "img04", images4);
setInterval(startTime, 5000, 'picture#test_pic2', "img05", images5);
setInterval(startTime, 10000, 'picture#test_pic2',"img06", images1);
setInterval(startTime, 5000, 'picture#test_pic3',"img07", images1);
setInterval(startTime, 10000, 'picture#test_pic3', "img08", images1);


//Previous and Next buttons
const Events = document.querySelectorAll(".EventLists");
let currentIndex = 0;
function previous(){
    Events[currentIndex].classList.toggle('display-none');
    if (currentIndex == Events.length - 1) {
                    currentIndex = 0;
                } else {
                    currentIndex = currentIndex + 1; 
                }
    Events[currentIndex].classList.toggle('display-none');
}  
function next(){
    Events[currentIndex].classList.toggle('display-none');
    if (currentIndex == 0) {
                    currentIndex = Events.length -1;
                } else {
                    currentIndex = currentIndex -1; 
                }
    Events[currentIndex].classList.toggle('display-none');
}      

//Hamburger icon
const close = document.querySelectorAll(".menuList");
let menuIndex = 0;
function menuFunction(){
    close[menuIndex].classList.toggle('display-none1');
    if (menuIndex == close.length - 1) {
                    menuIndex = 0;
                } else {
                    menuIndex = menuIndex + 1; 
                }
    close[menuIndex].classList.toggle('display-none1');
}  