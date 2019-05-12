document.addEventListener("DOMContentLoaded", function() {
  initFireButtons();
  convertCheckboxes();
});

function convertCheckboxes() {
  // var buttons = document.getElementsByClassName("microInteration");
  // console.log(buttons);
  // buttons.forEach(function(el) {
  //   // console.log(el);
  //   // el.addEventListener("click", function() {
  //   //   buttons.forEach(function(el) {
  //   //     el.classList.remove("active");
  //   //   });
  //   //   this.classList.add("active");
  //   // });
  // });

  var buttons = document.querySelectorAll("input.microInteration");

  var svg = (`
    <svg width="156" height="144" viewBox="0 0 156 144" fill="white" xmlns="http://www.w3.org/2000/svg">
      <circle cx="42" cy="28" r="3"/>
      <circle cx="42" cy="88" r="3"/>
      <circle cx="102" cy="119" r="3"/>
      <circle cx="122" cy="58" r="3"/>
      <circle cx="102" cy="20" r="3"/>
      <circle cx="70.5" cy="30.5" r="1.5"/>
      <circle cx="20.5" cy="62.5" r="1.5"/>
      <circle cx="50.5" cy="114.5" r="1.5"/>
      <circle cx="130.5" cy="86.5" r="1.5"/>
      <circle cx="100.5" cy="48.5" r="1.5"/>
      <circle cx="87.5" cy="93.5" r="1.5"/>
    </svg>
  `);

  buttons.forEach(function(el, i) {
    console.log(i);
    var newButton = document.createElement("div");
    newButton.classList.add("microInteration");
    if (el.checked) {newButton.classList.add("active");}
    newButton.innerHTML = (`<span></span>${el.value + svg + svg}`);
    el.parentNode.replaceChild(newButton, el);

    newButton.addEventListener("click", function() {
      setActive(el);
    });

  });


  // buttons.forEach(function(el){
  //   var span = document.createElement("span");
  //   var svgs = document.createElement("div")
  //   svgs.innerHTML = svg + svg;
  //   el.insertBefore(span, el.firstChild);
  //   el.appendChild(svgs);
  // })



}


function setActive(el){
  var newButtons = document.querySelectorAll("microInteration");
  console.log(newButtons);
  newButtons.forEach(function(el) {
    console.log(el.classList);
    el.classList.remove("active");
  });

  this.classList.add("active");
}

function initFireButtons() {

  var buttons = document.querySelectorAll(".buttons li");

  buttons.forEach(function(el) {
    el.addEventListener("click", function() {
      buttons.forEach(function(el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  var svg = (`
    <svg width="156" height="144" viewBox="0 0 156 144" fill="white" xmlns="http://www.w3.org/2000/svg">
      <circle cx="42" cy="28" r="3"/>
      <circle cx="42" cy="88" r="3"/>
      <circle cx="102" cy="119" r="3"/>
      <circle cx="122" cy="58" r="3"/>
      <circle cx="102" cy="20" r="3"/>
      <circle cx="70.5" cy="30.5" r="1.5"/>
      <circle cx="20.5" cy="62.5" r="1.5"/>
      <circle cx="50.5" cy="114.5" r="1.5"/>
      <circle cx="130.5" cy="86.5" r="1.5"/>
      <circle cx="100.5" cy="48.5" r="1.5"/>
      <circle cx="87.5" cy="93.5" r="1.5"/>
    </svg>
  `);

  buttons.forEach(function(el){
    var span = document.createElement("span");
    var svgs = document.createElement("div")
    svgs.innerHTML = svg + svg;
    el.insertBefore(span, el.firstChild);
    el.appendChild(svgs);
  })
}