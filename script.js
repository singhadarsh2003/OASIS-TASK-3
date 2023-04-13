function convertCelsiusToFahrenheit() {
	const celsius = Number(document.getElementById('celsius').value);
	const fahrenheit = (celsius * 1.8) + 32;
	document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  }
  
  function convertFahrenheitToCelsius() {
	const fahrenheit = Number(document.getElementById('fahrenheit2').value);
	const celsius = (fahrenheit - 32) / 1.8;
	document.getElementById('celsius2').value = celsius.toFixed(2);
  }
  