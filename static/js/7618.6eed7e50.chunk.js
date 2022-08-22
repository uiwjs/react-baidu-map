"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7618],{7618:function(e,n,o){o.r(n),n.default={components:{19:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=function(n,o){if(!o&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var t=r(o);if(t&&t.has(n))return t.get(n);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in n)if("default"!==l&&Object.prototype.hasOwnProperty.call(n,l)){var i=a?Object.getOwnPropertyDescriptor(n,l):null;i&&(i.get||i.set)?Object.defineProperty(c,l,i):c[l]=n[l]}c.default=n,t&&t.set(n,c);return c}(o(1473)),t=o(9790);function r(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,o=new WeakMap;return(r=function(e){return e?o:n})(e)}var c=function(){var e=(0,n.useRef)();return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",null,n.default.createElement("input",{type:"button",value:"\u5f00\u542f\u6d4b\u8ddd",onClick:function(){e.current.open()}}),n.default.createElement("input",{type:"button",value:"\u5173\u95ed\u6d4b\u8ddd",onClick:function(){e.current.close()}})),n.default.createElement(t.Map,{mapClick:!1,style:{height:350}},(function(n){var o=n.map;e.current=new BMapGLLib.DistanceTool(o),e.current.addEventListener("drawend",(function(e){console.group("drawend"),console.log(e.points),console.log(e.overlays),console.log(e.distance),console.groupEnd()})),e.current.addEventListener("addpoint",(function(e){console.group("addpoint"),console.log(e.point),console.log(e.pixel),console.log(e.index),console.log(e.distance),console.groupEnd()})),e.current.addEventListener("removepolyline",(function(e){console.group("removepolyline"),console.log(e),console.groupEnd()}))})))};return function(){return n.default.createElement("div",{style:{width:"100%"}},n.default.createElement(t.APILoader,{type:"webgl",akay:"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f"},n.default.createElement(t.RequireScript,{src:"//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js"},n.default.createElement(c,null))))}}()},data:{19:{name:19,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireWildcard(require("react"));\n\nvar _reactBaiduMap = require("@uiw/react-baidu-map");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar Example = function Example() {\n  var myDis = (0, _react.useRef)();\n\n  var openHandle = function openHandle() {\n    myDis.current.open();\n  };\n\n  var closeHandle = function closeHandle() {\n    myDis.current.close();\n  };\n\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {\n    type: "button",\n    value: "\\u5F00\\u542F\\u6D4B\\u8DDD",\n    onClick: openHandle\n  }), /*#__PURE__*/_react["default"].createElement("input", {\n    type: "button",\n    value: "\\u5173\\u95ED\\u6D4B\\u8DDD",\n    onClick: closeHandle\n  })), /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.Map, {\n    mapClick: false,\n    style: {\n      height: 350\n    }\n  }, function (_ref) {\n    var map = _ref.map;\n    myDis.current = new BMapGLLib.DistanceTool(map); // \u76d1\u542c\u6d4b\u8ddd\u8fc7\u7a0b\u4e2d\u7684\u9f20\u6807\u4e8b\u4ef6\n\n    myDis.current.addEventListener(\'drawend\', function (e) {\n      console.group("drawend");\n      console.log(e.points);\n      console.log(e.overlays);\n      console.log(e.distance);\n      console.groupEnd();\n    });\n    myDis.current.addEventListener("addpoint", function (e) {\n      console.group("addpoint");\n      console.log(e.point);\n      console.log(e.pixel);\n      console.log(e.index);\n      console.log(e.distance);\n      console.groupEnd();\n    });\n    myDis.current.addEventListener("removepolyline", function (e) {\n      console.group("removepolyline");\n      console.log(e);\n      console.groupEnd();\n    });\n  }));\n};\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.APILoader, {\n    type: "webgl",\n    akay: "GTrnXa5hwXGwgQnTBG28SHBubErMKm3f"\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.RequireScript, {\n    src: "//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null))));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { useRef } from \'react\';\nimport { Map, APILoader, RequireScript } from \'@uiw/react-baidu-map\';\n\nconst Example = () => {\n  const myDis = useRef();\n  const openHandle = () => {\n    myDis.current.open();\n  }\n  const closeHandle = () => {\n    myDis.current.close();\n  }\n  return (\n    <>\n      <div>\n        <input type="button" value="\u5f00\u542f\u6d4b\u8ddd" onClick={openHandle} />\n        <input type="button" value="\u5173\u95ed\u6d4b\u8ddd" onClick={closeHandle} />\n      </div>\n      <Map mapClick={false} style={{ height: 350 }}>\n          {({ map }) => {\n            myDis.current = new BMapGLLib.DistanceTool(map);\n            // \u76d1\u542c\u6d4b\u8ddd\u8fc7\u7a0b\u4e2d\u7684\u9f20\u6807\u4e8b\u4ef6\n            myDis.current.addEventListener(\'drawend\', function(e) {\n              console.group("drawend");\n              console.log(e.points);\n              console.log(e.overlays);\n              console.log(e.distance);\n              console.groupEnd();\n            });\n            myDis.current.addEventListener("addpoint", function(e) {\n              console.group("addpoint");\n              console.log(e.point);\n              console.log(e.pixel);\n              console.log(e.index);\n              console.log(e.distance);\n              console.groupEnd();\n            });\n            myDis.current.addEventListener("removepolyline", function(e) {\n              console.group("removepolyline");\n              console.log(e);\n              console.groupEnd();\n            });\n          }}\n      </Map>\n    </>\n  );\n};\n\nconst Demo = () => (\n  <div style={{ width: \'100%\' }}>\n    <APILoader type="webgl" akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">\n      <RequireScript src="//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js">\n        <Example />\n      </RequireScript>\n    </APILoader>\n  </div>\n);\n\nexport default Demo;'}},source:'RequireScript \u52a0\u8f7d\u7b2c\u4e09\u65b9\u5305\n===\n\n\u63d0\u4f9b\u4e00\u4e2a\u7ec4\u4ef6\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5305\uff0c\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a `requireScript` \u65b9\u6cd5\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5305\u3002\n\n```jsx\nimport { RequireScript, requireScript } from \'@uiw/react-baidu-map\';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport RequireScript, { requireScript } from \'@uiw/react-baidu-map-require-script\';\n```\n\n> \u26a0\ufe0f \u6ce8\u610f\uff1a\u9884\u89c8\u5f53\u524d\u9875\u9762\u9700\u8981\u5237\u65b0\u9875\u9762\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u4e0b\u9762\u5b9e\u4f8b\u6765\u81ea\u9ad8\u5fb7\u5b98\u65b9\uff1a https://lbsyun.baidu.com/jsdemo.htm#gl_tool_1\n\n```jsx mdx:preview\nimport React from \'react\';\nimport { useRef } from \'react\';\nimport { Map, APILoader, RequireScript } from \'@uiw/react-baidu-map\';\n\nconst Example = () => {\n  const myDis = useRef();\n  const openHandle = () => {\n    myDis.current.open();\n  }\n  const closeHandle = () => {\n    myDis.current.close();\n  }\n  return (\n    <>\n      <div>\n        <input type="button" value="\u5f00\u542f\u6d4b\u8ddd" onClick={openHandle} />\n        <input type="button" value="\u5173\u95ed\u6d4b\u8ddd" onClick={closeHandle} />\n      </div>\n      <Map mapClick={false} style={{ height: 350 }}>\n          {({ map }) => {\n            myDis.current = new BMapGLLib.DistanceTool(map);\n            // \u76d1\u542c\u6d4b\u8ddd\u8fc7\u7a0b\u4e2d\u7684\u9f20\u6807\u4e8b\u4ef6\n            myDis.current.addEventListener(\'drawend\', function(e) {\n              console.group("drawend");\n              console.log(e.points);\n              console.log(e.overlays);\n              console.log(e.distance);\n              console.groupEnd();\n            });\n            myDis.current.addEventListener("addpoint", function(e) {\n              console.group("addpoint");\n              console.log(e.point);\n              console.log(e.pixel);\n              console.log(e.index);\n              console.log(e.distance);\n              console.groupEnd();\n            });\n            myDis.current.addEventListener("removepolyline", function(e) {\n              console.group("removepolyline");\n              console.log(e);\n              console.groupEnd();\n            });\n          }}\n      </Map>\n    </>\n  );\n};\n\nconst Demo = () => (\n  <div style={{ width: \'100%\' }}>\n    <APILoader type="webgl" akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">\n      <RequireScript src="//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js">\n        <Example />\n      </RequireScript>\n    </APILoader>\n  </div>\n);\n\nexport default Demo;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| src | \u7b2c\u4e09\u65b9\u5305\u7684 URL \u5730\u5740 | `string` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| onCompleted | \u52a0\u8f7d\u5b8c\u6210 | () => void; | - |\n| onFailed | \u52a0\u8f7d\u5931\u8d25 | () => void; | - |'}}}]);
//# sourceMappingURL=7618.6eed7e50.chunk.js.map