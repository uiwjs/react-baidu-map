"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8534],{8534:function(e,n,a){a.r(n),n.default={components:{33:function(){var e,n=(e=a(1473))&&e.__esModule?e:{default:e},t=a(9790);return function(){return n.default.createElement("div",{style:{width:"100%"}},n.default.createElement(t.APILoader,{akay:"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f"},n.default.createElement(t.Map,{autoLocalCity:!0,style:{height:350}})))}}()},data:{33:{name:33,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _reactBaiduMap = require("@uiw/react-baidu-map");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.APILoader, {\n    akay: "GTrnXa5hwXGwgQnTBG28SHBubErMKm3f"\n  }, /*#__PURE__*/_react["default"].createElement(_reactBaiduMap.Map, {\n    autoLocalCity: true,\n    style: {\n      height: 350\n    }\n  })));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Map, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Map autoLocalCity style={{ height: 350 }} />\n    </APILoader>\n  </div>\n);\n\nexport default Demo;"}},source:"APILoader\n===\n\n\u7528\u4e8e\u52a0\u8f7d\u767e\u5ea6\u5730\u56fe SDK \u4f9d\u8d56\uff0c\u52a0\u8f7d\u5b8c\u6210\uff0c\u5168\u5c40\u5c06\u4f1a\u6709 **`window.BMap`** \u5bf9\u8c61\u3002\n\n- [x] \u81ea\u52a8\u52a0\u8f7d\u767e\u5ea6\u5730\u56fe SDK \u4f9d\u8d56\n- [x] \u907f\u514d\u91cd\u590d\u52a0\u8f7d SDK \u4f9d\u8d56\n\n```jsx\nimport { APILoader } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport APILoader from '@uiw/react-baidu-map-api-loader';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\nMap \u7684\u7236\u7ec4\u4ef6\u5fc5\u987b\u5177\u6709\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff1b\n\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 `APILoader` \u7ec4\u4ef6\uff0c\u9700\u8981\u624b\u52a8\u5c06 SDK \u5f15\u5165\u5230 HTML \u4e2d\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 3px;--\x3e\n\n\x3c!--rehype:--\x3e\n```html\n<script\n  type=\"text/javascript\"\n  src=\"http://api.map.baidu.com/api?v=3.0&ak=GTrnXa5hwXGwgQnTBG28SHBubErMKm3f&callback=load_bmap_sdk\"\n>\n<\/script>\n```\n\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Map, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Map autoLocalCity style={{ height: 350 }} />\n    </APILoader>\n  </div>\n);\n\nexport default Demo;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| akay | **`\u5fc5\u586b`** \u60a8\u9700\u5148[\u7533\u8bf7\u5bc6\u94a5\uff08ak\uff09](http://lbs.baidu.com/apiconsole/key?application=key)\u624d\u53ef\u4f7f\u7528\u8be5\u670d\u52a1\uff0c\u63a5\u53e3\u65e0\u4f7f\u7528\u6b21\u6570\u9650\u5236\uff0c\u8bf7\u5f00\u53d1\u8005\u653e\u5fc3\u4f7f\u7528\u3002 | string | - |\n| version | SDK \u7248\u672c | string | `3.0` |\n| protocol | \u534f\u8bae\uff0c\u9ed8\u8ba4\u662f\u6839\u636e\u5f53\u524d\u7f51\u7ad9\u534f\u8bae\u7684 | `http`/`https` | `window.location.protocol` |\n| hostAndPath | \u8bf7\u6c42 `SDK` \u7684\u524d\u534a\u90e8\u5206 | string | `api.map.baidu.com/api` |\n| type | \u53ef\u9009\u4f7f\u7528\u767e\u5ea6\u7684 `webgl` \u5730\u56fe | `webgl` | - |"}}}]);
//# sourceMappingURL=8534.35d3665f.chunk.js.map