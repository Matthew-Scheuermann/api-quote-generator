// grab button and p tags
const adviceButton = document.querySelector("#press");
const randomQuote = document.querySelector("#quote");

// add click listener and call api within
adviceButton.addEventListener(`click`, async () => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const convertedData = await response.json();
    randomQuote.textContent = convertedData.slip.advice;
  } catch (error) {
    randomQuote.textContent =
      "404 Error. Page not available. Try again later :( ";
  }
});
