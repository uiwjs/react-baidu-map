(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[53],{1093:function(n,e,a){"use strict";a.r(e),e.default="DrawingManager \u9f20\u6807\u7ed8\u5236\u5de5\u5177\u6761\u5e93\n===\n\n\u63d0\u4f9b\u9f20\u6807\u7ed8\u5236\u70b9\u3001\u7ebf\u3001\u9762\u3001\u591a\u8fb9\u5f62\uff08\u77e9\u5f62\u3001\u5706\uff09\u7684\u7f16\u8f91\u5de5\u5177\u6761\u7684\u5f00\u6e90\u4ee3\u7801\u5e93\u3002\u4e14\u7528\u6237\u53ef\u4f7f\u7528 JavaScript API \u5bf9\u5e94\u8986\u76d6\u7269\uff08\u70b9\u3001\u7ebf\u3001\u9762\u7b49\uff09\u7c7b\u63a5\u53e3\u5bf9\u5176\u8fdb\u884c\u5c5e\u6027\uff08\u5982\u989c\u8272\u3001\u7ebf\u5bbd\u7b49\uff09\u8bbe\u7f6e\u3001\u7f16\u8f91\uff08\u5982\u5f00\u542f\u7ebf\u9876\u70b9\u7f16\u8f91\u7b49\uff09\u7b49\u529f\u80fd\n\n> \u5f53\u524d\u7ec4\u4ef6\u81ea\u52a8\u52a0\u8f7d [DrawingManager_min.js](http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js)\uff0c\u52a0\u8f7d\u5b8c\u6210\u5c06\u4f1a\u6709\u4e2a [`window.BMapLib`](http://api.map.baidu.com/library/DrawingManager/1.4/docs/symbols/BMapLib.DrawingManager.html) \u7684\u5168\u5c40\u5bf9\u8c61\u3002\n\n```jsx\nimport { DrawingManager, useDrawingManager } from '@uiw/react-baidu-map'\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react'\nimport { Map, DrawingManager, APILoader } from '@uiw/react-baidu-map'\n\nconst styleOptions = {\n  strokeColor: 'red', //\u8fb9\u7ebf\u989c\u8272\u3002\n  fillColor: 'red', //\u586b\u5145\u989c\u8272\u3002\u5f53\u53c2\u6570\u4e3a\u7a7a\u65f6\uff0c\u5706\u5f62\u5c06\u6ca1\u6709\u586b\u5145\u6548\u679c\u3002\n  strokeWeight: 3, //\u8fb9\u7ebf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002\n  strokeOpacity: 0.8, //\u8fb9\u7ebf\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f40 - 1\u3002\n  fillOpacity: 0.6, //\u586b\u5145\u7684\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f40 - 1\u3002\n  strokeStyle: 'solid' //\u8fb9\u7ebf\u7684\u6837\u5f0f\uff0csolid\u6216dashed\u3002\n}\n\nconst Example = () => {\n  return (\n    <>\n      <Map zoom={4} center=\"\u6b66\u6c49\" widget={['NavigationControl']} style={{ height: 350 }}>\n        <DrawingManager\n          isOpen={true}\n          enableDrawingTool={true}\n          drawingToolOptions={{\n            anchor: BMAP_ANCHOR_TOP_RIGHT,\n            offset: new BMap.Size(5, 5)\n          }}\n          circleOptions={styleOptions}\n          polylineOptions={styleOptions}\n          polygonOptions={styleOptions}\n          rectangleOptions={styleOptions}\n        />\n      </Map>\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_)\n```\n\n\n### \u4f7f\u7528 hooks\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n\n```jsx\nimport { useRef, useEffect, useState } from 'react'\nimport { Map, APILoader, useMap, useDrawingManager } from '@uiw/react-baidu-map'\n\nconst Example = () => {\n\n  const styleOptions = {\n    strokeColor: 'red', // \u8fb9\u7ebf\u989c\u8272\u3002\n    fillColor: 'red', // \u586b\u5145\u989c\u8272\u3002\u5f53\u53c2\u6570\u4e3a\u7a7a\u65f6\uff0c\u5706\u5f62\u5c06\u6ca1\u6709\u586b\u5145\u6548\u679c\u3002\n    strokeWeight: 3, // \u8fb9\u7ebf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002\n    strokeOpacity: 0.8, // \u8fb9\u7ebf\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f40 - 1\u3002\n    fillOpacity: 0.6, // \u586b\u5145\u7684\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f40 - 1\u3002\n    strokeStyle: 'solid' // \u8fb9\u7ebf\u7684\u6837\u5f0f\uff0csolid\u6216dashed\u3002\n  }\n\n  const divElm = useRef(null)\n\n  const { setContainer, map } = useMap({\n    zoom: 8,\n    enableScrollWheelZoom: true,\n    widget: ['GeolocationControl', 'NavigationControl']\n  })\n\n  const { drawingManager } = useDrawingManager({\n    map,\n    isOpen: true, // \u662f\u5426\u5f00\u542f\u7ed8\u5236\u6a21\u5f0f\n    enableDrawingTool: true, // \u662f\u5426\u663e\u793a\u5de5\u5177\u680f\n    drawingToolOptions: {\n      anchor: BMAP_ANCHOR_TOP_RIGHT, // \u4f4d\u7f6e\n      offset: new BMap.Size(5, 5) // \u504f\u79bb\u503c\n    },\n    circleOptions: styleOptions, // \u5706\u7684\u6837\u5f0f\n    polylineOptions: styleOptions, // \u7ebf\u7684\u6837\u5f0f\n    polygonOptions: styleOptions, // \u591a\u8fb9\u5f62\u7684\u6837\u5f0f\n    rectangleOptions: styleOptions // \u77e9\u5f62\u7684\u6837\u5f0f\n  })\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current)\n    }\n  }, [map])\n\n  return (\n    <>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_)\n```\n\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| isOpen | \u662f\u5426\u5f00\u542f\u7ed8\u5236\u6a21\u5f0f | `boolean` | - |\n| enableDrawingTool |  \u662f\u5426\u6dfb\u52a0\u7ed8\u5236\u5de5\u5177\u680f\u63a7\u4ef6 | `boolean` | \u9ed8\u8ba4\u4e0d\u6dfb\u52a0 |\n| drawingToolOptions |  \u6298\u7ebf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d | Json Object | \u53ef\u9009\u7684\u8f93\u5165\u53c2\u6570\uff0c\u975e\u5fc5\u586b\u9879 |\n| enableCalculate |  \u7ed8\u5236\u662f\u5426\u8fdb\u884c\u6d4b\u8ddd(\u753b\u7ebf\u65f6\u5019)\u3001\u6d4b\u9762(\u753b\u5706\u3001\u591a\u8fb9\u5f62\u3001\u77e9\u5f62) | `boolean` | - |\n\n### drawingToolOptions\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| anchor | \u662f\u5426\u5f00\u542f\u7ed8\u5236\u6a21\u5f0f | ControlAnchor | \u505c\u9760\u4f4d\u7f6e\u3001\u9ed8\u8ba4\u5de6\u4e0a\u89d2 |\n| offset | \u504f\u79fb\u503c | BMap.Size | - |\n| scale | \u5de5\u5177\u680f\u7684\u7f29\u653e\u6bd4\u4f8b,\u9ed8\u8ba4\u4e3a1 | Number | - |\n| drawingModes | \u5de5\u5177\u680f\u4e0a\u53ef\u4ee5\u9009\u62e9\u51fa\u73b0\u7684\u7ed8\u5236\u6a21\u5f0f | Array | - |\n\n### \u5b98\u65b9\u6587\u6863\n\n- demo: https://lbsyun.baidu.com/jsdemo.htm#f0_7\n- api: http://api.map.baidu.com/library/DrawingManager/1.4/docs/symbols/BMapLib.DrawingManager.html\n\n"}}]);
//# sourceMappingURL=53.031fefb8.chunk.js.map