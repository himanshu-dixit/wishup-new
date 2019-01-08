webpackHotUpdate("static/development/pages/whatwedo.js",{

/***/ "./pages/whatwedo/index.js":
/*!*********************************!*\
  !*** ./pages/whatwedo/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./pages/whatwedo/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/components/GraphicHeader */ "./src/components/GraphicHeader/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data */ "./pages/whatwedo/data.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-meta-tags */ "./node_modules/react-meta-tags/lib/index.js");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_meta_tags__WEBPACK_IMPORTED_MODULE_14__);
















var WhatWeDo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WhatWeDo, _Component);

  function WhatWeDo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WhatWeDo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WhatWeDo).call(this, props));
    _this.type = props.match.params.type;

    if (!_this.type) {
      _this.type = 'home';
    }

    _this.type = _this.type.replace('hire-', '');
    _this.type = _this.type.replace('-assistant', '');
    _this.data = _data__WEBPACK_IMPORTED_MODULE_11__["default"];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WhatWeDo, [{
    key: "selectPlan",
    value: function selectPlan(plan) {
      localStorage.setItem('plan', plan);
      window.location.replace("/");
    }
  }, {
    key: "render",
    value: function render() {
      var that = this;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "what-we-do"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_meta_tags__WEBPACK_IMPORTED_MODULE_14___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", null, this.data[this.type].meta_title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "description",
        content: this.data[this.type].meta_description
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        property: "og:title",
        content: this.data[this.type].og_title
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        property: "og:description",
        content: this.data[this.type].og_description
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "canonical",
        href: "/hire-" + this.data + "-assistant"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.data[this.type].title,
        description: this.data[this.type].description,
        image: "url(\"static/assets/resources/what-we-do/what-we-do-background[1].png\")"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "raised-container-top raised-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "wishup-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "what-we-do-menu-containerr"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "what-we-do-menu"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "menu-header"
      }, "What We Do"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "menu-list"
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(that.data).map(function (key, index) {
        if (key !== "home") {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            href: "./hire-" + key + "-assistant"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: that.type === key ? "menu-item active" : "menu-item"
          }, that.data[key].title));
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-text"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_13___default()(this.data[this.type].content))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3 col-sm-3-large"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "what-we-do-form"
      }, "Sounds like the kind of team you want to work with?", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/"
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-cta-button"
      }, "Request consultation")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/virtual-assistant-pricing/"
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-cta-button"
      }, "View Plans and Pricing"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "grey-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "wishup-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "different-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, this.data[this.type].first_section.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-text"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_13___default()(this.data[this.type].first_section.content)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.data[this.type].second_section.title,
        description: "",
        type: "small",
        image: "url(\"static/assets/resources/what-we-do/what-we-do-background[2].png\")"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "raised-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "wishup-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "different-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-text"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_13___default()(this.data[this.type].second_section.content)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_GraphicHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.data[this.type].third_section.title,
        description: "",
        type: "small",
        image: "url(\"static/assets/resources/what-we-do/what-we-do-background[2].png\")"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "raised-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "wishup-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "different-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-text"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_13___default()(this.data[this.type].third_section.content)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-3"
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                console.log(query);
                return _context.abrupt("return", {
                  postId: id
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return WhatWeDo;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WhatWeDo);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/whatwedo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=whatwedo.js.fb743dae630dfea64714.hot-update.js.map