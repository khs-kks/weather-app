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
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _weather_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-class */ "./src/weather-class.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".close");
var searchBar = document.querySelector("#search");
var searchButton = document.querySelector(".search-button");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var tempResult = document.querySelector(".temp-result");
var humidityResult = document.querySelector(".hum-result");
var feelsResult = document.querySelector(".feels-result");
var skyResult = document.querySelector(".sky-result");

// const responseTime = document.querySelector(".fetch-time");

var celsiusOption = document.querySelector("#option1");
var fahrenheitOption = document.querySelector("#option2");
var celsiusSymbol = String.fromCharCode(8451);
var fahrenheitSymbol = String.fromCharCode(8457);
var weatherObject;
var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }
  _createClass(UI, null, [{
    key: "init",
    value: function init() {
      UI.addListeners();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      document.addEventListener("DOMContentLoaded", function () {
        document.body.classList.add("show");
      });
      closeModal.addEventListener("click", UI.hideModal);
      document.addEventListener("keydown", UI.hideModal);
      modal.addEventListener("click", UI.hideModal);
      searchButton.addEventListener("click", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
          var normalizedSearch;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                normalizedSearch = UI.normalizeSearch(searchBar.value);
                if (!normalizedSearch.length) {
                  normalizedSearch = "sofia";
                }
                _context.prev = 3;
                _context.next = 6;
                return _weather_class__WEBPACK_IMPORTED_MODULE_0__["default"].getWeather(normalizedSearch);
              case 6:
                weatherObject = _context.sent;
                if (weatherObject instanceof _weather_class__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                  UI.render();
                }
                _context.next = 13;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                console.log("Weather object is not returned");
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[3, 10]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      celsiusOption.addEventListener("click", UI.setTemperatureUnit);
      fahrenheitOption.addEventListener("click", UI.setTemperatureUnit);
    }
  }, {
    key: "hideModal",
    value: function hideModal(event) {
      if (event.key === "Escape" || event.target === modal || event.target === closeModal) {
        modal.style.display = "none";
      }
    }
  }, {
    key: "normalizeSearch",
    value: function normalizeSearch(query) {
      return query.trim().toLowerCase().replace(/\s+/g, "+");
    }
  }, {
    key: "setTemperatureUnit",
    value: function setTemperatureUnit(event) {
      if (weatherObject instanceof _weather_class__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        UI.temperatureUnit = event.target.value;
        UI.render();
      }
    }
  }, {
    key: "celsiusToFahrenheit",
    value: function celsiusToFahrenheit(tempCelsius) {
      // const cleanedTemp = tempCelsius.replace(/[^\d.]/g, "");
      return (tempCelsius * 9 / 5 + 32).toFixed(1);
    }
  }, {
    key: "render",
    value: function render() {
      // if (fahrenheitOption.checked) {
      //   tempResult.textContent = `${UI.celsiusToFahrenheit(
      //     weatherObject.temp
      //   )}${fahrenheitSymbol}`;

      //   feelsResult.textContent = `${UI.celsiusToFahrenheit(
      //     weatherObject.feelsLike
      //   )}${fahrenheitSymbol}`;
      // } else {
      //   tempResult.textContent = weatherObject.temp + celsiusSymbol;

      //   feelsResult.textContent = weatherObject.feelsLike + celsiusSymbol;
      // }

      if (UI.temperatureUnit === "fahrenheit") {
        tempResult.textContent = "".concat(UI.celsiusToFahrenheit(weatherObject.temp)).concat(fahrenheitSymbol);
        feelsResult.textContent = "".concat(UI.celsiusToFahrenheit(weatherObject.feelsLike)).concat(fahrenheitSymbol);
      } else {
        tempResult.textContent = weatherObject.temp + celsiusSymbol;
        feelsResult.textContent = weatherObject.feelsLike + celsiusSymbol;
      }
      city.textContent = weatherObject.name;
      country.textContent = weatherObject.country;
      // tempResult.textContent = weatherObject.temp;
      // feelsResult.textContent = weatherObject.feelsLike;
      humidityResult.textContent = weatherObject.humidity;
      skyResult.textContent = weatherObject.forecast;
    }
  }]);
  return UI;
}();
_defineProperty(UI, "temperatureUnit", "celsius");


/***/ }),

