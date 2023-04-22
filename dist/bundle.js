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

/***/ "./src/fetchAPI.js":
/*!*************************!*\
  !*** ./src/fetchAPI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const apiCall = async (location = "warsaw") => {
    console.log('started')
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3344d57ff3814694a7895849232004&q=${location}`
    );
    const data = await response.json();
    console.log(data)
    console.log('finshed')
    return data
  } catch (error) {
    return false
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





const form = () => {
    const form = document.querySelector('form')
    let city;
    form.addEventListener('submit',async (e)=>{
        e.preventDefault()
        city = e.target[0].value.toLowerCase().trim()
        const data = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
        const newLocation = (0,_locationData__WEBPACK_IMPORTED_MODULE_2__.location)(data)
        ;(0,_UI__WEBPACK_IMPORTED_MODULE_1__.ui)(newLocation)
        ;(0,_styleonWeather__WEBPACK_IMPORTED_MODULE_3__.changeStyleOnWeather)(data)
        
    })
    
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBLHFDQUFxQyxnQkFBZ0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmlDO0FBQ1A7QUFDZ0I7QUFDWjtBQUNpQjtBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBLHVCQUF1QixxREFBTztBQUM5Qix3QkFBd0IsdURBQVE7QUFDaEMsSUFBSSx3Q0FBRTtBQUNOLElBQUksNENBQUk7QUFDUixJQUFJLHdEQUFtQjtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsU0FBUztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmlDO0FBQ1A7QUFDZ0I7QUFDYztBQUN4RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxREFBTztBQUNsQyw0QkFBNEIsdURBQVE7QUFDcEMsUUFBUSx3Q0FBRTtBQUNWLFFBQVEsc0VBQW9CO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDO0FBQ2xFO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQztBQUNyQztBQUNBLG1EQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9jdW1lbnRGbG93LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYXRpb25EYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlb25XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBGQy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1aSA9IChsb2NhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXHJcbiAgICBpY29uLnNyYyA9IGxvY2F0aW9uLmljb25cclxuICAgIGNvbnN0IHdoZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoZWF0aGVyJylcclxuICAgIHdoZWF0aGVyLnRleHRDb250ZW50ID0gbG9jYXRpb24ud2hlYXRoZXJcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJDZWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGMnKVxyXG4gICAgdGVtcGVyYXR1ckNlbGMudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi50ZW1wQ30gwrBDYFxyXG4gICAgY29uc3QgdGVtcGVyYXR1ckZhcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcmVuJylcclxuICAgIHRlbXBlcmF0dXJGYXJlbi50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLnRlbXBGfSDCsEZgXHJcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKVxyXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLmNpdHlcclxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpXHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gYFRpbWU6ICR7bG9jYXRpb24udGltZX1gXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKVxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke2xvY2F0aW9uLmRhdGV9YFxyXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJylcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHtsb2NhdGlvbi53aW5kfSBrcGhgXHJcbiAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpXHJcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtsb2NhdGlvbi5wcmVzc3VyZX0gbWJgXHJcbiAgICBjb25zdCBodW1taWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtbWlkaXR5JylcclxuICAgIGh1bW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1taWRpdHk6ICR7bG9jYXRpb24uaHVtaWRpdHl9ICVgXHJcbn1cclxuXHJcbiIsImltcG9ydCBhcGlDYWxsIGZyb20gXCIuL2ZldGNoQVBJXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0IHsgbG9jYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbkRhdGFcIjtcclxuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IHsgY2hhbmdlVGVtcEZhcmVuQ2VsYyB9IGZyb20gXCIuL3RlbXBGQ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmbG93ID0gYXN5bmMgKCkgPT57XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlDYWxsKClcclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gbG9jYXRpb24oZGF0YSlcclxuICAgIHVpKG5ld0xvY2F0aW9uKVxyXG4gICAgZm9ybSgpICBcclxuICAgIGNoYW5nZVRlbXBGYXJlbkNlbGNcclxuXHJcbn0iLCJcclxuY29uc3QgYXBpQ2FsbCA9IGFzeW5jIChsb2NhdGlvbiA9IFwid2Fyc2F3XCIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzdGFydGVkJylcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MzM0NGQ1N2ZmMzgxNDY5NGE3ODk1ODQ5MjMyMDA0JnE9JHtsb2NhdGlvbn1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZygnZmluc2hlZCcpXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlDYWxsO1xyXG5cclxuIiwiaW1wb3J0IGFwaUNhbGwgZnJvbSBcIi4vZmV0Y2hBUElcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgeyBsb2NhdGlvbiB9IGZyb20gXCIuL2xvY2F0aW9uRGF0YVwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VTdHlsZU9uV2VhdGhlciB9IGZyb20gXCIuL3N0eWxlb25XZWF0aGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcclxuICAgIGxldCBjaXR5O1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGFzeW5jIChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNpdHkgPSBlLnRhcmdldFswXS52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlDYWxsKGNpdHkpXHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb24gPSBsb2NhdGlvbihkYXRhKVxyXG4gICAgICAgIHVpKG5ld0xvY2F0aW9uKVxyXG4gICAgICAgIGNoYW5nZVN0eWxlT25XZWF0aGVyKGRhdGEpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbn0iLCJleHBvcnQgY29uc3QgbG9jYXRpb24gPSAoZGF0YSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNpdHkgPSBkYXRhLmxvY2F0aW9uLm5hbWVcclxuICAgIGNvbnN0IHRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgtNilcclxuICAgIGNvbnN0IGRhdGUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSg4LDEwKStkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSg0LDgpK2RhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKDAsNClcclxuICAgIGNvbnN0IHdoZWF0aGVyID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XHJcbiAgICBjb25zdCB0ZW1wQyA9IGRhdGEuY3VycmVudC50ZW1wX2NcclxuICAgIGNvbnN0IHRlbXBGID0gZGF0YS5jdXJyZW50LnRlbXBfZlxyXG4gICAgY29uc3Qgd2luZCA9IGRhdGEuY3VycmVudC53aW5kX2twaFxyXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5XHJcbiAgICBjb25zdCBpY29uID0gYC4vaWNvbnMvJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24uc2xpY2UoLTcpfWBcclxuXHJcbiAgICByZXR1cm4ge2NpdHksIHRpbWUsIGRhdGUsIHdoZWF0aGVyLCB0ZW1wQywgdGVtcEYsIHdpbmQsIHByZXNzdXJlLCBodW1pZGl0eSwgaWNvbn1cclxufVxyXG5cclxuXHJcbiIsImNvbnN0IHN1bm55V2VhdGhlciA9IFsnQ2xlYXInLCAnU3VubnknXTtcclxuY29uc3QgY2xvdWR5V2VhdGhlciA9IFsnUGFydGx5IGNsb3VkeScsICdDbG91ZHknLCAnT3ZlcmNhc3QnLCAnTWlzdCcsICdGb2cnLCAnRnJlZXppbmcgZm9nJ107XHJcbmNvbnN0IHJhaW55V2VhdGhlciA9IFsnUGF0Y2h5IHJhaW4gcG9zc2libGUnLCAnUGF0Y2h5IGxpZ2h0IGRyaXp6bGUnLCAnTGlnaHQgZHJpenpsZScsICdGcmVlemluZyBkcml6emxlJywgJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnLCAnUGF0Y2h5IGxpZ2h0IHJhaW4nLCAnTGlnaHQgcmFpbicsICdNb2RlcmF0ZSByYWluIGF0IHRpbWVzJywgJ01vZGVyYXRlIHJhaW4nLCAnSGVhdnkgcmFpbiBhdCB0aW1lcycsICdIZWF2eSByYWluJywgJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nLCAnTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpbicsICdMaWdodCByYWluIHNob3dlcicsICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcicsICdUb3JyZW50aWFsIHJhaW4gc2hvd2VyJywgJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcicsICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlciddO1xyXG5jb25zdCBzbm93eVdlYXRoZXIgPSBbJ1BhdGNoeSBzbm93IHBvc3NpYmxlJywgJ1BhdGNoeSBzbGVldCBwb3NzaWJsZScsICdQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZScsICdCbG93aW5nIHNub3cnLCAnQmxpenphcmQnLCAnTGlnaHQgc2xlZXQnLCAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQnLCAnUGF0Y2h5IGxpZ2h0IHNub3cnLCAnTGlnaHQgc25vdycsICdQYXRjaHkgbW9kZXJhdGUgc25vdycsICdNb2RlcmF0ZSBzbm93JywgJ1BhdGNoeSBoZWF2eSBzbm93JywgJ0hlYXZ5IHNub3cnXVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVN0eWxlT25XZWF0aGVyID0gKGxvY2F0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlciA9IGxvY2F0aW9uLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJylcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG5cclxuXHJcbiAgICBpZihzdW5ueVdlYXRoZXIuaW5jbHVkZXMod2VhdGhlcikpe1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyIHN1bm55J1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyIHN1bm55J1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihjbG91ZHlXZWF0aGVyLmluY2x1ZGVzKHdlYXRoZXIpKXtcclxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3RlciBjbG91ZHknXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXIgY2xvdWR5J1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihyYWlueVdlYXRoZXIuaW5jbHVkZXMod2VhdGhlcikpe1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyIHJhaW55J1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyIHJhaW55J1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzbm93eVdlYXRoZXIuaW5jbHVkZXMod2VhdGhlcikpe1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyIHNub3d5J1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyIHNub3d5J1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjb25zdCBjaGFuZ2VUZW1wRmFyZW5DZWxjID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNlbGNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VsYycpXHJcbiAgICBjb25zdCBmYXJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFyZW4nKVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VsY2ZhcmVuJylcclxuXHJcbiAgICB0b2dnbGVUZW1wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBjZWxjaXVzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgZmFyZW5oZWl0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmbG93IH0gZnJvbSBcIi4vZG9jdW1lbnRGbG93XCJcclxuXHJcbmZsb3coKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=