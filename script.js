let bird = document.getElementById('bird');
let bird2 = document.getElementById('bird2');
let kelapa = document.getElementById('kelapa');
let kelapa2 = document.getElementById('kelapa2');
let crab = document.getElementById('crab');
let crab2 = document.getElementById('crab2');
let shell = document.getElementById('shell');
let sand = document.getElementById('sand');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bird.style.left = value * 0.25 + 'px';
    bird2.style.left = value * 0.25 + 'px';
    kelapa.style.marginBottom = value * 0.1 + 'px';
    kelapa2.style.marginBottom = value * 0.1 + 'px';
    crab.style.marginLeft = value * 0.5 + 'px';
    crab2.style.marginLeft = value * 1 + 'px';
    shell.style.marginRight = value * 0.1 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});

function myFunction() {
    x = document.getElementById('section1');
    let section = $(`#container2, #container3, #container4`)
    section.show()
    if (x.style.display === 'inline-block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'inline-block';
    }
 }

 var words = ['Hello, Welcome to Ciletuh!', 'Nice to meet you!', 'Please enjoy!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
  register_pagination("#images-area1","#previous-btn1","#next-btn1", "#pagination-area1");
  register_pagination("#images-area2","#previous-btn2","#next-btn2", "#pagination-area2");
  register_pagination("#images-area3","#previous-btn3","#next-btn3", "#pagination-area3");
  register_pagination("#images-area4","#previous-btn4","#next-btn4", "#pagination-area4");
  register_pagination("#images-area5","#previous-btn5","#next-btn5", "#pagination-area5");
  register_pagination("#images-area6","#previous-btn6","#next-btn6", "#pagination-area6");
  register_pagination("#images-area7","#previous-btn7","#next-btn7", "#pagination-area7");
  register_pagination("#images-area8","#previous-btn8","#next-btn8", "#pagination-area8");
  register_pagination("#images-area9","#previous-btn9","#next-btn9", "#pagination-area9");
  register_pagination("#images-area10","#previous-btn10","#next-btn10", "#pagination-area10");
  register_pagination("#images-area11","#previous-btn11","#next-btn11", "#pagination-area11");
  register_pagination("#images-area12","#previous-btn12","#next-btn12", "#pagination-area12");
});

function register_pagination(area, prev, next, pagination){
  // Images Area Images
  let imagesAreaImages = document.querySelectorAll(`${area}.images-area img`);
  // Images Area First Image
  let imagesAreaFirstImage = document.querySelector(`${area}.images-area .firstImage`);
  
  // Previous And Next Buttons
  let previousBtn = document.querySelector(`${prev}.previous-btn`);
  let nextBtn = document.querySelector(`${next}.next-btn`);
  
  // Pagination Area 
  let paginationArea = document.querySelector(`${pagination}.pagination-area`);
  
  // Current Image Count
  let currentImageCount = 1;
  
  // Slider Controler Function
  let sliderController;
  // Create Pagination Spans Function
  let createPaginationSpans;
  
  // Every Click On Buttons
  previousBtn.addEventListener('click', previousImage);
  nextBtn.addEventListener('click', nextImage);

  // Previous Image Function
function previousImage() {
  // If The currentImageCount Is 1
  if(currentImageCount === 1){
    return false;
  }else{ // Else
    // Minus One From currentImageCount
    currentImageCount--;
    // Call Function sliderController();
    sliderController();

  };
};

// Next Image Function
function nextImage() {
  // If The currentImageCount Is imagesAreaImages.length
  if(currentImageCount === imagesAreaImages.length){
    return false;
  }else{ // Else
    // Plus One To currentImageCount
    currentImageCount++;
    // Call Function sliderController();
    sliderController();
  };
};

// Create Pagination Spans [Circls] Function
(function createPaginationSpans(){
  // Loop On All The Images Slider
  for(var i = 0; i < imagesAreaImages.length; i++){
    // Create Span 
    let paginationSpan = document.createElement('span');
    // Append The Span
    paginationArea.appendChild(paginationSpan)
  };
})();

// Slider Controler Function
(sliderController = function (){
  // Get All The pagination Spans
  let paginationCircls = document.querySelectorAll('.pagination-area span');

  // Call Remore All Active Class Function
  removeAllActive(paginationCircls);
  
  // Call Remore Active Button Function
  activeButton();

  // The currentImageCount Minus One
  let currentImageMinusOne = currentImageCount - 1;

  // Set Active Class On Current Pagination
  paginationCircls[currentImageMinusOne].classList.add('active');

  // Move The images Area First Image
  imagesAreaFirstImage.style.marginLeft = `-${600 * currentImageMinusOne}px`;
  console.log(600 * currentImageMinusOne);
})();

// Remove All Active Class Function
function removeAllActive(targetElement){
  for(var i = 0; i < targetElement.length; i++){
    targetElement[i].classList.remove('active');
  };
};

// Check Active Button Function
function activeButton() {
  // If The Current Image Count Equle 1
  currentImageCount === 1 ? 
  // Hide The Previous Button
  previousBtn.classList.add('disabled') : 
  // Else: Show The Previous Button
  previousBtn.classList.remove('disabled');

  // If The Current Image Count Equle imagesAreaImages.length
  currentImageCount === imagesAreaImages.length ? 
  // Hide The Next Button
  nextBtn.classList.add('disabled') : 
  // Else: Show The Next Button
  nextBtn.classList.remove('disabled');
};

// Move Slider Image Every 3 Second 
setInterval(() => {
  // If The Current Image Count Not Equle imagesAreaImages.length
  if(currentImageCount != imagesAreaImages.length){
    // Plus One
    currentImageCount++;
    // Call Function sliderController();
    sliderController();
  }else{ // else
    // Make currentImageCount Equle 1
    currentImageCount = 1;
    // Call Function sliderController();
    sliderController();
  };
}, 3000);

// :)

}