/***/ "./src/weather-class.js":
/*!******************************!*\
  !*** ./src/weather-class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Weather = /*#__PURE__*/function () {
  function Weather(weatherCity) {
    _classCallCheck(this, Weather);
    this.temp = weatherCity.main.temp;
    this.feelsLike = weatherCity.main.feels_like;
    this.humidity = weatherCity.main.humidity;
    this.country = weatherCity.sys.country;
    this.name = weatherCity.name;
    this.forecast = weatherCity.weather[0].main;
  }
  _createClass(Weather, null, [{
    key: "getWeather",
    value: function () {
      var _getWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cityName) {
        var startTime, coordinates, weatherPromise, weatherData, endTime, timeTaken;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              startTime = performance.now();
              _context.prev = 1;
              _context.next = 4;
              return fetch("../weather_testing/landstuhl-coords.json", {
                mode: "cors"
              });
            case 4:
              coordinates = _context.sent;
              _context.next = 7;
              return fetch("../weather_testing/landstuhl-data.json", {
                mode: "cors"
              });
            case 7:
              weatherPromise = _context.sent;
              _context.next = 10;
              return weatherPromise.json();
            case 10:
              weatherData = _context.sent;
              endTime = performance.now();
              timeTaken = (endTime - startTime) / 1000;
              document.querySelector(".fetch-time").textContent = "Response time: ".concat(timeTaken.toFixed(3), "s");
              if (!weatherData) {
                _context.next = 16;
                break;
              }
              return _context.abrupt("return", new Weather(weatherData));
            case 16:
              _context.next = 23;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              document.querySelector(".modal").style.display = "block";
              document.querySelector(".error-code").textContent = _context.t0.code;
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 18]]);
      }));
      function getWeather(_x) {
        return _getWeather.apply(this, arguments);
      }
      return getWeather;
    }()
  }]);
  return Weather;
}();


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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _weather_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-class */ "./src/weather-class.js");


