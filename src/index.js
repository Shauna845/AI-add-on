function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "97a2aef61tb590co334c6f1f08042a43";
  let prompt = `User Instructions: Please generate a short poem about ${instructionsInput.value}`;
  let context =
    "You are an intelligent AI who is an international poet. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions below. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside the <i> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="blink">⌛ Generating a poem about ${instructionsInput.value}... </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
