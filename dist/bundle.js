/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
const ui = (location) => {
    const icon = document.querySelector('img')
    icon.src = location.icon
    const wheather = document.querySelector('.wheather')
    wheather.textContent = location.wheather
    const temperaturCelc = document.querySelector('.celc')
    temperaturCelc.textContent = `${location.tempC} °C`
    const temperaturFaren = document.querySelector('.faren')
    temperaturFaren.textContent = `${location.tempF} °F`
    const city = document.querySelector('.city')
    city.textContent = location.city
    const time = document.querySelector('.time')
    time.textContent = `Time: ${location.time}`
    const date = document.querySelector('.date')
    date.textContent = `Date: ${location.date}`
    const wind = document.querySelector('.wind')
    wind.textContent = `Wind: ${location.wind} kph`
    const pressure = document.querySelector('.pressure')
    pressure.textContent = `Pressure: ${location.pressure} mb`
    const hummidity = document.querySelector('.hummidity')
    hummidity.textContent = `Hummidity: ${location.humidity} %`
}



/***/ }),

/***/ "./src/documentFlow.js":
/*!*****************************!*\
  !*** ./src/documentFlow.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flow": () => (/* binding */ flow)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/fetchAPI.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _locationData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationData */ "./src/locationData.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _tempFC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tempFC */ "./src/tempFC.js");







const flow = async () =>{
    
    const data = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const newLocation = (0,_locationData__WEBPACK_IMPORTED_MODULE_2__.location)(data)
    ;(0,_UI__WEBPACK_IMPORTED_MODULE_1__.ui)(newLocation)
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.form)()  
    _tempFC__WEBPACK_IMPORTED_MODULE_4__.changeTempFarenCelc

}

/***/ }),

/***/ "./src/errorHandling.js":
/*!******************************!*\
  !*** ./src/errorHandling.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler)
/* harmony export */ });
const errorHandler = (()=>{
    const errorMessageDiv = document.querySelector('.invalid')


    const wrongCity = ()=>{
        errorMessageDiv.innerText = 'There is no such City'
        errorMessageDiv.style.display = 'grid'
    }

    const otherErrors = ()=>{
        errorMessageDiv.innerText = error
        errorMessageDiv.style.display = 'grid'
    }

    return{wrongCity, otherErrors}
})()

/***/ }),

/***/ "./src/fetchAPI.js":
/*!*************************!*\
  !*** ./src/fetchAPI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandling */ "./src/errorHandling.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./src/loading.js");



