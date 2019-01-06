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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/faq/index.js":
/*!****************************!*\
  !*** ./pages/faq/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./pages/faq/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/GraphicHeader */ "./src/components/GraphicHeader/index.js");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-meta-tags */ "react-meta-tags");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_meta_tags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_services_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/services/location */ "./src/services/location.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_HeadBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/HeadBar */ "./src/components/HeadBar/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "/Users/apple/Desktop/client/wishup/pages/faq/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var FAQ =
/*#__PURE__*/
function (_Component) {
  _inherits(FAQ, _Component);

  function FAQ() {
    _classCallCheck(this, FAQ);

    return _possibleConstructorReturn(this, _getPrototypeOf(FAQ).apply(this, arguments));
  }

  _createClass(FAQ, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_HeadBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Wishup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        integrity: "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "FAQ",
        description: "",
        image: "url(\"static/assets/resources/why-wishup/header.png\")",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "raised-container-top raised-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wishup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, " Who are these employees?"), "Your employees are smart & experienced professionals. They are qualified and rigorously trained in-house for a month on 50+ business and executive related tasks.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "2.  When is my VE available?"), "Your VAs are available ", Object(_src_services_location__WEBPACK_IMPORTED_MODULE_4__["getTiming"])(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "3.  What is Dedicated Assistance?"), "Each of our plans include a dedicated virtual assistant (VA). You will work with your VA on a one-to-one basis, continually submitting tasks directly to this person. Your VA will grow to know you, your work, and your preferences\u2014all while learning to anticipate your needs without you having to repeat yourself. As a collaborative consumption business, our VAs are a shared resource among clients. They schedule their days to best serve you and your incoming tasks with priority and without delay. As such, we do not offer immediate turnaround, though we expect most tasking to be completed in 24-48 hours. We encourage you to place priority levels and deadlines on your projects.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "4. I just signed up! What can I expect next?"), "First, welcome aboard! We will begin locating the best possible VA for you using the information you shared during the signup process about your working style and personal preferences. After we\u2019ve determined who would be the best fit for your needs\u2014we\u2019ll send an email connecting the two of you! We suggest hopping on a quick call soon after. We aim to introduce you to your VA within two business days of signing up.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, " 5. Do my hours roll over?"), "As a monthly membership service, our clients subscribe to us for the ability to retain a virtual assistant. While each plan offers a different level of service, as a membership subscription our plan hours do not rollover.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " 6. Can I share tasks on the weekend with my VE?"), "You can submit your tasks anytime, day or night, weekday or weekend. If submitted before/after business hours, your VA will receive the task(s) the following business day to begin working on them. Kindly take note that if you send a task minutes before the workday ends, it is unlikely to be completed that same day.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "7. I need extra hours. What should I do?"), "Please contact us at ops@wishup.co", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, " 8. What tasks my VE cannot do?"), "Running physical errands Outbound sales calls Legal, accounting & HR Full-time customer support Receptionist service Payments on behalf of clients", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, " 9. Can the VE make payments on my behalf?"), "Currently, they cannot. Although we are in the process of integrating this facility very soon.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "10. Can the VE make outbound calls for me?"), "Absolutely but with some limitations.  Your VE can contact vendors, make reservations, and place phone calls for you but they cannot make outbound sales calls or solicit prospects.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "11. Will I be charged for phone calls VE makes on my behalf?"), "Yes, the VA will send a detailed statement for these calls.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "12. Can VE receive inbound calls?"), "Yes, but accessible only to you and the number of users limited to the package you\u2019ve subscribed for. Your VAs cannot receive calls from service providers, contacts, employees on your behalf.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "13.Can my VE manage my inbox?"), "Sure they can! Our VE\u2019s are thoroughly trained in inbox management and can keep your inbox, organized and easy to access always.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "14. Can my VA handle scheduling?"), "Absolutely. Our VEs exclusively use and manage Google Calendars. Your VE can coordinate meetings, schedule appointments, and manage your Google Calendar with ease. Simply share and grant your VE access to manage your calendar.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, " 15.  Can my VE edit a presentation for me?"), "Your VA can format and edit ppts with your provided content, images and detailed design layout & instructions.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "16. Will my VE be working on holidays?"), "Wishup observes all national holidays in India. Your VE will not be available on New Year's Eve, New Year's day, Diwali, Holi, Independence Day (US & India), Republic day, Labor Day, Thanksgiving, Christmas Eve, Christmas Day(US only)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, " 17. What if my VE goes on vacation?"), "Every VE is entitled to 2 days of leaves in a month (24 leaves in a calendar year). If a VE takes more than 2 leaves, your subscription will be extended by those number of days. Needless to say, any leave taken will be informed to you.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "18. I want to escalate a serious issue."), "If you wish to escalate a serious issue about any of our VE, please get in touch with the respective Account Manager assigned to you.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "18. Is my company or personal information protected with Wishup?"), "Wishup cares about the security of your information and uses commercially reasonable physical, administrative, and technological safeguards to preserve the integrity and security of all information collected through our website. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event of a breach of security, Wishup will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations. In case of any privacy breach/client information leak by an employee, appropriate & strict legal action will be taken by Wishup on the concerned person(s). Wishup signs a contract NDA (non-disclosure agreement) with every employee. Breach of NDA by an employee through leakage of any client information will lead to strict civil & criminal legal actions being taken by such employees(s).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "19. I don't like my VE. I want a replacement."), "Contact the Account Manager assigned to you and convey the same. We shall investigate quickly and make the transition to your next VE smooth.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, " 20. Can I become a VE?"), "We\u2019re forever looking for zestful people. Please go to our \u2018How to Become a VE\u2019 page and fill the form with relevant details. If it enthuses us, we will get in touch with you shortly!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, " 21. For how many hours will my VE work for me?"), "Your daily bandwidth depends on the package that you subscribe for. Please refer to our Plans and Pricing Page to find out more.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "  22. How many users can delegate tasks to one VE that I have subscribed for?"), "This depends on the package that you have subscribed for. Please refer to our Plans and Pricing Page to find out more.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, " 23. Can I cancel anytime?"), "Of course. Contact your Account Manager prior to your next billing cycle and we'll take care of your request. If you have already been billed, your cancellation request will not take effect until the following month. Unfortunately, we do not offer prorated refunds or cancellations for unused time.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), "Still Have a Question? Ask us Directly", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Sales and Enquiries-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:sales@wishup.co",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, " sales@wishup.co"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Careers-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:sales@wishup.co",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "apply@wishup.co"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-3 col-sm-3-large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "faq-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Sounds like the kind of team you want to work with?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Get Started")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/virtual-assistant-pricing/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Plan and Pricing")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }));
    }
  }]);

  return FAQ;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./pages/faq/style.css":
