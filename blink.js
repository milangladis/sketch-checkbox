document.addEventListener("DOMContentLoaded", function() {
  convertCheckboxes();
});

function convertCheckboxes() {

  var buttons = document.querySelectorAll("input[blink]");

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
    var newButton = document.createElement("label");
    newButton.classList.add("blink");
    var newButtonWrapper = document.createElement("div");
    newButtonWrapper.innerHTML = (`<span></span>${el.value + svg + svg}`);
    newButton.appendChild(newButtonWrapper);
    el.classList.remove("blink");
    el.parentNode.insertBefore(newButton, el);
    newButton.prepend(el);
  });
}