_UI__WEBPACK_IMPORTED_MODULE_0__["default"].init();
_weather_class__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather("Landstuhl");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87Y0FDeER2QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzhDLFdBQVcsR0FBRyxZQUFNd0IsSUFBSTtZQUFDO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQSxDQUVsRTtNQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7Ozs7Ozs7VUM3Q0g7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDZ0I7QUFHdENyRCxnREFBTyxFQUFFO0FBQ1RwQixpRUFBa0IsQ0FBQyxXQUFXLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyLWNsYXNzXCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xuXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJ1dHRvblwiKTtcblxuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cnlcIik7XG5jb25zdCB0ZW1wUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXJlc3VsdFwiKTtcbmNvbnN0IGh1bWlkaXR5UmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW0tcmVzdWx0XCIpO1xuY29uc3QgZmVlbHNSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLXJlc3VsdFwiKTtcbmNvbnN0IHNreVJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2t5LXJlc3VsdFwiKTtcblxuLy8gY29uc3QgcmVzcG9uc2VUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZXRjaC10aW1lXCIpO1xuXG5jb25zdCBjZWxzaXVzT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpb24xXCIpO1xuY29uc3QgZmFocmVuaGVpdE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW9uMlwiKTtcblxuY29uc3QgY2Vsc2l1c1N5bWJvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoODQ1MSk7XG5jb25zdCBmYWhyZW5oZWl0U3ltYm9sID0gU3RyaW5nLmZyb21DaGFyQ29kZSg4NDU3KTtcblxubGV0IHdlYXRoZXJPYmplY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIHRlbXBlcmF0dXJlVW5pdCA9IFwiY2Vsc2l1c1wiO1xuXG4gIHN0YXRpYyBpbml0KCkge1xuICAgIFVJLmFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgc3RhdGljIGFkZExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuaGlkZU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIFVJLmhpZGVNb2RhbCk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuaGlkZU1vZGFsKTtcblxuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IG5vcm1hbGl6ZWRTZWFyY2ggPSBVSS5ub3JtYWxpemVTZWFyY2goc2VhcmNoQmFyLnZhbHVlKTtcbiAgICAgIGlmICghbm9ybWFsaXplZFNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgbm9ybWFsaXplZFNlYXJjaCA9IFwic29maWFcIjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHdlYXRoZXJPYmplY3QgPSBhd2FpdCBXZWF0aGVyLmdldFdlYXRoZXIobm9ybWFsaXplZFNlYXJjaCk7XG4gICAgICAgIGlmICh3ZWF0aGVyT2JqZWN0IGluc3RhbmNlb2YgV2VhdGhlcikge1xuICAgICAgICAgIFVJLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldlYXRoZXIgb2JqZWN0IGlzIG5vdCByZXR1cm5lZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNlbHNpdXNPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnNldFRlbXBlcmF0dXJlVW5pdCk7XG5cbiAgICBmYWhyZW5oZWl0T3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5zZXRUZW1wZXJhdHVyZVVuaXQpO1xuICB9XG5cbiAgc3RhdGljIGhpZGVNb2RhbChldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fFxuICAgICAgZXZlbnQudGFyZ2V0ID09PSBtb2RhbCB8fFxuICAgICAgZXZlbnQudGFyZ2V0ID09PSBjbG9zZU1vZGFsXG4gICAgKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5vcm1hbGl6ZVNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiK1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRUZW1wZXJhdHVyZVVuaXQoZXZlbnQpIHtcbiAgICBpZiAod2VhdGhlck9iamVjdCBpbnN0YW5jZW9mIFdlYXRoZXIpIHtcbiAgICAgIFVJLnRlbXBlcmF0dXJlVW5pdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIFVJLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjZWxzaXVzVG9GYWhyZW5oZWl0KHRlbXBDZWxzaXVzKSB7XG4gICAgLy8gY29uc3QgY2xlYW5lZFRlbXAgPSB0ZW1wQ2Vsc2l1cy5yZXBsYWNlKC9bXlxcZC5dL2csIFwiXCIpO1xuICAgIHJldHVybiAoKHRlbXBDZWxzaXVzICogOSkgLyA1ICsgMzIpLnRvRml4ZWQoMSk7XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyKCkge1xuICAgIC8vIGlmIChmYWhyZW5oZWl0T3B0aW9uLmNoZWNrZWQpIHtcbiAgICAvLyAgIHRlbXBSZXN1bHQudGV4dENvbnRlbnQgPSBgJHtVSS5jZWxzaXVzVG9GYWhyZW5oZWl0KFxuICAgIC8vICAgICB3ZWF0aGVyT2JqZWN0LnRlbXBcbiAgICAvLyAgICl9JHtmYWhyZW5oZWl0U3ltYm9sfWA7XG5cbiAgICAvLyAgIGZlZWxzUmVzdWx0LnRleHRDb250ZW50ID0gYCR7VUkuY2Vsc2l1c1RvRmFocmVuaGVpdChcbiAgICAvLyAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICAvLyAgICl9JHtmYWhyZW5oZWl0U3ltYm9sfWA7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRlbXBSZXN1bHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LnRlbXAgKyBjZWxzaXVzU3ltYm9sO1xuXG4gICAgLy8gICBmZWVsc1Jlc3VsdC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlICsgY2Vsc2l1c1N5bWJvbDtcbiAgICAvLyB9XG5cbiAgICBpZiAoVUkudGVtcGVyYXR1cmVVbml0ID09PSBcImZhaHJlbmhlaXRcIikge1xuICAgICAgdGVtcFJlc3VsdC50ZXh0Q29udGVudCA9IGAke1VJLmNlbHNpdXNUb0ZhaHJlbmhlaXQoXG4gICAgICAgIHdlYXRoZXJPYmplY3QudGVtcFxuICAgICAgKX0ke2ZhaHJlbmhlaXRTeW1ib2x9YDtcblxuICAgICAgZmVlbHNSZXN1bHQudGV4dENvbnRlbnQgPSBgJHtVSS5jZWxzaXVzVG9GYWhyZW5oZWl0KFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICAgKX0ke2ZhaHJlbmhlaXRTeW1ib2x9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcFJlc3VsdC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QudGVtcCArIGNlbHNpdXNTeW1ib2w7XG4gICAgICBmZWVsc1Jlc3VsdC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlICsgY2Vsc2l1c1N5bWJvbDtcbiAgICB9XG5cbiAgICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlck9iamVjdC5uYW1lO1xuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LmNvdW50cnk7XG4gICAgLy8gdGVtcFJlc3VsdC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QudGVtcDtcbiAgICAvLyBmZWVsc1Jlc3VsdC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlO1xuICAgIGh1bWlkaXR5UmVzdWx0LnRleHRDb250ZW50ID0gd2VhdGhlck9iamVjdC5odW1pZGl0eTtcbiAgICBza3lSZXN1bHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LmZvcmVjYXN0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3Iod2VhdGhlckNpdHkpIHtcbiAgICB0aGlzLnRlbXAgPSB3ZWF0aGVyQ2l0eS5tYWluLnRlbXA7XG4gICAgdGhpcy5mZWVsc0xpa2UgPSB3ZWF0aGVyQ2l0eS5tYWluLmZlZWxzX2xpa2U7XG4gICAgdGhpcy5odW1pZGl0eSA9IHdlYXRoZXJDaXR5Lm1haW4uaHVtaWRpdHk7XG4gICAgdGhpcy5jb3VudHJ5ID0gd2VhdGhlckNpdHkuc3lzLmNvdW50cnk7XG4gICAgdGhpcy5uYW1lID0gd2VhdGhlckNpdHkubmFtZTtcbiAgICB0aGlzLmZvcmVjYXN0ID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5tYWluO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFdlYXRoZXIoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcIi4uL3dlYXRoZXJfdGVzdGluZy9sYW5kc3R1aGwtY29vcmRzLmpzb25cIixcbiAgICAgICAge1xuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3Qgd2VhdGhlclByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCIuLi93ZWF0aGVyX3Rlc3RpbmcvbGFuZHN0dWhsLWRhdGEuanNvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclByb21pc2UuanNvbigpO1xuXG4gICAgICBjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBjb25zdCB0aW1lVGFrZW4gPSAoZW5kVGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5mZXRjaC10aW1lXCJcbiAgICAgICkudGV4dENvbnRlbnQgPSBgUmVzcG9uc2UgdGltZTogJHt0aW1lVGFrZW4udG9GaXhlZCgzKX1zYDtcblxuICAgICAgaWYgKHdlYXRoZXJEYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgcmV0dXJuIG5ldyBXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1jb2RlXCIpLnRleHRDb250ZW50ID0gZXJyb3IuY29kZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL1VJXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyLWNsYXNzXCI7XG5cblxuVUkuaW5pdCgpO1xuV2VhdGhlci5nZXRXZWF0aGVyKFwiTGFuZHN0dWhsXCIpO1xuIl0sIm5hbWVzIjpbIldlYXRoZXIiLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlTW9kYWwiLCJzZWFyY2hCYXIiLCJzZWFyY2hCdXR0b24iLCJjaXR5IiwiY291bnRyeSIsInRlbXBSZXN1bHQiLCJodW1pZGl0eVJlc3VsdCIsImZlZWxzUmVzdWx0Iiwic2t5UmVzdWx0IiwiY2Vsc2l1c09wdGlvbiIsImZhaHJlbmhlaXRPcHRpb24iLCJjZWxzaXVzU3ltYm9sIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZmFocmVuaGVpdFN5bWJvbCIsIndlYXRoZXJPYmplY3QiLCJVSSIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZU1vZGFsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5vcm1hbGl6ZWRTZWFyY2giLCJub3JtYWxpemVTZWFyY2giLCJ2YWx1ZSIsImxlbmd0aCIsImdldFdlYXRoZXIiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwic2V0VGVtcGVyYXR1cmVVbml0Iiwia2V5IiwidGFyZ2V0Iiwic3R5bGUiLCJkaXNwbGF5IiwicXVlcnkiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidGVtcGVyYXR1cmVVbml0IiwidGVtcENlbHNpdXMiLCJ0b0ZpeGVkIiwidGV4dENvbnRlbnQiLCJjZWxzaXVzVG9GYWhyZW5oZWl0IiwidGVtcCIsImZlZWxzTGlrZSIsIm5hbWUiLCJodW1pZGl0eSIsImZvcmVjYXN0Iiwid2VhdGhlckNpdHkiLCJtYWluIiwiZmVlbHNfbGlrZSIsInN5cyIsIndlYXRoZXIiLCJjaXR5TmFtZSIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZmV0Y2giLCJtb2RlIiwiY29vcmRpbmF0ZXMiLCJ3ZWF0aGVyUHJvbWlzZSIsImpzb24iLCJ3ZWF0aGVyRGF0YSIsImVuZFRpbWUiLCJ0aW1lVGFrZW4iLCJjb2RlIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=