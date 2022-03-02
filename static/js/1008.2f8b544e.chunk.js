"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1008],{1008:function(n,e,t){t.r(e),e.default="CurveLine \u5f27\u7ebf\u7ec4\u4ef6\n===\n\n\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u77e2\u91cf\u5236\u56fe\u5de5\u5177\uff08\u5982\u679c\u53ef\u7528\uff09\u5728\u5730\u56fe\u4e0a\u7ed8\u5236\u5f27\u7ebf\u7684\u5730\u56fe\u53e0\u52a0\u5c42\uff0c\u5f53\u524d\u7ec4\u4ef6\u81ea\u52a8\u52a0\u8f7d [CurveLine.min.js](https://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js) \u5305\uff0c\u52a0\u8f7d\u5b8c\u6210\u5c06\u4f1a\u6709\u4e2a `window.BMapLib` \u7684\u5168\u5c40\u5bf9\u8c61\u3002\n\n```jsx\nimport { CurveLine, useCurveLine } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport CurveLine, { useCurveLine } from '@uiw/react-baidu-map-curve-line';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { Map, CurveLine, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [enableEditing, setEnableEditing] = useState(false);\n  const [strokeOpacity, setStrokeOpacity] = useState(0.5);\n  function curveLineRef(props) {\n    if (props && props.curveLine) {\n      console.log('curveLine:', props.curveLine, props.map, props.BMapLib);\n    }\n  }\n  return (\n    <>\n      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '\u53d6\u6d88\u7f16\u8f91' : '\u7f16\u8f91'}</button>\n      <button onClick={() => setStrokeOpacity(0.7)}>\u900f\u660e\u5ea60.7</button>\n      <button onClick={() => setStrokeOpacity(0.2)}>\u900f\u660e\u5ea60.2</button>\n      <Map zoom={4} center=\"\u6b66\u6c49\" widget={['NavigationControl']} style={{ height: 350 }}>\n        <CurveLine\n          ref={curveLineRef}\n          enableEditing={enableEditing}\n          strokeOpacity={strokeOpacity}\n          strokeWeight={3}\n          strokeColor=\"blue\"\n          path={[\n            { lng: 116.432045, lat: 39.910683 },\n            { lng: 114.300404, lat: 30.63216 },\n            { lng: 121.491121, lat: 25.127053 },\n          ]}\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4f7f\u7528 hooks\n\n`curveLine`, `setCurveLine`, `path`, `setPath`, `BMapLib`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useCurveLine } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [enableEditing, setEnableEditing] = useState(false);\n  const [strokeOpacity, setStrokeOpacity] = useState(0.9);\n  const divElm = useRef(null);\n  const { setContainer, map } = useMap({\n    zoom: 8,\n    enableScrollWheelZoom: true,\n    widget: ['GeolocationControl', 'NavigationControl']\n  });\n  const { curveLine } = useCurveLine({ map,\n    enableEditing, strokeOpacity,\n    path: [\n      { lng: 118.798544, lat: 32.076761 },\n      { lng: 120.785452, lat: 30.759355 },\n      { lng: 120.895835, lat: 31.974881 },\n    ],\n  });\n  useCurveLine({ map,\n    path: [\n      { lng: 118.770948, lat: 30.9419 },\n      { lng: 120.583081, lat: 31.313834 },\n      { lng: 121.484549, lat: 31.226918 },\n    ],\n  });\n\n  useEffect(() => {\n    if (divElm.current) {\n      setContainer(divElm.current);\n    }\n  });\n\n  useEffect(() => {\n    if (map && curveLine) {\n      if (enableEditing) {\n        curveLine.enableEditing();\n      } else {\n        curveLine.disableEditing();\n      }\n    }\n  }, [enableEditing]);\n\n  useEffect(() => {\n    if (map && curveLine) {\n      curveLine.setStrokeOpacity(strokeOpacity);\n    }\n  }, [strokeOpacity]);\n\n  return (\n    <>\n      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '\u53d6\u6d88\u7f16\u8f91' : '\u7f16\u8f91'}</button>\n      <button onClick={() => setStrokeOpacity(0.7)}>\u900f\u660e\u5ea60.7</button>\n      <button onClick={() => setStrokeOpacity(0.2)}>\u900f\u660e\u5ea60.2</button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| strokeColor |  \u6298\u7ebf\u989c\u8272 | String | - |\n| strokeWeight |  \u6298\u7ebf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d | Number | - |\n| strokeOpacity |  \u6298\u7ebf\u7684\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f40 - 1 | Number | - |\n| strokeStyle |  \u6298\u7ebf\u7684\u6837\u5f0f\uff0csolid\u6216dashed | String | - |\n| enableMassClear |  \u662f\u5426\u5728\u8c03\u7528map.clearOverlays\u6e05\u9664\u6b64\u8986\u76d6\u7269\uff0c\u9ed8\u8ba4\u4e3atrue | Boolean | - |\n| enableEditing |  \u662f\u5426\u542f\u7528\u7ebf\u7f16\u8f91\uff0c\u9ed8\u8ba4\u4e3afalse | Boolean | `false` |\n| enableClicking |  \u662f\u5426\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6\uff0c\u9ed8\u8ba4\u4e3atrue | Boolean | - |\n| icons | \u914d\u7f6e\u8d34\u5408\u6298\u7ebf\u7684\u56fe\u6807 | IconSequence[] | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ----- | ----- | ----- |\n| onClick | \u70b9\u51fb\u6298\u7ebf\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onDblClick | \u53cc\u51fb\u6298\u7ebf\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseDown | \u9f20\u6807\u5728\u6298\u7ebf\u4e0a\u6309\u4e0b\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseUp | \u9f20\u6807\u5728\u6298\u7ebf\u91ca\u653e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseOut | \u9f20\u6807\u79bb\u5f00\u6298\u7ebf\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseOver | \u5f53\u9f20\u6807\u8fdb\u5165\u6298\u7ebf\u533a\u57df\u65f6\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onRemove | \u79fb\u9664\u6298\u7ebf\u65f6\u89e6\u53d1 | (event: { type: string, target: any }): void; |\n| onLineUpdate | \u8986\u76d6\u7269\u7684\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 | (event: { type: string, target: any }): void; |"}}]);
//# sourceMappingURL=1008.2f8b544e.chunk.js.map