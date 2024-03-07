function enableDarkMode(darkMode) {
 
  console.log(darkMode);

  const element = document.body.style;
  let bgc = darkMode ? "black" : "white";
  let textColor = darkMode ? "white" : "black";

  element.backgroundColor = bgc;
  element.color = textColor;
  
  //document.a.setAttribute('style', 'color: white !important');

  // Get all elements with the tag name "a" 
  let paragraphElements = document.getElementsByTagName('a'); 
  // Loop through each element and set its color 
  for(let i = 0; i < paragraphElements.length; i++) { 
    paragraphElements[i].style.color = textColor;
  } 

  // Set the property to local storage
  localStorage.setItem('darkMode', darkMode);

}
function setMode() {
  if(localStorage.getItem("darkMode") == "true") {
    enableDarkMode(true);
  }
}
function toggleDarkMode() {
  if(localStorage.getItem("darkMode") == "true") {
    enableDarkMode(false);
  } else {
    enableDarkMode(true);
  }
}
