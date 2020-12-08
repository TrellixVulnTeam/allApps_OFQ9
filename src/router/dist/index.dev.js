"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home"));

var _viwePage = _interopRequireDefault(require("../views/bus/viwePage"));

var _filter = _interopRequireDefault(require("../views/filter/filter"));

var _viwe = _interopRequireDefault(require("../views/set&get binding/viwe"));

var _modal = _interopRequireDefault(require("../views/modal/modal"));

var _sidbar = _interopRequireDefault(require("../views/sidbar/sidbar"));

var _inputViwe = _interopRequireDefault(require("../views/inputBinding/inputViwe"));

var _pag = _interopRequireDefault(require("../views/storApp/pag1"));

var _pag2 = _interopRequireDefault(require("../views/storApp/pag2"));

var _user = _interopRequireDefault(require("../views/placeholder/user"));

var _post = _interopRequireDefault(require("../views/placeholder/post"));

var _login = _interopRequireDefault(require("../views/login/login"));

var _loginAccept = _interopRequireDefault(require("../views/login/loginAccept"));

var _page = _interopRequireDefault(require("../views/nestedRouter/page1"));

var _page2 = _interopRequireDefault(require("../views/nestedRouter/page2"));

var _page3 = _interopRequireDefault(require("../views/nestedRouter/page3"));

var _p = _interopRequireDefault(require("../views/practic/p1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import p2 from '../views/practic/p2'
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/busEvent',
  name: 'busEvent',
  component: _viwePage["default"]
}, {
  path: '/inputBinding',
  name: 'inputBinding',
  component: _inputViwe["default"]
}, {
  path: '/setget',
  name: 'setget',
  component: _viwe["default"]
}, {
  path: '/filter',
  name: 'filter',
  component: _filter["default"]
}, {
  path: '/modal',
  name: 'modal',
  component: _modal["default"]
}, {
  path: '/sidbar',
  name: 'sidbar',
  component: _sidbar["default"]
}, {
  path: '/pag1',
  component: _pag["default"]
}, {
  path: '/Add',
  component: _pag2["default"]
}, {
  path: '/user',
  name: 'user',
  component: _user["default"]
}, {
  path: '/post/:id',
  name: 'post',
  component: _post["default"],
  props: true
}, {
  path: '/login',
  name: 'login',
  component: _login["default"]
}, {
  path: '/loginaccept',
  name: 'loginaccept',
  component: _loginAccept["default"]
}, {
  path: '/page1',
  component: {
    render: function render(c) {
      return c('router-view');
    }
  },
  children: [{
    path: '/page1',
    name: 'page1',
    component: _page["default"]
  }, {
    path: '/page2',
    redirect: '/page1/page2',
    component: {
      render: function render(c) {
        return c('router-view');
      }
    },
    children: [{
      path: '/page1/page2',
      name: 'page2',
      component: _page2["default"]
    }, {
      path: '/page3',
      redirect: '/page1/page2/page3',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '/page1/page2/page3',
        name: 'page3',
        component: _page3["default"]
      }]
    }]
  }, {
    path: '/p1',
    component: _p["default"]
  } // {
  //   path: '/p2',
  //   component: p2
  // },
  ]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;