(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[67],{1098:function(n,e,o){"use strict";o.r(e),e.default='RequireScript \u52a0\u8f7d\u7b2c\u4e09\u65b9\u5305\n===\n\n\u63d0\u4f9b\u4e00\u4e2a\u7ec4\u4ef6\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5305\uff0c\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a `requireScript` \u65b9\u6cd5\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5305\u3002\n\n```jsx\nimport { RequireScript, requireScript } from \'@uiw/react-baidu-map\';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u4e0b\u9762\u5b9e\u4f8b\u6765\u81ea\u9ad8\u5fb7\u5b98\u65b9\uff1a https://lbsyun.baidu.com/jsdemo.htm#gl_tool_1\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from \'react-dom\';\nimport { useRef } from \'react\';\nimport { Map, APILoader, RequireScript } from \'@uiw/react-baidu-map\';\n\nconst Demo = () => {\n  const myDis = useRef();\n  const openHandle = () => {\n    myDis.current.open();\n  }\n  const closeHandle = () => {\n    myDis.current.close();\n  }\n  return (\n    <>\n      <div>\n        <input type="button" value="\u5f00\u542f\u6d4b\u8ddd" onClick={openHandle} />\n        <input type="button" value="\u5173\u95ed\u6d4b\u8ddd" onClick={closeHandle} />\n      </div>\n      <Map mapClick={false} style={{ height: 350 }}>\n        <RequireScript src="//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js">\n          {({ map }) => {\n            myDis.current = new BMapGLLib.DistanceTool(map);\n            // \u76d1\u542c\u6d4b\u8ddd\u8fc7\u7a0b\u4e2d\u7684\u9f20\u6807\u4e8b\u4ef6\n            myDis.current.addEventListener(\'drawend\', function(e) {\n              console.group("drawend");\n              console.log(e.points);\n              console.log(e.overlays);\n              console.log(e.distance);\n              console.groupEnd();\n            });\n            myDis.current.addEventListener("addpoint", function(e) {\n              console.group("addpoint");\n              console.log(e.point);\n              console.log(e.pixel);\n              console.log(e.index);\n              console.log(e.distance);\n              console.groupEnd();\n            });\n            myDis.current.addEventListener("removepolyline", function(e) {\n              console.group("removepolyline");\n              console.log(e);\n              console.groupEnd();\n            });\n          }}\n        </RequireScript>\n      </Map>\n    </>\n  );\n};\nReactDOM.render((\n  <div style={{ width: \'100%\' }}>\n    <APILoader type="webgl" akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">\n      <Demo />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| src | \u7b2c\u4e09\u65b9\u5305\u7684 URL \u5730\u5740 | `string` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| onCompleted | \u52a0\u8f7d\u5b8c\u6210 | () => void; | - |\n| onFailed | \u52a0\u8f7d\u5931\u8d25 | () => void; | - |'}}]);
//# sourceMappingURL=67.ea608bcb.chunk.js.map