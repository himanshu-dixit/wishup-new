webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./pages/pricing/index.js":
/*!********************************!*\
  !*** ./pages/pricing/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./pages/pricing/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index/style.css */ "./pages/index/style.css");
/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/components/GraphicHeader */ "./src/components/GraphicHeader/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_services_location__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/services/location */ "./src/services/location.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_components_HeadBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/components/HeadBar */ "./src/components/HeadBar/index.js");
/* harmony import */ var _src_components_MainComponents_Pricing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/components/MainComponents/Pricing */ "./src/components/MainComponents/Pricing/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/components/Footer */ "./src/components/Footer/index.js");


















var PricingPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PricingPage, _Component);

  function PricingPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PricingPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PricingPage).call(this, props));
    _this.next = _this.next.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.previous = _this.previous.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.state = {
      show: false,
      price: Object(_src_services_location__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      slide_no: 4
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PricingPage, [{
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
        price: Object(_src_services_location__WEBPACK_IMPORTED_MODULE_12__["default"])()
      });
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "Wishup"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/wishup.png"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        href: "/static/wishup.png"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        integrity: "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa",
        crossOrigin: "anonymous"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_HeadBar__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pricing"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Plans & Pricing",
        description: "Flexible monthly plans to fit any workload",
        image: "url(\"/static/assets/resources/pricing/pricing-background.png\")"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row grey"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "wishup-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plans-bar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-plans"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name"
      }, "Super Employee"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "10 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(200 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.super), " / month")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("full");
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name"
      }, "Full Employee"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "8 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(160 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.full), " / month")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.show ? "hidden" : "button-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button",
        onClick: function onClick() {
          _this2.setState({
            show: true
          });
        }
      }, "Show all plans")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.show ? "" : "hidden"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("hald");
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name"
      }, "Half Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "4 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(80 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.half), " / month")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name",
        onClick: function onClick() {
          _this2.selectPlan("economy");
        }
      }, "Econonmy Employee"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "3 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(60 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.economy), " / month")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("quarter");
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name"
      }, "Quarter Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "2 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(40 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.quarter), " / month")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("mini");
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name"
      }, "Mini Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "1.5 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(30 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.mini), " / month")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-card",
        onClick: function onClick() {
          _this2.selectPlan("trial");
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-name"
      }, "Trial"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "10 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(10 hrs)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.trial), " / month")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row slider"
      }, this.state.slide_no >= 1 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: " previous",
        onClick: this.previous
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/assets/previous-icon.png",
        height: "45px"
      })) : '', this.state.slide_no >= 3 ? '' : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: " next",
        onClick: this.next
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/assets/next-icon.png",
        height: "45px"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: function ref(c) {
          return _this2.slider = c;
        }
      }, settings), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 1
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "One Week Trial"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A warm up plan to give you the feel of things and get you started!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.trial), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "10 hrs"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "(10 hrs)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("trial");
        }
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 2
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "Mini Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A plan designed for smaller, recurring tasks"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.mini), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "1.5 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "Up to 30 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("mini");
        }
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 3
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "Quarter Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A plan crafted  for busy entrepreneurs for  recurrent, small projects"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.quarter), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "2 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "Up to 40 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("quarter");
        }
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 4
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "Economy Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A plan crafted  for start-ups for recurrent long-term tasks"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.economy), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "3 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "Up to 60 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("economy");
        }
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 4
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "Half Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A plan customised for anyone looking for greater assistance!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.half), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "4 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "Up to 80 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("half");
        }
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 5
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "Full Employee"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A full-fledged plan meant for full-time assistance for mid-sized teams."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.full), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "8 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "Up to 160 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("full");
        }
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3",
        key: 6
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-type"
      }, "Super Employee"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-description"
      }, "A plan crafted  for start-ups for recurrent long-term tasks"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-price"
      }, this.state.price.image ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: this.state.price.sign,
        height: "13px"
      }) : this.state.price.sign, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "plan-amount"
      }, this.state.price.super), " / month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hours"
      }, "10 hrs/ Day"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-hoursinmonth"
      }, "Up to 200 Hrs/month"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-button",
        onClick: function onClick() {
          _this2.selectPlan("super");
        }
      }, "Sign Up")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "help-info"
      }, "Need multiple employees? Contact us at ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:sales@wishup.com"
      }, " sales@wishup.co"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pricing-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "wishup-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "All Plans included"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "red-strip"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/tick.png",
        height: "55px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-feature"
      }, "Well-trained and 5+ years experienced professionals")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/9-5.png",
        height: "55px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-feature"
      }, "Account Manager to troubleshoot problems with VE")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/chat.png",
        height: "55px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-feature"
      }, "Direct communication via Phone, Email and Direct Messages.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/assets/resources/pricing/account-manager.png",
        height: "55px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plan-feature"
      }, "Available from Mon-Fri between 9AM to 7PM IST"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_MainComponents_Pricing__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], null));
    }
  }]);

  return PricingPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PricingPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/pricing")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=pricing.js.ec5123049356e4c29551.hot-update.js.map