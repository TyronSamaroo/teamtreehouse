// Ref to body
const body = document.body;

// Example event listener
body.addEventListener("click", () => {
  console.log("You clicked the body of the page");

  body.innerHTML = `<h1> Hello World</h1>`;
  
});

