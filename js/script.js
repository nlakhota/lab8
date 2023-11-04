function init() {
  // Add an event listener to the "Alert Me" div
  const alertButton = document.getElementById('entrybutton');
  const textInput = document.getElementById('entryinput');
  const textOutput = document.getElementById('textoutput');

  alertButton.addEventListener('click', function () {
    // Get the value of the text input control
    const inputValue = textInput.value;

    // Display an alert with your name and the input value
    alert('Nakibuddin Lakhota: ' + inputValue);

    // Update the text of the h2 element below the button
    textOutput.textContent = inputValue;
  });
}

window.addEventListener('load', init);
