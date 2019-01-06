module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pricing/index.js":
/*!********************************!*\
  !*** ./pages/pricing/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/GraphicHeader */ "./src/components/GraphicHeader/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./pages/pricing/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_services_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/services/location */ "./src/services/location.js");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-meta-tags */ "react-meta-tags");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_meta_tags__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/apple/Desktop/client/wishup/pages/pricing/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Pricing =
/*#__PURE__*/
function (_Component) {
  _inherits(Pricing, _Component);

  function Pricing(props) {
    var _this;

    _classCallCheck(this, Pricing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pricing).call(this, props));
    _this.next = _this.next.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.previous = _this.previous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      show: false,
      price: Object(_src_services_location__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      slide_no: 4
    };

    _this.setState({
      price: Object(_src_services_location__WEBPACK_IMPORTED_MODULE_4__["default"])()
    });

    return _this;
  }

  _createClass(Pricing, [{
    key: "changeState",
    value: function changeState(no) {
      this.setState({
        slide_no: this.state.slide_no + no
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.slider.slickNext();
    }
  }, {
    key: "previous",
    value: function previous() {
      this.slider.slickPrev();
    }
  }, {
    key: "selectPlan",
    value: function selectPlan(plan) {
      localStorage.setItem('plan', plan);
      window.location.replace("/");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        country: window.country
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var that = this;
      var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: 3,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        afterChange: function afterChange(index) {
          _this2.setState({
            slide_no: index
          });
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Wishup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        integrity: "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "// ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_meta_tags__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "//     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Affordable Virtual Assistants, Price For Virtual/ Remote Assistant Services "), "//     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: "Wishup.co offers Virtual Assistant services at affordable prices. Hire a virtual assistant in USA, UK, Canada, India or anywhere and let your VA take care of your priorities.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), "//     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        property: "og:title",
        content: "Affordable Virtual Assistants, Price For Virtual/ Remote Assistant Services ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), "//     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        property: "og:description",
        content: "Wishup.co offers Virtual Assistant services at affordable prices. Hire a virtual assistant in USA, UK, Canada, India or anywhere and let your VA take care of your priorities. ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), "//     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "canonical",
        href: "/virtual-assistant-pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), "// "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Plans & Pricing",
        description: "Flexible monthly plans to fit any workload",
        image: "url(\"static/assets/resources/why-wishup/pricing/pricing-background.png\")",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wishup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plans-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-plans",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Super Employee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "10 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "(200 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.price.super), " / month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("full");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Full Employee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "8 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "(160 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.state.price.full), " / month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.show ? "hidden" : "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button",
        onClick: function onClick() {
          _this2.setState({
            show: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Show all plans")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.show ? "" : "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("hald");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Half Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "4 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "(80 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, this.state.price.half), " / month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        onClick: function onClick() {
          _this2.selectPlan("economy");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Econonmy Employee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "3 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "(60 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, this.state.price.economy), " / month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("quarter");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Quarter Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "2 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "(40 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, this.state.price.quarter), " / month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("mini");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Mini Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "1.5 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "(30 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, this.state.price.mini), " / month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("trial");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Trial"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "10 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "(10 hrs)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, this.state.price.trial), " / month")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, this.state.slide_no >= 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: " previous",
        onClick: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/previous-icon.png",
        height: "45px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })) : '', this.state.slide_no >= 3 ? '' : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: " next",
        onClick: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/next-icon.png",
        height: "45px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        ref: function ref(c) {
          return _this2.slider = c;
        }
      }, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "One Week Trial"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "A warm up plan to give you the feel of things and get you started!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, this.state.price.trial), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "10 hrs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "(10 hrs)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("trial");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Mini Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "A plan designed for smaller, recurring tasks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, this.state.price.mini), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "1.5 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Up to 30 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("mini");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Quarter Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "A plan crafted  for busy entrepreneurs for  recurrent, small projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, this.state.price.quarter), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "2 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "Up to 40 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("quarter");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Economy Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "A plan crafted  for start-ups for recurrent long-term tasks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, this.state.price.economy), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "3 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "Up to 60 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("economy");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "Half Assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "A plan customised for anyone looking for greater assistance!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, this.state.price.half), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "4 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "Up to 80 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("half");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Full Employee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "A full-fledged plan meant for full-time assistance for mid-sized teams."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, this.state.price.full), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "8 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Up to 160 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("full");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        key: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "Super Employee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "A plan crafted  for start-ups for recurrent long-term tasks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "plan-amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, this.state.price.super), " / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hours",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "10 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-hoursinmonth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "Up to 200 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("super");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "Sign Up")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "help-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "Need multiple employees? Contact us at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:sales@wishup.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, " sales@wishup.co"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pricing-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wishup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, "All Plans included"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "red-strip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/tick.png",
        height: "55px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-feature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "Well-trained and 5+ years experienced professionals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/9-5.png",
        height: "55px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-feature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "Account Manager to troubleshoot problems with VE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/chat.png",
        height: "55px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-feature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "Direct communication via Phone, Email and Direct Messages.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/account-manager.png",
        height: "55px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-feature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, "Available from Mon-Fri between 9AM to 7PM IST"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pricing, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      })));
    }
  }]);

  return Pricing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./pages/pricing/style.css":