/*!*****************************!*\
  !*** ./pages/faq/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Footer/index.css":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sentinel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sentinel */ "react-sentinel");
/* harmony import */ var react_sentinel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sentinel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_fa_chevronDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/fa/chevronDown */ "react-icons-kit/fa/chevronDown");
/* harmony import */ var react_icons_kit_fa_chevronDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_chevronDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_fa_chevronUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/fa/chevronUp */ "react-icons-kit/fa/chevronUp");
/* harmony import */ var react_icons_kit_fa_chevronUp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_chevronUp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/components/Footer/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/apple/Desktop/client/wishup/src/components/Footer/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {});

    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      //<Link to='/'>Home</Link>
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wishup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/assets/resources/logo.png",
        height: "23px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), " wishup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Wishup helps by taking care of all the little tasks so you can chase the higher goals. Come give us your to-do lists and instead focus on things you care."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-sub-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-form-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "We'll send you updates regularly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "subscribe_bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        action: "https://wishup.us18.list-manage.com/subscribe/post?u=1b6f68fbae24ef77d377c480f&id=1048219f9e",
        method: "post",
        id: "mc-embedded-subscribe-form",
        name: "mc-embedded-subscribe-form",
        className: "validate",
        target: "_blank",
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", (_React$createElement = {
        className: "subscribe",
        type: "email",
        name: "EMAIL"
      }, _defineProperty(_React$createElement, "className", "required email email_input"), _defineProperty(_React$createElement, "placeholder", "Enter your email"), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 35
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "subscribe_button",
        type: "submit",
        value: "Subscribe",
        name: "subscribe",
        onClick: function onClick() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "subscribe"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-sub-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Join Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "social-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.facebook.com/WishUpNow/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/assets/facebook.png",
        height: "23px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/wishupnow",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/assets/twitter.png",
        height: "23px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.instagram.com/wishupnow/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/assets/instagram.png",
        height: "23px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-sub-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Useful Links"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-research-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Virtual Research Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-administritive-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " Virtual Administrative Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-travel-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Virtual Travel Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-socialmedia-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Social Media Virtual Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-bookkeeping-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Virtual Book-Keeping Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-email-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Virtual Email Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-personal-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Virtual Personal Assistant")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-hiring-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Virtual Hiring Customer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/hire-ecommerce-assistant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Virtual Ecommerce Customer")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-xs-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "USA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/dallas-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Dallas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/new-york-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "New York")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/los-angeles-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "   ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, " Los Angeles")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/chicago-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "   ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Chicago")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/houston-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "    ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Houston")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/san-francisco-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "       ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "San Francisco")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/austin-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "           ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Austin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Canada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/toronto-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Toronto")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/vancouver-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "    ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, " Vancouver")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/seattle-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Seattle")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-xs-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Europe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/uk-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "   ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "UK")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/london-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "   ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "London")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/tel-aviv-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "    ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Tel Aviv")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/berlin-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "        ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Berlin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/paris-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Paris")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/dublin-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "            ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Dublin")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-xs-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Asia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/dubai-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "   ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, " Dubai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/abu-dhabi-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Abu Dhabi")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/singapore-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Singapore")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/sydney-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Sydney")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/hong-kong-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Hong Kong")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/location/shanghai-virtual-assistants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "footer-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Shangai")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sub-footer-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "left-sub-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Copyright @ 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "sub-footer-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "All Right Reserved")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "right-sub-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "footer-sub-link",
        href: "https://www.wishup.co/privacy-policy/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "footer-sub-link",
        href: "https://www.wishup.co/terms-and-conditions/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Terms and conditions")))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

