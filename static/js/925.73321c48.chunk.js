"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[925],{8925:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={components:{43:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&{}.hasOwnProperty.call(t,l)){var i=u?Object.getOwnPropertyDescriptor(t,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=t[l]}return o.default=t,r&&r.set(t,o),o}(n(7804)),r=n(1529);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,u,l=[],i=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=function(){var e=o((0,t.useState)(!0),2),n=e[0],a=e[1];return t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{onClick:function(){return a(!n)}},n?"\u5173\u95ed":"\u5f00\u542f"),t.default.createElement(r.Map,{zoom:13,style:{height:350}},n&&t.default.createElement(r.MapTypeControl,null),t.default.createElement(r.MapTypeControl,{visiable:n,offset:new BMap.Size(40,40),anchor:BMAP_ANCHOR_TOP_RIGHT})))};return function(){return t.default.createElement("div",{style:{width:"100%"}},t.default.createElement(r.APILoader,{akay:"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"},t.default.createElement(l,null)))}}(),80:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&{}.hasOwnProperty.call(t,l)){var i=u?Object.getOwnPropertyDescriptor(t,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=t[l]}return o.default=t,r&&r.set(t,o),o}(n(7804)),r=n(1529);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,u,l=[],i=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=function(){var e=(0,t.useRef)(null),n=o((0,t.useState)(!0),2),a=n[0],u=n[1],l=(0,r.useMap)(),i=l.setContainer,c=l.map;(0,r.useMapTypeControl)({map:c,anchor:BMAP_NAVIGATION_CONTROL_LARGE,visiable:a}).mapTypeControl;return(0,t.useEffect)((function(){e.current&&!c&&i(e.current)}),[c]),t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{onClick:function(){return u(!a)}},a?"\u5173\u95ed":"\u5f00\u542f"),t.default.createElement("div",{ref:e,style:{height:350}}))};return function(){return t.default.createElement("div",{style:{width:"100%"}},t.default.createElement(r.APILoader,{akay:"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"},t.default.createElement(r.Provider,null,t.default.createElement(l,null))))}}()},data:{43:{name:43,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactBaiduMap = require("@uiw/react-baidu-map");\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar Example = function Example() {\n  var _useState = (0, _react.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setShow(!show);\n    }\n  }, show ? \'\u5173\u95ed\' : \'\u5f00\u542f\'), /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.Map, {\n    zoom: 13,\n    style: {\n      height: 350\n    }\n  }, show && /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.MapTypeControl, null), /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.MapTypeControl, {\n    visiable: show,\n    offset: new BMap.Size(40, 40),\n    anchor: BMAP_ANCHOR_TOP_RIGHT\n  })));\n};\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.APILoader, {\n    akay: "eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null)));\n};\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { useState, useRef } from 'react';\nimport { Map, APILoader, MapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map zoom={13} style={{ height: 350 }}>\n        {show && (\n          <MapTypeControl />\n        )}\n        <MapTypeControl visiable={show} offset={new BMap.Size(40, 40)} anchor={BMAP_ANCHOR_TOP_RIGHT} />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Example />\n    </APILoader>\n  </div>\n);\nexport default Demo;"},80:{name:80,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactBaiduMap = require("@uiw/react-baidu-map");\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar Example = function Example() {\n  var divElm = (0, _react.useRef)(null);\n  var _useState = (0, _react.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  var _useMap = (0, _reactBaiduMap.useMap)(),\n    setContainer = _useMap.setContainer,\n    map = _useMap.map;\n  var _useMapTypeControl = (0, _reactBaiduMap.useMapTypeControl)({\n      map: map,\n      anchor: BMAP_NAVIGATION_CONTROL_LARGE,\n      visiable: show\n    }),\n    mapTypeControl = _useMapTypeControl.mapTypeControl;\n  (0, _react.useEffect)(function () {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setShow(!show);\n    }\n  }, show ? \'\u5173\u95ed\' : \'\u5f00\u542f\'), /*#__PURE__*/_react["default"].createElement("div", {\n    ref: divElm,\n    style: {\n      height: 350\n    }\n  }));\n};\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.APILoader, {\n    akay: "eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG"\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.Provider, null, /*#__PURE__*/_react["default"].createElement(Example, null))));\n};\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, Provider, useMap, useMapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap();\n  const { mapTypeControl } = useMapTypeControl({\n    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show,\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Provider>\n        <Example />\n      </Provider>\n    </APILoader>\n  </div>\n);\nexport default Demo;"}},source:"MapTypeControl \u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-type-control.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-type-control)\n[![Downloads](https://img.shields.io/npm/dm/@uiw/react-baidu-map-type-control.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-baidu-map-type-control)\n\n\u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u66f4\u65b9\u4fbf\u3002\n\n```jsx\nimport { MapTypeControl, useMapTypeControl } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport MapTypeControl, { useMapTypeControl } from '@uiw/react-baidu-map-type-control';\n```\n\n\u26a0\ufe0f \u8fd9\u4e2a\u7c7b\u578b\u63a7\u4ef6\u662f\u5c5e\u4e8e\u8001\u7684\u5730\u56fe\u63a7\u4ef6\uff0c\u52a0\u8f7d\u65b0\u7684 3D \u5730\u56fe\u63a7\u4ef6[\u5b9e\u4f8b](http://lbsyun.baidu.com/jsdemo.htm#webgl2_1)\uff0c\u9700\u8981\u8bbe\u7f6e\u53c2\u6570 `type=webgl&v=1.0`\x3c!--rehype:style=background-color: #f44336; color: #fff;--\x3e \u5e76\u4e14\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002\n\n```js\n// <script type=\"text/javascript\" src=\"//api.map.baidu.com/api?type=webgl&v=1.0&ak=\u60a8\u7684\u5bc6\u94a5\"><\/script>\n// GL\u7248\u547d\u540d\u7a7a\u95f4\u4e3a BMapGL\n// \u6309\u4f4f\u9f20\u6807\u53f3\u952e\uff0c\u4fee\u6539\u503e\u659c\u89d2\u548c\u89d2\u5ea6\nvar map = new BMapGL.Map(\"allmap\");    // \u521b\u5efaMap\u5b9e\u4f8b\nmap.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // \u521d\u59cb\u5316\u5730\u56fe,\u8bbe\u7f6e\u4e2d\u5fc3\u70b9\u5750\u6807\u548c\u5730\u56fe\u7ea7\u522b\nmap.enableScrollWheelZoom(true);     //\u5f00\u542f\u9f20\u6807\u6eda\u8f6e\u7f29\u653e\nvar navi3DCtrl = new BMapGL.NavigationControl3D();  // \u6dfb\u52a03D\u63a7\u4ef6\nmap.addControl(navi3DCtrl);\n```\n\n\u5728\u7ec4\u4ef6\u4e0a\u4f20\u9012\u53c2\u6570 `type=\"webgl\"`\x3c!--rehype:style=background-color: #f44336; color: #fff;--\x3e\uff0c\u6b64\u65f6 `window.BMap`\x3c!--rehype:style=background-color: #f44336; color: #fff;--\x3e \u5bf9\u8c61\u4e3a `undefined`\uff0c\u5728\u7ec4\u4ef6\u4e2d\u505a\u4e86\u81ea\u52a8\u5904\u7406 `window.BMap = window.BMapGL`\x3c!--rehype:style=background-color: #f44336; color: #fff;--\x3e\u3002\n\n```jsx\n<APILoader\n  akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\"\n  type=\"webgl\"\n  version=\"1.0\"\n>\n  <Map />\n</APILoader>\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview\nimport React from 'react';\nimport { useState, useRef } from 'react';\nimport { Map, APILoader, MapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map zoom={13} style={{ height: 350 }}>\n        {show && (\n          <MapTypeControl />\n        )}\n        <MapTypeControl visiable={show} offset={new BMap.Size(40, 40)} anchor={BMAP_ANCHOR_TOP_RIGHT} />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Example />\n    </APILoader>\n  </div>\n);\nexport default Demo;\n```\n\n\n### \u4f7f\u7528 hooks\n\n`mapTypeControl`, `setMapTypeControl`\n\n```jsx mdx:preview\nimport React from 'react';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, Provider, useMap, useMapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap();\n  const { mapTypeControl } = useMapTypeControl({\n    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show,\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG\">\n      <Provider>\n        <Example />\n      </Provider>\n    </APILoader>\n  </div>\n);\nexport default Demo;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |\n| offset | \u63a7\u4ef6\u7684\u6c34\u5e73\u504f\u79fb\u503c\u3002 | `BMap.Size` | - |\n| type | \u8bbe\u7f6e\u6bd4\u4f8b\u5c3a\u5355\u4f4d\u5236 | `BMap.MapTypeControlType` | - |\n| mapTypes | \u8bbe\u7f6e\u6bd4\u4f8b\u5c3a\u5355\u4f4d\u5236 | `MapType[]` | - |\n\n### BMap.MapTypeControlType\n\n\u5e38\u91cf\u8868\u793a\u957f\u5ea6\u5355\u4f4d\u5236\u3002\n\n| \u5e38\u91cf | \u503c | \u63cf\u8ff0 |\n| ----- | ----- | ----- |\n| BMAP_MAPTYPE_CONTROL_HORIZONTAL | `0` | \u6309\u94ae\u6c34\u5e73\u65b9\u5f0f\u5c55\u793a\uff0c\u9ed8\u8ba4\u91c7\u7528\u6b64\u7c7b\u578b\u5c55\u793a |\n| BMAP_MAPTYPE_CONTROL_DROPDOWN | `1` | \u6309\u94ae\u5448\u4e0b\u62c9\u5217\u8868\u65b9\u5f0f\u5c55\u793a |\n| BMAP_MAPTYPE_CONTROL_MAP | `2` | \u4ee5\u56fe\u7247\u65b9\u5f0f\u5c55\u793a\u7c7b\u578b\u63a7\u4ef6\uff0c\u8bbe\u7f6e\u8be5\u7c7b\u578b\u540e\u65e0\u6cd5\u6307\u5b9amaptypes\u5c5e\u6027 |",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=925.73321c48.chunk.js.map