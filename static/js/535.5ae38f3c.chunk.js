"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[535],{3535:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={components:{18:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var r=o(n);if(r&&r.has(t))return r.get(t);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var l=u?Object.getOwnPropertyDescriptor(t,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=t[i]}return a.default=t,r&&r.set(t,a),a}(n(7804)),r=n(1529);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,u,i=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var i=function(){var e=a((0,t.useState)(!0),2),n=e[0],o=e[1],u=a((0,t.useState)(BMAP_NAVIGATION_CONTROL_LARGE),2),i=u[0],l=u[1];return t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{onClick:function(){return o(!n)}},n?"\u5173\u95ed":"\u5f00\u542f"),t.default.createElement("button",{onClick:function(){return l(BMAP_NAVIGATION_CONTROL_PAN)}},"\u5e73\u79fb\u6309\u94ae"),t.default.createElement("button",{onClick:function(){return l(BMAP_NAVIGATION_CONTROL_ZOOM)}},"\u7f29\u653e\u6309\u94ae"),t.default.createElement("button",{onClick:function(){return l(BMAP_NAVIGATION_CONTROL_SMALL)}},"\u5e73\u79fb\u548c\u7f29\u653e\u6309\u94ae"),t.default.createElement("button",{onClick:function(){return l(BMAP_NAVIGATION_CONTROL_LARGE)}},"\u6062\u590d\u9ed8\u8ba4"),t.default.createElement(r.Map,{zoom:13,style:{height:350}},n&&t.default.createElement(r.NavigationControl,{type:i,enableGeolocation:!0,showZoomInfo:!0}),t.default.createElement(r.NavigationControl,{offset:new BMap.Size(40,40),anchor:BMAP_ANCHOR_TOP_RIGHT,visiable:n,type:BMAP_NAVIGATION_CONTROL_PAN,enableGeolocation:!0,showZoomInfo:!0})))};return function(){return t.default.createElement("div",{style:{width:"100%"}},t.default.createElement(r.APILoader,{akay:"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"},t.default.createElement(i,null)))}}(),73:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var r=o(n);if(r&&r.has(t))return r.get(t);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var l=u?Object.getOwnPropertyDescriptor(t,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=t[i]}return a.default=t,r&&r.set(t,a),a}(n(7804)),r=n(1529);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}var a=function(){var e=(0,t.useRef)(null),n=(0,r.useMap)(),o=n.setContainer,a=n.map,u=(0,r.useNavigationControl)({type:BMAP_NAVIGATION_CONTROL_SMALL}).navigationControl;return(0,t.useEffect)((function(){e.current&&!a&&o(e.current)}),[a]),t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{onClick:function(){return u.setType(BMAP_NAVIGATION_CONTROL_PAN)}},"\u5e73\u79fb\u6309\u94ae"),t.default.createElement("button",{onClick:function(){return u.setType(BMAP_NAVIGATION_CONTROL_LARGE)}},"\u5e73\u79fb\u3001\u7f29\u653e\u6309\u94ae\u548c\u6ed1\u5757"),t.default.createElement("div",{ref:e,style:{height:350}}))};return function(){return t.default.createElement("div",{style:{width:"100%"}},t.default.createElement(r.APILoader,{akay:"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"},t.default.createElement(r.Provider,null,t.default.createElement(a,null))))}}()},data:{18:{name:18,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactBaiduMap = require("@uiw/react-baidu-map");\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar Example = function Example() {\n  var _useState = (0, _react.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  var _useState3 = (0, _react.useState)(BMAP_NAVIGATION_CONTROL_LARGE),\n    _useState4 = _slicedToArray(_useState3, 2),\n    type = _useState4[0],\n    setType = _useState4[1];\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setShow(!show);\n    }\n  }, show ? \'\u5173\u95ed\' : \'\u5f00\u542f\'), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setType(BMAP_NAVIGATION_CONTROL_PAN);\n    }\n  }, "\\u5E73\\u79FB\\u6309\\u94AE"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setType(BMAP_NAVIGATION_CONTROL_ZOOM);\n    }\n  }, "\\u7F29\\u653E\\u6309\\u94AE"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setType(BMAP_NAVIGATION_CONTROL_SMALL);\n    }\n  }, "\\u5E73\\u79FB\\u548C\\u7F29\\u653E\\u6309\\u94AE"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setType(BMAP_NAVIGATION_CONTROL_LARGE);\n    }\n  }, "\\u6062\\u590D\\u9ED8\\u8BA4"), /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.Map, {\n    zoom: 13,\n    style: {\n      height: 350\n    }\n  }, show && /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.NavigationControl, {\n    type: type,\n    enableGeolocation: true,\n    showZoomInfo: true\n  }), /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.NavigationControl, {\n    offset: new BMap.Size(40, 40),\n    anchor: BMAP_ANCHOR_TOP_RIGHT,\n    visiable: show,\n    type: BMAP_NAVIGATION_CONTROL_PAN,\n    enableGeolocation: true,\n    showZoomInfo: true\n  })));\n};\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.APILoader, {\n    akay: "eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null)));\n};\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport { Map, APILoader, NavigationControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  const [type, setType] = useState(BMAP_NAVIGATION_CONTROL_LARGE);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_PAN)}>\n        \u5e73\u79fb\u6309\u94ae\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_ZOOM)}>\n        \u7f29\u653e\u6309\u94ae\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_SMALL)}>\n        \u5e73\u79fb\u548c\u7f29\u653e\u6309\u94ae\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_LARGE)}>\n        \u6062\u590d\u9ed8\u8ba4\n      </button>\n      <Map zoom={13} style={{ height: 350 }}>\n        {show && (\n          <NavigationControl type={type} enableGeolocation showZoomInfo />\n        )}\n        <NavigationControl\n          offset={new BMap.Size(40, 40)}\n          anchor={BMAP_ANCHOR_TOP_RIGHT}\n          visiable={show} \n          type={BMAP_NAVIGATION_CONTROL_PAN}\n          enableGeolocation\n          showZoomInfo\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Example />\n    </APILoader>\n  </div>\n);\nexport default Demo;"},73:{name:73,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactBaiduMap = require("@uiw/react-baidu-map");\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nvar Example = function Example() {\n  var divElm = (0, _react.useRef)(null);\n  var _useMap = (0, _reactBaiduMap.useMap)(),\n    setContainer = _useMap.setContainer,\n    map = _useMap.map;\n  var _useNavigationControl = (0, _reactBaiduMap.useNavigationControl)({\n      type: BMAP_NAVIGATION_CONTROL_SMALL\n    }),\n    navigationControl = _useNavigationControl.navigationControl;\n  (0, _react.useEffect)(function () {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return navigationControl.setType(BMAP_NAVIGATION_CONTROL_PAN);\n    }\n  }, "\\u5E73\\u79FB\\u6309\\u94AE"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return navigationControl.setType(BMAP_NAVIGATION_CONTROL_LARGE);\n    }\n  }, "\\u5E73\\u79FB\\u3001\\u7F29\\u653E\\u6309\\u94AE\\u548C\\u6ED1\\u5757"), /*#__PURE__*/_react["default"].createElement("div", {\n    ref: divElm,\n    style: {\n      height: 350\n    }\n  }));\n};\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.APILoader, {\n    akay: "eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.Provider, null, /*#__PURE__*/_react["default"].createElement(Example, null))));\n};\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, Provider, useMap, useNavigationControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const { setContainer, map } = useMap();\n  const { navigationControl } = useNavigationControl({\n    type: BMAP_NAVIGATION_CONTROL_SMALL\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => navigationControl.setType(BMAP_NAVIGATION_CONTROL_PAN)}>\n        \u5e73\u79fb\u6309\u94ae\n      </button>\n      <button onClick={() => navigationControl.setType(BMAP_NAVIGATION_CONTROL_LARGE)}>\n        \u5e73\u79fb\u3001\u7f29\u653e\u6309\u94ae\u548c\u6ed1\u5757\n      </button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Provider>\n        <Example />\n      </Provider>\n    </APILoader>\n  </div>\n);\nexport default Demo;"}},source:"NavigationControl \u5e73\u79fb\u7f29\u653e\u63a7\u4ef6\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-navigation-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-navigation-control)\n[![Downloads](https://img.shields.io/npm/dm/@uiw/react-baidu-map-navigation-control.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-baidu-map-navigation-control)\n\n\u5730\u56fe\u7684\u5e73\u79fb\u7f29\u653e\u63a7\u4ef6\uff0c\u53ef\u4ee5\u5bf9\u5730\u56fe\u8fdb\u884c\u4e0a\u4e0b\u5de6\u53f3\u56db\u4e2a\u65b9\u5411\u7684\u5e73\u79fb\u548c\u7f29\u653e\u64cd\u4f5c\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u66f4\u65b9\u4fbf\u3002\n\n```jsx\nimport { NavigationControl, useNavigationControl } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport NavigationControl, { useNavigationControl } from '@uiw/react-baidu-map-navigation-control';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview\nimport React, { useState } from 'react';\nimport { Map, APILoader, NavigationControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  const [type, setType] = useState(BMAP_NAVIGATION_CONTROL_LARGE);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_PAN)}>\n        \u5e73\u79fb\u6309\u94ae\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_ZOOM)}>\n        \u7f29\u653e\u6309\u94ae\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_SMALL)}>\n        \u5e73\u79fb\u548c\u7f29\u653e\u6309\u94ae\n      </button>\n      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_LARGE)}>\n        \u6062\u590d\u9ed8\u8ba4\n      </button>\n      <Map zoom={13} style={{ height: 350 }}>\n        {show && (\n          <NavigationControl type={type} enableGeolocation showZoomInfo />\n        )}\n        <NavigationControl\n          offset={new BMap.Size(40, 40)}\n          anchor={BMAP_ANCHOR_TOP_RIGHT}\n          visiable={show} \n          type={BMAP_NAVIGATION_CONTROL_PAN}\n          enableGeolocation\n          showZoomInfo\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Example />\n    </APILoader>\n  </div>\n);\nexport default Demo;\n```\n\n### \u4f7f\u7528 hooks\n\n`navigationControl`, `setNavigationControl`\n\n```jsx mdx:preview\nimport React from 'react';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, Provider, useMap, useNavigationControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const { setContainer, map } = useMap();\n  const { navigationControl } = useNavigationControl({\n    type: BMAP_NAVIGATION_CONTROL_SMALL\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => navigationControl.setType(BMAP_NAVIGATION_CONTROL_PAN)}>\n        \u5e73\u79fb\u6309\u94ae\n      </button>\n      <button onClick={() => navigationControl.setType(BMAP_NAVIGATION_CONTROL_LARGE)}>\n        \u5e73\u79fb\u3001\u7f29\u653e\u6309\u94ae\u548c\u6ed1\u5757\n      </button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Provider>\n        <Example />\n      </Provider>\n    </APILoader>\n  </div>\n);\nexport default Demo;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |\n| offset | \u63a7\u4ef6\u7684\u6c34\u5e73\u504f\u79fb\u503c\u3002 | `BMap.Size` | - |\n| type | \u5e73\u79fb\u7f29\u653e\u63a7\u4ef6\u7684\u7c7b\u578b\u3002 | `NavigationControlType` | `BMAP_NAVIGATION_CONTROL_LARGE` |\n| showZoomInfo | \u662f\u5426\u663e\u793a\u7ea7\u522b\u63d0\u793a\u4fe1\u606f\u3002 | `boolean` | - |\n| enableGeolocation | \u63a7\u4ef6\u662f\u5426\u96c6\u6210\u5b9a\u4f4d\u529f\u80fd\u3002 | `boolean` | `false` |\n\n### NavigationControlType\n\n| \u5e38\u91cf | \u503c | \u63cf\u8ff0 |\n| ----- | ----- | ----- |\n| BMAP_NAVIGATION_CONTROL_LARGE | `0` | \u6807\u51c6\u7684\u5e73\u79fb\u7f29\u653e\u63a7\u4ef6\uff08\u5305\u62ec\u5e73\u79fb\u3001\u7f29\u653e\u6309\u94ae\u548c\u6ed1\u5757\uff09 |\n| BMAP_NAVIGATION_CONTROL_SMALL | `0` | \u4ec5\u5305\u542b\u5e73\u79fb\u548c\u7f29\u653e\u6309\u94ae |\n| BMAP_NAVIGATION_CONTROL_PAN | `0` | \u4ec5\u5305\u542b\u5e73\u79fb\u6309\u94ae |\n| BMAP_NAVIGATION_CONTROL_ZOOM | `0` | \u4ec5\u5305\u542b\u7f29\u653e\u6309\u94ae |",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=535.5ae38f3c.chunk.js.map