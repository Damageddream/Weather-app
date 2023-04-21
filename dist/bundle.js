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





const flow = async () =>{
    
    const data = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const newLocation = (0,_locationData__WEBPACK_IMPORTED_MODULE_2__.location)(data)
    ;(0,_UI__WEBPACK_IMPORTED_MODULE_1__.ui)(newLocation)
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.form)()  

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




const form = () => {
    const form = document.querySelector('form')
    let city;
    form.addEventListener('submit',async (e)=>{
        e.preventDefault()
        city = e.target[0].value.toLowerCase().trim()
        const data = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
        const newLocation = (0,_locationData__WEBPACK_IMPORTED_MODULE_2__.location)(data)
        ;(0,_UI__WEBPACK_IMPORTED_MODULE_1__.ui)(newLocation)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBLHFDQUFxQyxnQkFBZ0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCaUM7QUFDUDtBQUNnQjtBQUNaO0FBQzlCO0FBQ087QUFDUDtBQUNBLHVCQUF1QixxREFBTztBQUM5Qix3QkFBd0IsdURBQVE7QUFDaEMsSUFBSSx3Q0FBRTtBQUNOLElBQUksNENBQUk7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsU0FBUztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCaUM7QUFDUDtBQUNnQjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxREFBTztBQUNsQyw0QkFBNEIsdURBQVE7QUFDcEMsUUFBUSx3Q0FBRTtBQUNWLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDO0FBQ2xFO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0EsbURBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvY3VtZW50Rmxvdy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaEFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1aSA9IChsb2NhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXHJcbiAgICBpY29uLnNyYyA9IGxvY2F0aW9uLmljb25cclxuICAgIGNvbnN0IHdoZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoZWF0aGVyJylcclxuICAgIHdoZWF0aGVyLnRleHRDb250ZW50ID0gbG9jYXRpb24ud2hlYXRoZXJcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJDZWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGMnKVxyXG4gICAgdGVtcGVyYXR1ckNlbGMudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi50ZW1wQ30gwrBDYFxyXG4gICAgY29uc3QgdGVtcGVyYXR1ckZhcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcmVuJylcclxuICAgIHRlbXBlcmF0dXJGYXJlbi50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLnRlbXBGfSDCsEZgXHJcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKVxyXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLmNpdHlcclxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpXHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gYFRpbWU6ICR7bG9jYXRpb24udGltZX1gXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKVxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke2xvY2F0aW9uLmRhdGV9YFxyXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJylcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHtsb2NhdGlvbi53aW5kfSBrcGhgXHJcbiAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpXHJcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtsb2NhdGlvbi5wcmVzc3VyZX0gbWJgXHJcbiAgICBjb25zdCBodW1taWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtbWlkaXR5JylcclxuICAgIGh1bW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1taWRpdHk6ICR7bG9jYXRpb24uaHVtaWRpdHl9ICVgXHJcbn1cclxuXHJcbiIsImltcG9ydCBhcGlDYWxsIGZyb20gXCIuL2ZldGNoQVBJXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0IHsgbG9jYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbkRhdGFcIjtcclxuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmbG93ID0gYXN5bmMgKCkgPT57XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlDYWxsKClcclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gbG9jYXRpb24oZGF0YSlcclxuICAgIHVpKG5ld0xvY2F0aW9uKVxyXG4gICAgZm9ybSgpICBcclxuXHJcbn0iLCJcclxuY29uc3QgYXBpQ2FsbCA9IGFzeW5jIChsb2NhdGlvbiA9IFwid2Fyc2F3XCIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzdGFydGVkJylcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MzM0NGQ1N2ZmMzgxNDY5NGE3ODk1ODQ5MjMyMDA0JnE9JHtsb2NhdGlvbn1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZygnZmluc2hlZCcpXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlDYWxsO1xyXG5cclxuIiwiaW1wb3J0IGFwaUNhbGwgZnJvbSBcIi4vZmV0Y2hBUElcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgeyBsb2NhdGlvbiB9IGZyb20gXCIuL2xvY2F0aW9uRGF0YVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXHJcbiAgICBsZXQgY2l0eTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jyxhc3luYyAoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjaXR5ID0gZS50YXJnZXRbMF0udmFsdWUudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpQ2FsbChjaXR5KVxyXG4gICAgICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gbG9jYXRpb24oZGF0YSlcclxuICAgICAgICB1aShuZXdMb2NhdGlvbilcclxuICAgIH0pXHJcbiAgICBcclxufSIsImV4cG9ydCBjb25zdCBsb2NhdGlvbiA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2l0eSA9IGRhdGEubG9jYXRpb24ubmFtZVxyXG4gICAgY29uc3QgdGltZSA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKC02KVxyXG4gICAgY29uc3QgZGF0ZSA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKDgsMTApK2RhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKDQsOCkrZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoMCw0KVxyXG4gICAgY29uc3Qgd2hlYXRoZXIgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcclxuICAgIGNvbnN0IHRlbXBDID0gZGF0YS5jdXJyZW50LnRlbXBfY1xyXG4gICAgY29uc3QgdGVtcEYgPSBkYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICBjb25zdCB3aW5kID0gZGF0YS5jdXJyZW50LndpbmRfa3BoXHJcbiAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYlxyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHlcclxuICAgIGNvbnN0IGljb24gPSBgLi9pY29ucy8ke2RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbi5zbGljZSgtNyl9YFxyXG5cclxuICAgIHJldHVybiB7Y2l0eSwgdGltZSwgZGF0ZSwgd2hlYXRoZXIsIHRlbXBDLCB0ZW1wRiwgd2luZCwgcHJlc3N1cmUsIGh1bWlkaXR5LCBpY29ufVxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmbG93IH0gZnJvbSBcIi4vZG9jdW1lbnRGbG93XCJcclxuXHJcbmZsb3coKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==