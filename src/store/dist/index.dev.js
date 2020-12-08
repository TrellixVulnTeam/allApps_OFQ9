"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    items: [{
      name: 'Ali',
      age: 20,
      city: 'Tehran'
    }, {
      name: 'Sina',
      age: 21,
      city: 'Karaj'
    }, {
      name: 'Mina',
      age: 20,
      city: 'Qum'
    }, {
      name: 'Mohammad',
      age: 19,
      city: 'Tehran'
    }],
    item: null,
    form: {
      name: null,
      age: null,
      city: null
    },
    token: _jsCookie["default"].get('token')
  },
  getters: {
    items: function items(state) {
      return state.items;
    },
    token: function token(state) {
      return state.token;
    }
  },
  mutations: {
    pushItems: function pushItems(state) {
      state.item = _objectSpread({}, state.form);
      state.items.push(state.item);
    }
  }
});

exports["default"] = _default;