/*!*********************************!*\
  !*** ./pages/pricing/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/GraphicHeader/index.css":
/*!************************************************!*\
  !*** ./src/components/GraphicHeader/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/GraphicHeader/index.js":
/*!***********************************************!*\
  !*** ./src/components/GraphicHeader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/GraphicHeader/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/apple/Desktop/client/wishup/src/components/GraphicHeader/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var GraphicHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(GraphicHeader, _Component);

  function GraphicHeader() {
    _classCallCheck(this, GraphicHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(GraphicHeader).apply(this, arguments));
  }

  _createClass(GraphicHeader, [{
    key: "render",
    value: function render() {
      //<Link to='/'>Home</Link>
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "graphic-header",
        style: {
          backgroundImage: this.props.image
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "opaque-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wishup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "graphic-header-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.type == "small" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.title) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.description))))));
    }
  }]);

  return GraphicHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GraphicHeader);

/***/ }),

/***/ "./src/services/location.js":
/*!**********************************!*\
  !*** ./src/services/location.js ***!
  \**********************************/
/*! exports provided: getPricing, getTiming, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPricing", function() { return getPricing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTiming", function() { return getTiming; });
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/services/server.js");
/*
Date : 5 Dec 2018
Parameters : endpoint, requestData
Description - Fetches the location from request data received and pass it components
*/

var data = {
  US: {
    'trial': 125,
    'mini': 359,
    'quarter': 449,
    'economy': 649,
    'half': 799,
    'full': 1299,
    'super': 1499,
    'sign': '/assets/svg/dollar.svg',
    'whitesign': '/assets/svg/dollar-white.svg',
    'image': true
  },
  IN: {
    'trial': 4999,
    'mini': 12699,
    'quarter': 15999,
    'economy': 20999,
    'half': 26999,
    'full': 49999,
    'super': 59999,
    'sign': '/assets/svg/rupee.svg',
    'whitesign': '/assets/svg/rupee-white.svg',
    'image': true
  },
  UK: {
    'trial': 89,
    'mini': 239,
    'quarter': 299,
    'economy': 449,
    'half': 549,
    'full': 899,
    'super': 999,
    'sign': '/assets/svg/pound.svg',
    'whitesign': '/assets/svg/pound-white.svg',
    'image': true
  },
  EUROPE: {
    'trial': 89,
    'mini': 239,
    'quarter': 299,
    'economy': 449,
    'half': 549,
    'full': 899,
    'super': 999,
    'sign': '/assets/svg/euro.svg',
    'whitesign': '/assets/svg/euro-white.svg',
    'image': true
  },
  OTHER: {
    'trial': 89,
    'mini': 239,
    'quarter': 299,
    'economy': 449,
    'half': 549,
    'full': 899,
    'super': 999,
    'sign': '/assets/svg/dollar.svg',
    'whitesign': '/assets/svg/dollar-white.svg',
    'image': true
  }
};
var getPricing = function getPricing() {
  // sendRequest('/get_location','').then((result)=>{
  //     return data[result.country];
  // }).catch(()=>{
  //     console.log("Error in fetching the resources");
  // })
  return data['US'];
};
var getTiming = function getTiming() {
  Object(_server__WEBPACK_IMPORTED_MODULE_0__["default"])('/get_location', '').then(function (result) {
    return result.country !== "IN" ? 'Mon - Fri from 9 am to 6 pm EST' : 'Mon - Fri from 9 am to 6 pm IST';
  }).catch(function () {
    console.log("Error in fetching the resources");
  });
  return 'Mon - Fri from 9 am to 6 pm EST';
};
/* harmony default export */ __webpack_exports__["default"] = (getPricing);

/***/ }),

/***/ "./src/services/server.js":
/*!********************************!*\
  !*** ./src/services/server.js ***!
  \********************************/
/*! exports provided: sendRequest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/*
Date : 5 Dec 2018
Parameters : endpoint, requestData
Description - Service to interact with server and fetch the data by calling an API.
*/
var serverURI = 'https://revamp.wishup.co/server';
var sendRequest = function sendRequest(endpoint, requestData) {
  return new Promise(function () {
    resolve(2);
  }); // return fetch(serverURI + endpoint, {
  //     method: 'POST',
  //     body: JSON.stringify(requestData),
  //     headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('token'),
  //         'Content-type': 'application/json',
  //     },
  //     credentials: 'same-origin',
  // })
  //     .then(response => response.json())
  //     .then((data) => {
  //         return data;
  //     })
  //     .catch((error) => {
  //         console.error(error);
  //         // Handle the error by explicit method, if required by application.
  //     });
};
/* harmony default export */ __webpack_exports__["default"] = (sendRequest);

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/pricing/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/pricing/index.js */"./pages/pricing/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-meta-tags":
/*!**********************************!*\
  !*** external "react-meta-tags" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=pricing.js.map