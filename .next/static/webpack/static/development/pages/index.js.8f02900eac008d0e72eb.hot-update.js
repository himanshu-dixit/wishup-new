webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/libphonenumber-js-utils/dist/libphonenumber.js":
false,

/***/ "./node_modules/react-intl-tel-input/dist/main.js":
false,

/***/ "./src/components/Form/index.js":
/*!**************************************!*\
  !*** ./src/components/Form/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CustomInput */ "./src/components/CustomInput/index.js");
/* harmony import */ var react_icons_kit_ionicons_loop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/ionicons/loop */ "./node_modules/react-icons-kit/ionicons/loop.js");
/* harmony import */ var react_icons_kit_ionicons_loop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_loop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "./src/components/Form/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_server_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/server.js */ "./src/services/server.js");












 // import IntlTelInput from 'react-intl-tel-input';

var IntlTelInput = react__WEBPACK_IMPORTED_MODULE_7___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-intl-tel-input */ "./node_modules/react-intl-tel-input/dist/main.js", 7));
});

var Form =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Form, _Component);

  function Form(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Form);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Form).call(this, props));
    _this.state = {
      email: '',
      phone: '',
      action: '',
      state: props.type ? props.type : 'initial',
      selectedTags: [],
      otherTag: false,
      newtag: ''
    };
    _this.tags = ['Social', 'Task'];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, [{
    key: "loadState",
    value: function loadState() {
      this.setState(JSON.parse(localStorage.getItem('data')));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state));
    }
  }, {
    key: "next",
    value: function next() {
      var that = this;
      var plan = localStorage.getItem('plan');
      var data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        plan: plan ? plan : ''
      };
      console.log(data);

      if (this.state.action === "become-va") {
        if (data.email && data.phone && data.first_name && data.last_name) {
          this.changeState("va");
        } else {
          this.setState({
            error: "Please enter all the data"
          });
        }
      } else {
        if (!this.state.first_name || !this.state.email || !this.state.phone) {
          that.setState({
            error: "Please enter all the field accordingly"
          });
          return;
        }

        var http = new XMLHttpRequest();
        var url = 'https://prod.wishup.in/user/requestConsultation';
        var params = 'name=' + this.state.first_name + " " + this.state.last_name + '&country_name=' + '&email=' + this.state.email + '&phone=' + this.state.phone + "&sourceLead='wishup'&undefined='TALK TTO US'";
        http.open('POST', url, true); //Send the proper header information along with the request

        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {
          //Call a function when the state changes.
          if (http.readyState == 4 && http.status == 200) {
            that.changeState("done");
          } else {
            that.setState({
              error: "Please enter all the field accordingly"
            });
          }
        };

        http.send(params); // console.log(response);
        //
        // var response = oldRequest(this.state.first_name+" "+this.state.last_name,this.state.email,this.state.phone,'');
        //     if(response.status==="success"){
        //     this.changeState("done");
        //     }
        //     else{
        //         this.setState({error: "Please enter all the field accordingly"});
        //     }
        // sendRequest('/controller/client_lead.php',data).then((data)=>{
        //     if(data.status===200){
        //     this.changeState("done");
        //     }
        //     else{
        //         this.setState({error: data.message});
        //     }
        // });
      }
    }
  }, {
    key: "redirect",
    value: function redirect() {
      window.location.replace("/dashboard");
    }
  }, {
    key: "changeState",
    value: function changeState(state) {
      localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state));
      this.setState({
        state: state
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(id, value) {
      var obj = {};
      obj[id] = value;
      this.setState(obj);
    }
  }, {
    key: "clientSubmit",
    value: function clientSubmit() {
      var _this2 = this;

      var data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      };
      Object(_services_server_js__WEBPACK_IMPORTED_MODULE_12__["sendRequest"])('/controller/client_lead.php', data).then(function (data) {
        if (data.status === 200) {
          _this2.changeState("tags");
        } else {
          _this2.setState({
            error: data.message
          });
        }
      });
    }
  }, {
    key: "vaSubmit",
    value: function vaSubmit() {
      var _this3 = this;

      var data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        qualification: this.state.qualification,
        experience: this.state.experience,
        skills: this.state.skills,
        more: this.state.more
      };
      Object(_services_server_js__WEBPACK_IMPORTED_MODULE_12__["sendRequest"])('/controller/va_lead.php', data).then(function (data) {
        if (data.status === 200) {
          _this3.changeState("va-done");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      //<Link to='/'>Home</Link>
      var that = this;

      var handler = function handler(status, value, countryData, number, id) {
        _this4.setState({
          phone: number
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "new-form"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mainContainer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inputContainer col-sm-12",
        name: "onboarding"
      }, this.state.state === 'initial' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "heading"
      }, "Get Started"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "name-bar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "First Name",
        type: "text",
        size: "half",
        id: "first_name",
        data: this.state.first_name,
        changeValue: this.changeValue.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Last Name",
        size: "half",
        type: "text",
        id: "last_name",
        data: this.state.last_name,
        changeValue: this.changeValue.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "name-bar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Email Address",
        type: "email",
        id: "email",
        data: this.state.email,
        changeValue: this.changeValue.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "name-bar phone"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "What are you looking for?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "radio-group"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "container",
        onClick: function onClick() {
          _this4.setState({
            action: 'hire-va'
          });
        }
      }, "Hire a Virtual employee", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        checked: this.state.action == "hire-va" || !this.state.action ? "checked" : "",
        name: "radio"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "checkmark"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "container",
        onClick: function onClick() {
          _this4.setState({
            action: 'become-va'
          });
        }
      }, "I want to work", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "radio",
        name: "radio",
        checked: this.state.action == "become-va" ? "checked" : ""
      }, "name", "radio")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "checkmark"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "error"
      }, this.state.error), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "buttonsContainer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button-cta",
        onClick: function onClick() {
          that.next();
        }
      }, "Get Started"))) : '', this.state.state === 'va' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "heading"
      }, "More Details"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Based out of",
        type: "text",
        id: "location",
        data: this.state.location,
        changeValue: this.changeValue.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Your highest qualification",
        type: "text",
        id: "qualification",
        data: this.state.qualification,
        changeValue: this.changeValue.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Total work experience",
        type: "text",
        id: "experience",
        data: this.state.experience,
        changeValue: this.changeValue.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Skills",
        type: "text",
        id: "skills",
        data: this.state.skills,
        changeValue: this.changeValue.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CustomInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "Tell us more about you",
        type: "text",
        id: "more",
        data: this.state.more,
        changeValue: this.changeValue.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "error"
      }, this.state.error), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "buttonsContainer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button-cta",
        onClick: function onClick() {
          _this4.vaSubmit();
        }
      }, "Submit"))) : '', this.state.state === 'va-done' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "heading"
      }, "Thank you"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "We have succesfully received your details. Will contact you in next 3-4 days.")) : '', this.state.state === 'done' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "heading"
      }, "Thank you"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "We have succesfully received your details. Will contact you in next 24 hours.")) : ''))));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.8f02900eac008d0e72eb.hot-update.js.map