/***/ "./src/components/HeadBar/header.css":
/*!*******************************************!*\
  !*** ./src/components/HeadBar/header.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/HeadBar/index.js":
/*!*****************************************!*\
  !*** ./src/components/HeadBar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/components/HeadBar/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/apple/Desktop/client/wishup/src/components/HeadBar/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HeadBar =
/*#__PURE__*/
function (_Component) {
  _inherits(HeadBar, _Component);

  function HeadBar() {
    var _this;

    _classCallCheck(this, HeadBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeadBar).call(this));
    _this.state = {
      popup: ''
    };
    return _this;
  }

  _createClass(HeadBar, [{
    key: "isLoggedIn",
    value: function isLoggedIn() {
      // let token = localStorage.getItem("token");
      var token = false;

      if (token) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //<Link to='/'>Home</Link>
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.isLoggedIn() ? 'black-header' : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wishup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "navbar-toggle collapsed",
        "data-toggle": "collapse",
        "data-target": "#bs-example-navbar-collapse-1",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Toggle navigation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/assets/wishup_logo.png",
        height: "23px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "bs-example-navbar-collapse-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.isLoggedIn() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav navbar-nav navbar-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          localStorage.removeItem("token");
        },
        href: "/logout",
        className: "cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Logout"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav navbar-nav navbar-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/why-wishup/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Why Wishup")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/what-we-do/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "What we do")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/virtual-assistant-pricing/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/virtual-assistant-faq/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "FAQs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://wishup.co/blog/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          _this2.setState({
            popup: 'initial'
          });
        },
        className: "cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Get Started"))))))))));
    }
  }]);

  return HeadBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadBar);

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

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/faq/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/faq/index.js */"./pages/faq/index.js");


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

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/fa/chevronDown":
/*!*************************************************!*\
  !*** external "react-icons-kit/fa/chevronDown" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/chevronDown");

/***/ }),

/***/ "react-icons-kit/fa/chevronUp":
/*!***********************************************!*\
  !*** external "react-icons-kit/fa/chevronUp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/chevronUp");

/***/ }),

/***/ "react-meta-tags":
/*!**********************************!*\
  !*** external "react-meta-tags" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-sentinel":
/*!*********************************!*\
  !*** external "react-sentinel" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sentinel");

/***/ })

/******/ });
//# sourceMappingURL=faq.js.map