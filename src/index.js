function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "On Turning Her Up in Her Nest with the Plough",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
