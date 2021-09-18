(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[64],{786:function(n,e,t){"use strict";t.r(e),e.default="Polyline \u6298\u7ebf\u7ec4\u4ef6\n===\n\n\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u77e2\u91cf\u5236\u56fe\u5de5\u5177\uff08\u5982\u679c\u53ef\u7528\uff09\u5728\u5730\u56fe\u4e0a\u7ed8\u5236\u6298\u7ebf\u7684\u5730\u56fe\u53e0\u52a0\u5c42\u3002\n\n```jsx\nimport { Polyline, usePolyline } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport Polyline, { usePolyline } from '@uiw/react-baidu-map-polyline';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { Map, Polyline, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [isHiden, setIsHiden] = useState(true);\n  const [enableEditing, setEnableEditing] = useState(false);\n  const [strokeOpacity, setStrokeOpacity] = useState(0.9);\n  return (\n    <>\n      <button onClick={() => setIsHiden(!isHiden)}>{isHiden ? \"\u9690\u85cf\" : \"\u663e\u793a\"}</button>\n      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '\u53d6\u6d88\u7f16\u8f91' : '\u7f16\u8f91'}</button>\n      <button onClick={() => setStrokeOpacity(0.7)}>\u900f\u660e\u5ea60.7</button>\n      <button onClick={() => setStrokeOpacity(0.2)}>\u900f\u660e\u5ea60.2</button>\n      <Map zoom={13} center=\"\u5317\u4eac\" widget={['NavigationControl']} style={{ height: 350 }}>\n        {isHiden && (\n          <Polyline\n            enableEditing={enableEditing}\n            strokeOpacity={strokeOpacity}\n            path={[\n              { lng: 116.399, lat: 39.910 },\n              { lng: 116.405, lat: 39.920 },\n              { lng: 116.423493, lat: 39.907445 },\n            ]}\n          />\n        )}\n        {isHiden && (\n          <Polyline\n            enableEditing={enableEditing}\n            strokeOpacity={strokeOpacity}\n            path={[\n              { lng: 116.399, lat: 39.920977 },\n              { lng: 116.385243, lat: 39.913063 },\n              { lng: 116.394226, lat: 39.917988 },\n              { lng: 116.401772, lat: 39.921364 },\n              { lng: 116.41248, lat: 39.927893 },\n            ]}\n          />\n        )}\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4f7f\u7528 hooks\n\n`polyline`, `setPolyline`, `path`, `setPath`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, usePolyline } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [enableEditing, setEnableEditing] = useState(false);\n  const [strokeOpacity, setStrokeOpacity] = useState(0.9);\n  const divElm = useRef(null);\n  const { setContainer, map } = useMap({\n    zoom: 13,\n    center: '\u5317\u4eac',\n    widget: ['GeolocationControl', 'NavigationControl']\n  });\n  const { polyline } = usePolyline({ map,\n    enableEditing, strokeOpacity,\n    path: [\n      { lng: 116.387112, lat: 39.920977 },\n      { lng: 116.385243, lat: 39.913063 },\n      { lng: 116.394226, lat: 39.917988 },\n      { lng: 116.401772, lat: 39.921364 },\n      { lng: 116.41248, lat: 39.927893 },\n    ],\n  });\n  usePolyline({ map,\n    path: [\n      { lng: 116.399, lat: 39.910 },\n      { lng: 116.405, lat: 39.920 },\n      { lng: 116.423493, lat: 39.907445 },\n    ],\n  });\n  useEffect(() => {\n    if (divElm.current) {\n      setContainer(divElm.current);\n    }\n  });\n  useEffect(() => {\n    if (map) {\n      // \u542f\u7528\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\uff0c\u9ed8\u8ba4\u7981\u7528\n      map.enableScrollWheelZoom();\n    }\n  }, [map]);\n\n  useEffect(() => {\n    if (map && polyline) {\n      if (enableEditing) {\n        polyline.setFillColor('red');\n        polyline.enableEditing();\n      } else {\n        polyline.setFillColor('transparent');\n        polyline.disableEditing();\n      }\n    }\n  }, [enableEditing]);\n\n  useEffect(() => {\n    if (map && polyline) {\n      polyline.setStrokeOpacity(strokeOpacity);\n    }\n  }, [strokeOpacity]);\n\n  return (\n    <>\n      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '\u53d6\u6d88\u7f16\u8f91' : '\u7f16\u8f91'}</button>\n      <button onClick={() => setStrokeOpacity(0.7)}>\u900f\u660e\u5ea60.7</button>\n      <button onClick={() => setStrokeOpacity(0.2)}>\u900f\u660e\u5ea60.2</button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| strokeColor |  \u6298\u7ebf\u989c\u8272 | String | - |\n| strokeWeight |  \u6298\u7ebf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d | Number | - |\n| strokeOpacity |  \u6298\u7ebf\u7684\u900f\u660e\u5ea6\uff0c\u53d6\u503c\u8303\u56f40 - 1 | Number | - |\n| strokeStyle |  \u6298\u7ebf\u7684\u6837\u5f0f\uff0csolid\u6216dashed | String | - |\n| enableMassClear |  \u662f\u5426\u5728\u8c03\u7528map.clearOverlays\u6e05\u9664\u6b64\u8986\u76d6\u7269\uff0c\u9ed8\u8ba4\u4e3atrue | Boolean | - |\n| enableEditing |  \u662f\u5426\u542f\u7528\u7ebf\u7f16\u8f91\uff0c\u9ed8\u8ba4\u4e3afalse | Boolean | - |\n| enableClicking |  \u662f\u5426\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6\uff0c\u9ed8\u8ba4\u4e3atrue | Boolean | - |\n| icons | \u914d\u7f6e\u8d34\u5408\u6298\u7ebf\u7684\u56fe\u6807 | IconSequence[] | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ----- | ----- | ----- |\n| onClick | \u70b9\u51fb\u6298\u7ebf\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onDblClick | \u53cc\u51fb\u6298\u7ebf\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseDown | \u9f20\u6807\u5728\u6298\u7ebf\u4e0a\u6309\u4e0b\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseUp | \u9f20\u6807\u5728\u6298\u7ebf\u91ca\u653e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseOut | \u9f20\u6807\u79bb\u5f00\u6298\u7ebf\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onMouseOver | \u5f53\u9f20\u6807\u8fdb\u5165\u6298\u7ebf\u533a\u57df\u65f6\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |\n| onRemove | \u79fb\u9664\u6298\u7ebf\u65f6\u89e6\u53d1 | (event: { type: string, target: any }): void; |\n| onLineUpdate | \u8986\u76d6\u7269\u7684\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 | (event: { type: string, target: any }): void; |"}}]);
//# sourceMappingURL=64.94b31c30.chunk.js.map