(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[57],{1089:function(n,e,t){"use strict";t.r(e),e.default="Label \u6587\u672c\u6807\u6ce8\n===\n\n\u8868\u793a\u5730\u56fe\u4e0a\u5305\u542b\u4fe1\u606f\u7684\u7a97\u53e3\u3002\n\n```jsx\nimport { Label, useLabel } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u5b98\u65b9\u539f\u751f JS \u5b9e\u4f8b\uff1ahttps://lbsyun.baidu.com/jsdemo.htm#c1_14\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { Map, Label, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [visiable, setVisiable] = useState(true);\n  const [content, setContent] = useState('\u4e0a\u6d77\u5e02 <del>\u9752\u6d66\u533a</del> \u5f90\u6cfe\u9547\u76c8\u6e2f\u4e1c\u8def');\n  function labelRef(props) {\n    if (props && props.label) {\n      console.log('label:', props.label, props.map, props.BMap);\n    }\n  }\n  return (\n    <>\n      <input value={content} onChange={(e) => setContent(e.target.value)} />\n      <button onClick={() => setVisiable(!visiable)}>{visiable ? '\u9690\u85cf' : '\u663e\u793a'}</button>\n      <Map zoom={13} widget={['NavigationControl']} style={{ height: 350 }} />\n        <Label visiable={visiable} content={content} position={{ lng: 121.436256, lat: 31.246926 }}/>\n        <Label\n          ref={labelRef}\n          title=\"wwww\"\n          content={content}\n          position={{ lng: 121.501365, lat: 31.224942 }}\n          onClick={() => setContent('\u60a8\uff01\u70b9\u51fb\u4e86\u6587\u672c\u6807\u6ce8\uff01')}\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4f7f\u7528 hooks\n\n`label`, `setLabel`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useLabel } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const { map, setContainer, zoom, setZoom, center } = useMap({\n    zoom: 9,\n    widget: ['GeolocationControl', 'NavigationControl']\n  });\n  const { label } = useLabel({ map,\n    content: '\u5f90\u6cfe\u9547',\n    position: { lng: 121.436256, lat: 31.246926 },\n    onClick: () => {\n      console.log('\u70b9\u51fb\u4e8b\u4ef6\uff01');\n    }\n  });\n\n  useEffect(() => {\n    if (divElm.current) {\n      setContainer(divElm.current);\n    }\n  });\n  let counts = zoom || 15;\n  return (\n    <>\n      <button onClick={() => setZoom(counts-1)}>-</button>\n      <span>{zoom || 15}</span>\n      <button onClick={() => setZoom(counts+1)}>+</button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| content | \u6587\u672c\u6807\u6ce8\u5185\u5bb9 | `string` | - |\n| offset | \u6587\u672c\u6807\u6ce8\u7684\u4f4d\u7f6e\u504f\u79fb\u503c | `Size` | - |\n| position | \u6587\u672c\u6807\u6ce8\u7684\u5730\u7406\u4f4d\u7f6e | `Point` | - |\n| title | \u6587\u672c\u6807\u6ce8\u7684\u6807\u9898 | `string` | - |\n| zIndex | \u8bbe\u7f6e\u8986\u76d6\u7269\u7684 zIndex | `number` | - |\n| style | \u6587\u672c\u6807\u6ce8\u6837\u5f0f\uff0c\u8be5\u6837\u5f0f\u5c06\u4f5c\u7528\u4e8e\u6587\u672c\u6807\u6ce8\u7684\u5bb9\u5668\u5143\u7d20\u4e0a\uff0c\u5982\uff1a`{ color : \"red\", fontSize : \"12px\" }`\u3002 | `Style` | - |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| enableMassClear | \u5141\u8bb8\u8986\u76d6\u7269\u5728 map.clearOverlays \u65b9\u6cd5\u4e2d\u88ab\u6e05\u9664 | `boolean` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| onClick | \u70b9\u51fb\u6587\u672c\u6807\u6ce8\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |\n| onDblClick | \u53cc\u51fb\u6587\u672c\u6807\u6ce8\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |\n| onMouseDown | \u9f20\u6807\u5728\u6587\u672c\u6807\u6ce8\u4e0a\u6309\u4e0b\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |\n| onMouseUp | \u9f20\u6807\u5728\u6587\u672c\u6807\u6ce8\u91ca\u653e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |\n| onMouseOout | \u9f20\u6807\u79bb\u5f00\u6587\u672c\u6807\u6ce8\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |\n| onMouseOver | \u5f53\u9f20\u6807\u8fdb\u5165\u6587\u672c\u6807\u6ce8\u533a\u57df\u65f6\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |\n| onRemove | \u79fb\u9664\u6587\u672c\u6807\u6ce8\u65f6\u89e6\u53d1 | (event: { type: string, target: any }) => void; | - |\n| onRightClick | \u53f3\u952e\u70b9\u51fb\u6807\u6ce8\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }) => void; | - |"}}]);
//# sourceMappingURL=57.a0a754b8.chunk.js.map