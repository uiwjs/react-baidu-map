(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[59],{1086:function(n,e,a){"use strict";a.r(e),e.default="MapTypeControl \u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\n===\n\n\u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u66f4\u65b9\u4fbf\u3002\n\n```jsx\nimport { MapTypeControl, useMapTypeControl } from '@uiw/react-baidu-map';\n```\n\n\u26a0\ufe0f \u8fd9\u4e2a\u7c7b\u578b\u63a7\u4ef6\u662f\u5c5e\u4e8e\u8001\u7684\u5730\u56fe\u63a7\u4ef6\uff0c\u52a0\u8f7d\u65b0\u7684 3D \u5730\u56fe\u63a7\u4ef6[\u5b9e\u4f8b](http://lbsyun.baidu.com/jsdemo.htm#webgl2_1)\uff0c\u9700\u8981\u8bbe\u7f6e\u53c2\u6570 `type=webgl&v=1.0` \u5e76\u4e14\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002\n\n```js\n// <script type=\"text/javascript\" src=\"//api.map.baidu.com/api?type=webgl&v=1.0&ak=\u60a8\u7684\u5bc6\u94a5\"><\/script>\n// GL\u7248\u547d\u540d\u7a7a\u95f4\u4e3a BMapGL\n// \u6309\u4f4f\u9f20\u6807\u53f3\u952e\uff0c\u4fee\u6539\u503e\u659c\u89d2\u548c\u89d2\u5ea6\nvar map = new BMapGL.Map(\"allmap\");    // \u521b\u5efaMap\u5b9e\u4f8b\nmap.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // \u521d\u59cb\u5316\u5730\u56fe,\u8bbe\u7f6e\u4e2d\u5fc3\u70b9\u5750\u6807\u548c\u5730\u56fe\u7ea7\u522b\nmap.enableScrollWheelZoom(true);     //\u5f00\u542f\u9f20\u6807\u6eda\u8f6e\u7f29\u653e\nvar navi3DCtrl = new BMapGL.NavigationControl3D();  // \u6dfb\u52a03D\u63a7\u4ef6\nmap.addControl(navi3DCtrl);\n```\n\n\u5728\u7ec4\u4ef6\u4e0a\u4f20\u9012\u53c2\u6570 `type=\"webgl\"`\uff0c\u6b64\u65f6 `window.BMap` \u5bf9\u8c61\u4e3a `undefined`\uff0c\u5728\u7ec4\u4ef6\u4e2d\u505a\u4e86\u81ea\u52a8\u5904\u7406 `window.BMap = window.BMapGL`\u3002\n\n```jsx\n<APILoader\n  akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\"\n  type=\"webgl\"\n  version=\"1.0\"\n>\n  <Map />\n</APILoader>\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, MapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map zoom={13} style={{ height: 350 }}>\n        {show && (\n          <MapTypeControl />\n        )}\n        <MapTypeControl visiable={show} offset={new BMap.Size(40, 40)} anchor={BMAP_ANCHOR_TOP_RIGHT} />\n      </Map>\n    </>\n  );\n}\n\nReactDOM.render((\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\n\n### \u4f7f\u7528 hooks\n\n`mapTypeControl`, `setMapTypeControl`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useMapTypeControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap();\n  const { mapTypeControl } = useMapTypeControl({\n    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show,\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: 350 }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |\n| offset | \u63a7\u4ef6\u7684\u6c34\u5e73\u504f\u79fb\u503c\u3002 | `BMap.Size` | - |\n| type | \u8bbe\u7f6e\u6bd4\u4f8b\u5c3a\u5355\u4f4d\u5236 | `BMap.MapTypeControlType` | - |\n| mapTypes | \u8bbe\u7f6e\u6bd4\u4f8b\u5c3a\u5355\u4f4d\u5236 | `MapType[]` | - |\n\n### BMap.MapTypeControlType\n\n\u5e38\u91cf\u8868\u793a\u957f\u5ea6\u5355\u4f4d\u5236\u3002\n\n| \u5e38\u91cf | \u503c | \u63cf\u8ff0 |\n| ----- | ----- | ----- |\n| BMAP_MAPTYPE_CONTROL_HORIZONTAL | `0` | \u6309\u94ae\u6c34\u5e73\u65b9\u5f0f\u5c55\u793a\uff0c\u9ed8\u8ba4\u91c7\u7528\u6b64\u7c7b\u578b\u5c55\u793a |\n| BMAP_MAPTYPE_CONTROL_DROPDOWN | `1` | \u6309\u94ae\u5448\u4e0b\u62c9\u5217\u8868\u65b9\u5f0f\u5c55\u793a |\n| BMAP_MAPTYPE_CONTROL_MAP | `2` | \u4ee5\u56fe\u7247\u65b9\u5f0f\u5c55\u793a\u7c7b\u578b\u63a7\u4ef6\uff0c\u8bbe\u7f6e\u8be5\u7c7b\u578b\u540e\u65e0\u6cd5\u6307\u5b9amaptypes\u5c5e\u6027 |"}}]);
//# sourceMappingURL=59.fb0ac978.chunk.js.map