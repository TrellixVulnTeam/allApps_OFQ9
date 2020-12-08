"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bus = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_bootstrapVue.BootstrapVue);

_vue["default"].use(_bootstrapVue.IconsPlugin);

require('vue');

var VueCookie = require('vue-cookie');

_vue["default"].use(VueCookie);

_vue["default"].config.productionTip = false;
var Bus = new _vue["default"]();
exports.Bus = Bus;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');