const apiCall = async (location = "warsaw") => {
    _loading__WEBPACK_IMPORTED_MODULE_1__["default"].startLoading()
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3344d57ff3814694a7895849232004&q=${location}`
    );
    if(response.ok){
      const data = await response.json();
      _loading__WEBPACK_IMPORTED_MODULE_1__["default"].stopLoading()
      return data
    }
    else{
      _errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorHandler.wrongCity()
      _loading__WEBPACK_IMPORTED_MODULE_1__["default"].stopLoading()
    }
    
  } catch (error) {
    _errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorHandler.otherErrors()
    _loading__WEBPACK_IMPORTED_MODULE_1__["default"].stopLoading()
  }
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCall);



/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/fetchAPI.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _locationData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationData */ "./src/locationData.js");
/* harmony import */ var _styleonWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleonWeather */ "./src/styleonWeather.js");
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formValidation */ "./src/formValidation.js");






const form = () => {
  const input = document.querySelector("input");
  const form = document.querySelector("form");
  let city;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    city = e.target[0].value.toLowerCase().trim();
    const validation = (0,_formValidation__WEBPACK_IMPORTED_MODULE_4__.fromValidity)(city);
    if (validation) {
      const data = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
      const newLocation = (0,_locationData__WEBPACK_IMPORTED_MODULE_2__.location)(data);
      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.ui)(newLocation);
      (0,_styleonWeather__WEBPACK_IMPORTED_MODULE_3__.changeStyleOnWeather)(data);
      input.value = "";
    } else {
      input.value = "";
    }
  });
};


/***/ }),

/***/ "./src/formValidation.js":
/*!*******************************!*\
  !*** ./src/formValidation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromValidity": () => (/* binding */ fromValidity)
/* harmony export */ });
const fromValidity = (form) => {
  const validationDiv = document.querySelector(".invalid");
  validationDiv.style.display = "none";
  if (form.length < 1) {
    validationDiv.textContent = "input too short (minial 1 letter)";
    validationDiv.style.display = "grid";
    return false;
  } else {
    return true;
  }
};


/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loading = (() => {
  const button = document.querySelector("button");

  const startLoading = () => {
    button.innerText = "loading...";
  };

  const stopLoading = () => {
    button.innerText = "search";
  };

  return { startLoading, stopLoading };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);


/***/ }),

/***/ "./src/locationData.js":
/*!*****************************!*\
  !*** ./src/locationData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "location": () => (/* binding */ location)
/* harmony export */ });
const location = (data) => {

    const city = data.location.name
    const time = data.location.localtime.slice(-6)
    const date = data.location.localtime.slice(8,10)+data.location.localtime.slice(4,8)+data.location.localtime.slice(0,4)
    const wheather = data.current.condition.text
    const tempC = data.current.temp_c
    const tempF = data.current.temp_f
    const wind = data.current.wind_kph
    const pressure = data.current.pressure_mb
    const humidity = data.current.humidity
    const icon = `./icons/${data.current.condition.icon.slice(-7)}`

    return {city, time, date, wheather, tempC, tempF, wind, pressure, humidity, icon}
}




/***/ }),

/***/ "./src/styleonWeather.js":
/*!*******************************!*\
  !*** ./src/styleonWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStyleOnWeather": () => (/* binding */ changeStyleOnWeather)
/* harmony export */ });
const sunnyWeather = ['Clear', 'Sunny'];
const cloudyWeather = ['Partly cloudy', 'Cloudy', 'Overcast', 'Mist', 'Fog', 'Freezing fog'];
const rainyWeather = ['Patchy rain possible', 'Patchy light drizzle', 'Light drizzle', 'Freezing drizzle', 'Heavy freezing drizzle', 'Patchy light rain', 'Light rain', 'Moderate rain at times', 'Moderate rain', 'Heavy rain at times', 'Heavy rain', 'Light freezing rain', 'Moderate or heavy freezing rain', 'Light rain shower', 'Moderate or heavy rain shower', 'Torrential rain shower', 'Patchy light rain with thunder', 'Moderate or heavy rain with thunder'];
const snowyWeather = ['Patchy snow possible', 'Patchy sleet possible', 'Patchy freezing drizzle possible', 'Blowing snow', 'Blizzard', 'Light sleet', 'Moderate or heavy sleet', 'Patchy light snow', 'Light snow', 'Patchy moderate snow', 'Moderate snow', 'Patchy heavy snow', 'Heavy snow']

const changeStyleOnWeather = (location) => {

    const weather = location.current.condition.text

    const footer = document.querySelector('.footer')
    const container = document.querySelector('.container')


    if(sunnyWeather.includes(weather)){
        footer.className = 'footer sunny'
        container.className = 'container sunny'
    }
    else if(cloudyWeather.includes(weather)){
        footer.className = 'footer cloudy'
        container.className = 'container cloudy'
    }
    else if(rainyWeather.includes(weather)){
        footer.className = 'footer rainy'
        container.className = 'container rainy'
    }
    else if(snowyWeather.includes(weather)){
        footer.className = 'footer snowy'
        container.className = 'container snowy'
    }

}

/***/ }),

/***/ "./src/tempFC.js":
/*!***********************!*\
  !*** ./src/tempFC.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTempFarenCelc": () => (/* binding */ changeTempFarenCelc)
/* harmony export */ });
const changeTempFarenCelc = (() => {
    const celcius = document.querySelector('.celc')
    const farenheit = document.querySelector('.faren')

    const toggleTemp = document.querySelector('.celcfaren')

    toggleTemp.addEventListener('click', ()=>{
        celcius.classList.toggle('active')
        farenheit.classList.toggle('active')
    })
})()

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _documentFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentFlow */ "./src/documentFlow.js");


(0,_documentFlow__WEBPACK_IMPORTED_MODULE_0__.flow)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQztBQUNyQztBQUNBLG1EQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9jdW1lbnRGbG93LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Vycm9ySGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZW9uV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wRkMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdWkgPSAobG9jYXRpb24pID0+IHtcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxyXG4gICAgaWNvbi5zcmMgPSBsb2NhdGlvbi5pY29uXHJcbiAgICBjb25zdCB3aGVhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aGVhdGhlcicpXHJcbiAgICB3aGVhdGhlci50ZXh0Q29udGVudCA9IGxvY2F0aW9uLndoZWF0aGVyXHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyQ2VsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxjJylcclxuICAgIHRlbXBlcmF0dXJDZWxjLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24udGVtcEN9IMKwQ2BcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJGYXJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXJlbicpXHJcbiAgICB0ZW1wZXJhdHVyRmFyZW4udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi50ZW1wRn0gwrBGYFxyXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JylcclxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBsb2NhdGlvbi5jaXR5XHJcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKVxyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IGBUaW1lOiAke2xvY2F0aW9uLnRpbWV9YFxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJylcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgRGF0ZTogJHtsb2NhdGlvbi5kYXRlfWBcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7bG9jYXRpb24ud2luZH0ga3BoYFxyXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKVxyXG4gICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7bG9jYXRpb24ucHJlc3N1cmV9IG1iYFxyXG4gICAgY29uc3QgaHVtbWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bW1pZGl0eScpXHJcbiAgICBodW1taWRpdHkudGV4dENvbnRlbnQgPSBgSHVtbWlkaXR5OiAke2xvY2F0aW9uLmh1bWlkaXR5fSAlYFxyXG59XHJcblxyXG4iLCJpbXBvcnQgYXBpQ2FsbCBmcm9tIFwiLi9mZXRjaEFQSVwiO1xyXG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCB7IGxvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb25EYXRhXCI7XHJcbmltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XHJcbmltcG9ydCB7IGNoYW5nZVRlbXBGYXJlbkNlbGMgfSBmcm9tIFwiLi90ZW1wRkNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmxvdyA9IGFzeW5jICgpID0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpQ2FsbCgpXHJcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGxvY2F0aW9uKGRhdGEpXHJcbiAgICB1aShuZXdMb2NhdGlvbilcclxuICAgIGZvcm0oKSAgXHJcbiAgICBjaGFuZ2VUZW1wRmFyZW5DZWxjXHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlciA9ICgoKT0+e1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludmFsaWQnKVxyXG5cclxuXHJcbiAgICBjb25zdCB3cm9uZ0NpdHkgPSAoKT0+e1xyXG4gICAgICAgIGVycm9yTWVzc2FnZURpdi5pbm5lclRleHQgPSAnVGhlcmUgaXMgbm8gc3VjaCBDaXR5J1xyXG4gICAgICAgIGVycm9yTWVzc2FnZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3RoZXJFcnJvcnMgPSAoKT0+e1xyXG4gICAgICAgIGVycm9yTWVzc2FnZURpdi5pbm5lclRleHQgPSBlcnJvclxyXG4gICAgICAgIGVycm9yTWVzc2FnZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue3dyb25nQ2l0eSwgb3RoZXJFcnJvcnN9XHJcbn0pKCkiLCJpbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tIFwiLi9lcnJvckhhbmRsaW5nXCI7XHJcbmltcG9ydCBsb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcclxuXHJcbmNvbnN0IGFwaUNhbGwgPSBhc3luYyAobG9jYXRpb24gPSBcIndhcnNhd1wiKSA9PiB7XHJcbiAgICBsb2FkaW5nLnN0YXJ0TG9hZGluZygpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTMzNDRkNTdmZjM4MTQ2OTRhNzg5NTg0OTIzMjAwNCZxPSR7bG9jYXRpb259YFxyXG4gICAgKTtcclxuICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgbG9hZGluZy5zdG9wTG9hZGluZygpXHJcbiAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBlcnJvckhhbmRsZXIud3JvbmdDaXR5KClcclxuICAgICAgbG9hZGluZy5zdG9wTG9hZGluZygpXHJcbiAgICB9XHJcbiAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JIYW5kbGVyLm90aGVyRXJyb3JzKClcclxuICAgIGxvYWRpbmcuc3RvcExvYWRpbmcoKVxyXG4gIH1cclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaUNhbGw7XHJcblxyXG4iLCJpbXBvcnQgYXBpQ2FsbCBmcm9tIFwiLi9mZXRjaEFQSVwiO1xyXG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCB7IGxvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb25EYXRhXCI7XHJcbmltcG9ydCB7IGNoYW5nZVN0eWxlT25XZWF0aGVyIH0gZnJvbSBcIi4vc3R5bGVvbldlYXRoZXJcIjtcclxuaW1wb3J0IHsgZnJvbVZhbGlkaXR5IH0gZnJvbSBcIi4vZm9ybVZhbGlkYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICBsZXQgY2l0eTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNpdHkgPSBlLnRhcmdldFswXS52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSBmcm9tVmFsaWRpdHkoY2l0eSk7XHJcbiAgICBpZiAodmFsaWRhdGlvbikge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpQ2FsbChjaXR5KTtcclxuICAgICAgY29uc3QgbmV3TG9jYXRpb24gPSBsb2NhdGlvbihkYXRhKTtcclxuICAgICAgdWkobmV3TG9jYXRpb24pO1xyXG4gICAgICBjaGFuZ2VTdHlsZU9uV2VhdGhlcihkYXRhKTtcclxuICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZnJvbVZhbGlkaXR5ID0gKGZvcm0pID0+IHtcclxuICBjb25zdCB2YWxpZGF0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnZhbGlkXCIpO1xyXG4gIHZhbGlkYXRpb25EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGlmIChmb3JtLmxlbmd0aCA8IDEpIHtcclxuICAgIHZhbGlkYXRpb25EaXYudGV4dENvbnRlbnQgPSBcImlucHV0IHRvbyBzaG9ydCAobWluaWFsIDEgbGV0dGVyKVwiO1xyXG4gICAgdmFsaWRhdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufTtcclxuIiwiY29uc3QgbG9hZGluZyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwibG9hZGluZy4uLlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwic2VhcmNoXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgc3RhcnRMb2FkaW5nLCBzdG9wTG9hZGluZyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZztcclxuIiwiZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gKGRhdGEpID0+IHtcclxuXHJcbiAgICBjb25zdCBjaXR5ID0gZGF0YS5sb2NhdGlvbi5uYW1lXHJcbiAgICBjb25zdCB0aW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoLTYpXHJcbiAgICBjb25zdCBkYXRlID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoOCwxMCkrZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoNCw4KStkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgwLDQpXHJcbiAgICBjb25zdCB3aGVhdGhlciA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dFxyXG4gICAgY29uc3QgdGVtcEMgPSBkYXRhLmN1cnJlbnQudGVtcF9jXHJcbiAgICBjb25zdCB0ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2ZcclxuICAgIGNvbnN0IHdpbmQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGhcclxuICAgIGNvbnN0IHByZXNzdXJlID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iXHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eVxyXG4gICAgY29uc3QgaWNvbiA9IGAuL2ljb25zLyR7ZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLnNsaWNlKC03KX1gXHJcblxyXG4gICAgcmV0dXJuIHtjaXR5LCB0aW1lLCBkYXRlLCB3aGVhdGhlciwgdGVtcEMsIHRlbXBGLCB3aW5kLCBwcmVzc3VyZSwgaHVtaWRpdHksIGljb259XHJcbn1cclxuXHJcblxyXG4iLCJjb25zdCBzdW5ueVdlYXRoZXIgPSBbJ0NsZWFyJywgJ1N1bm55J107XHJcbmNvbnN0IGNsb3VkeVdlYXRoZXIgPSBbJ1BhcnRseSBjbG91ZHknLCAnQ2xvdWR5JywgJ092ZXJjYXN0JywgJ01pc3QnLCAnRm9nJywgJ0ZyZWV6aW5nIGZvZyddO1xyXG5jb25zdCByYWlueVdlYXRoZXIgPSBbJ1BhdGNoeSByYWluIHBvc3NpYmxlJywgJ1BhdGNoeSBsaWdodCBkcml6emxlJywgJ0xpZ2h0IGRyaXp6bGUnLCAnRnJlZXppbmcgZHJpenpsZScsICdIZWF2eSBmcmVlemluZyBkcml6emxlJywgJ1BhdGNoeSBsaWdodCByYWluJywgJ0xpZ2h0IHJhaW4nLCAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycsICdNb2RlcmF0ZSByYWluJywgJ0hlYXZ5IHJhaW4gYXQgdGltZXMnLCAnSGVhdnkgcmFpbicsICdMaWdodCBmcmVlemluZyByYWluJywgJ01vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW4nLCAnTGlnaHQgcmFpbiBzaG93ZXInLCAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInLCAnVG9ycmVudGlhbCByYWluIHNob3dlcicsICdQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXInLCAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInXTtcclxuY29uc3Qgc25vd3lXZWF0aGVyID0gWydQYXRjaHkgc25vdyBwb3NzaWJsZScsICdQYXRjaHkgc2xlZXQgcG9zc2libGUnLCAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnLCAnQmxvd2luZyBzbm93JywgJ0JsaXp6YXJkJywgJ0xpZ2h0IHNsZWV0JywgJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0JywgJ1BhdGNoeSBsaWdodCBzbm93JywgJ0xpZ2h0IHNub3cnLCAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnLCAnTW9kZXJhdGUgc25vdycsICdQYXRjaHkgaGVhdnkgc25vdycsICdIZWF2eSBzbm93J11cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VTdHlsZU9uV2VhdGhlciA9IChsb2NhdGlvbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXIgPSBsb2NhdGlvbi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuXHJcblxyXG4gICAgaWYoc3VubnlXZWF0aGVyLmluY2x1ZGVzKHdlYXRoZXIpKXtcclxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3RlciBzdW5ueSdcclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lciBzdW5ueSdcclxuICAgIH1cclxuICAgIGVsc2UgaWYoY2xvdWR5V2VhdGhlci5pbmNsdWRlcyh3ZWF0aGVyKSl7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXIgY2xvdWR5J1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyIGNsb3VkeSdcclxuICAgIH1cclxuICAgIGVsc2UgaWYocmFpbnlXZWF0aGVyLmluY2x1ZGVzKHdlYXRoZXIpKXtcclxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3RlciByYWlueSdcclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lciByYWlueSdcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc25vd3lXZWF0aGVyLmluY2x1ZGVzKHdlYXRoZXIpKXtcclxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3RlciBzbm93eSdcclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lciBzbm93eSdcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY29uc3QgY2hhbmdlVGVtcEZhcmVuQ2VsYyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjZWxjaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGMnKVxyXG4gICAgY29uc3QgZmFyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcmVuJylcclxuXHJcbiAgICBjb25zdCB0b2dnbGVUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGNmYXJlbicpXHJcblxyXG4gICAgdG9nZ2xlVGVtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY2VsY2l1cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgIGZhcmVuaGVpdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmxvdyB9IGZyb20gXCIuL2RvY3VtZW50Rmxvd1wiXHJcblxyXG5mbG93KClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9