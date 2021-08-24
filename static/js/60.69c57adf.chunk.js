(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[60],{1080:function(n,e,t){"use strict";t.r(e),e.default="Marker \u70b9\u6807\u6ce8\u7ec4\u4ef6\n===\n\n\u8868\u793a\u5730\u56fe\u4e0a\u4e00\u4e2a\u56fe\u50cf\u6807\u6ce8\u3002\n\n```jsx\nimport { Marker, useMarker } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Map, Marker, APILoader } from '@uiw/react-baidu-map';\n\nconst Demo = () => {\n  function markerRef(props) {\n    if (props && props.marker) {\n      console.log('marker::', props.marker, props.map, props.BMap);\n    }\n  }\n  return (\n    <div style={{ width: '100%', height: 350 }}>\n      <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n        <Map widget={['NavigationControl']} zoom={13}>\n          <Marker ref={markerRef} animation={2} position={{ lng: 121.411535, lat: 31.222965 }} />\n          <Marker position={{ lng: 121.465145, lat: 31.241245 }} />\n          <Marker position={{ lng: 121.466008, lat: 31.220001 }} type=\"loc_red\" /> \n          <Marker position={{ lng: 121.501365, lat: 31.224942 }} type=\"simple_blue\" />\n          <Marker position={{ lng: 121.464858, lat: 31.202705 }} type=\"simple_red\" />\n          <Marker position={{ lng: 121.458534, lat: 31.224942}} type=\"start\" />\n          <Marker position={{ lng: 121.434962, lat: 31.200729 }} type=\"end\" />\n          <Marker position={{ lng: 121.478943, lat: 31.2531 }} type=\"location\" />\n          <Marker position={{ lng: 121.516888, lat: 31.249149 }} type=\"red1\" />\n          <Marker position={{ lng: 121.512576, lat: 31.240504 }} type=\"red2\" />\n          <Marker position={{ lng: 121.513726, lat: 31.233588}} type=\"blue3\" />\n          <Marker position={{ lng: 121.520912, lat: 31.234576}} type=\"blue4\" />\n          <Marker position={{ lng: 121.491879, lat: 31.195045}} type=\"dot_red\" />\n          <Marker position={{ lng: 121.485555, lat: 31.195045}} type=\"dot_blue\" />\n        </Map>\n      </APILoader>\n    </div>\n  );\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u81ea\u5b9a\u4e49\u6807\u70b9\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nconst CustomIcon = () => {\n  const [position, setPosition] = useState({ lng: 121.466008, lat: 31.220001 });\n  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));\n  return (\n    <>\n      <button onClick={() => setPosition({lng: 121.545202, lat: 31.246679})}>\u8bbe\u7f6e position</button>\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }} style={{ height: 350 }}>\n        <Marker position={position} icon={icon} animation={2} />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <CustomIcon />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u6dfb\u52a0\u4e8b\u4ef6\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nconst CustomIcon = () => {\n  const [count, setCount] = useState(0)\n  const [message, setMessage] = useState('\u8bf7\u70b9\u51fb\u6807\u6ce8\u70b9\uff0c\u5c0f\u7bad\u5934!')\n  const [addEvent, setAddEvent] = useState(false);\n  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));\n  function clickHandle({ type, target}) {\n    console.log('~~~~~clickHandle~~~~~', type, target);\n    setMessage('\u554a\u54c8\u54c8\uff01\u4f60\u771f\u7684\u70b9\u51fb\u4e86\uff01');\n    setCount(count + 1);\n  }\n  return (\n    <>\n      <div>{message} {count}</div>\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>\n        <Marker onClick={clickHandle} position={{ lng: 121.466008, lat: 31.220001 }}  />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <CustomIcon />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u53ef\u62d6\u62fd\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Map, Marker, APILoader } from '@uiw/react-baidu-map';\n\nconst CustomIcon = () => {\n  const [enableDragging, setEnableDragging] = useState(true);\n  const [postion, setPostion] = useState();\n  const [isAddEvent, setIsAddEvent] = useState(false);\n  const iconfox = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));\n  const iconfox1 = new BMap.Icon('http://api0.map.bdimg.com/images/copyright_logo.png', new BMap.Size(300, 157));\n  const [icon, setIcon] = useState(iconfox);\n  function markerRef(props) {\n    if (props && props.marker && !isAddEvent) {\n      setIsAddEvent(true)\n      props.marker.removeEventListener('dragend', dragendHandle);\n      props.marker.addEventListener('dragend', dragendHandle);\n    }\n  }\n  function dragendHandle({ type, target, pixel, point }) {\n    console.log('dragendHandle', type, target, pixel, point);\n    setPostion(JSON.stringify(point));\n  }\n  return (\n    <>\n      <button onClick={() => setEnableDragging(!enableDragging)}>{enableDragging ? '\u7981\u7528\u62d6\u62fd' : '\u542f\u7528\u62d6\u62fd'}</button>\n      <button onClick={() => setIcon(iconfox1)}>\u8bbe\u7f6eicon</button>\n      <button onClick={() => setIcon(iconfox)}>\u8bbe\u7f6eicon</button>\n      {postion && <span>{postion}</span>}\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>\n        <Marker\n          ref={markerRef}\n          enableDragging={enableDragging}\n          position={{ lng: 121.466008, lat: 31.220001 }} icon={icon}\n        />\n        <Marker\n          ref={markerRef}\n          enableDragging={enableDragging}\n          position={{ lng: 121.458534, lat: 31.224942}} type=\"start\"\n        />\n        <Marker\n          ref={markerRef}\n          enableDragging={enableDragging}\n          position={{ lng: 121.434962, lat: 31.200729 }} type=\"end\"\n        />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <CustomIcon />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n### \u77e2\u91cf\u56fe\u6807\n\n\u767e\u5ea6\u5730\u56fe[\u5b98\u65b9\u5b9e\u4f8b](http://lbsyun.baidu.com/jsdemo.htm#c1_20)\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Map, Marker, APILoader } from '@uiw/react-baidu-map';\n\nconst CustomIcon = () => {\n  const [visiable, setVisiable] = useState(true);\n  const icon = new BMap.Symbol('m0.5,48.67105l106.55963,0m-53.03642,45.73853l52.06349,51.09042m-52.06349,-51.57716l-48.65731,51.57716m48.41391,-112.39955l0,60.82238m16.17517,-77.24814c0,8.93415 -7.24208,16.17461 -16.17517,16.17461c-8.93307,0 -16.17464,-7.24046 -16.17464,-16.17461c0,-8.93309 7.24156,-16.1747 16.17464,-16.1747c8.93309,0 16.17517,7.24161 16.17517,16.1747z', {\n    rotation: 0, // \u987a\u65f6\u9488\u65cb\u8f6c40\u5ea6\n    fillColor: 'green',\n    fillOpacity: 0.8,\n    strokeColor: '#555',\n    strokeWeight: 3 // \u7ebf\u5bbd\n  });\n  const iconForwardClosedArrow = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {\n    scale: 5,\n    strokeWeight: 1,\n    rotation: 0, // \u987a\u65f6\u9488\u65cb\u8f6c30\u5ea6\n    fillColor: 'red',\n    fillOpacity: 0.8\n  });\n  const iconBackwardClosedArrow = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW, {\n    scale: 5,\n    strokeWeight: 1,\n    rotation: 180,\n    fillColor: 'gold',\n    fillOpacity: 0.8\n  });\n  const iconShapePoint = new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {\n    scale: 2, // \u56fe\u6807\u7f29\u653e\u5927\u5c0f\n    fillColor: \"orange\", // \u586b\u5145\u989c\u8272\n    fillOpacity: 0.8, // \u586b\u5145\u900f\u660e\u5ea6\n  });\n  return (\n    <>\n      <button onClick={() => setVisiable(!visiable)}>{visiable ? '\u9690\u85cf' : '\u663e\u793a'}</button>\n      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>\n        <Marker visiable={visiable} position={{ lng: 121.466008, lat: 31.220001 }} icon={icon} />\n        <Marker visiable={visiable} position={{ lng: 121.458534, lat: 31.224942}} icon={iconForwardClosedArrow} />\n        <Marker visiable={visiable} position={{ lng: 121.434962, lat: 31.200729 }} icon={iconBackwardClosedArrow} />\n        <Marker visiable={visiable} position={{ lng: 121.437962, lat: 31.200729 }} icon={iconShapePoint} />\n      </Map>\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <CustomIcon />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4f7f\u7528 hooks\n\n`marker`, `setMarker`, `type`, `setType`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMarker } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const { setContainer, map } = useMap({ widget: ['GeolocationControl', 'NavigationControl'], zoom: 8 });\n  const { setType, marker } = useMarker({ map, position: { lng: 121.444017, lat: 31.237787 } });\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  });\n  return (\n    <>\n      <button onClick={() => setType('red2')}>\u8bbe\u7f6e red2</button>\n      <button onClick={() => setType('loc_blue')}>\u8bbe\u7f6e loc_blue</button>\n      <button onClick={() => marker.setPosition(new BMap.Point(121.497197, 31.232847))}>\u8bbe\u7f6e\u5750\u6807\u70b9</button>\n      <button onClick={() => marker.setAnimation(2)}>\u8bbe\u7f6e\u52a8\u753b</button>\n      <button onClick={() => marker.setAnimation(null)}>\u53d6\u6d88\u52a8\u753b</button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| position | **`\u5fc5\u586b`** \u8bbe\u7f6e\u6807\u6ce8\u7684\u5730\u7406\u5750\u6807\u3002[\u767e\u5ea6\u62fe\u53d6\u5750\u6807\u7cfb\u7edf](http://api.map.baidu.com/lbsapi/getpoint/index.html) | `Point` | - |\n| animation | \u6b64\u5e38\u91cf\u8868\u793a\u6807\u6ce8\u7684\u52a8\u753b\u6548\u679c, `1` \u5760\u843d\u52a8\u753b\uff0c`2` \u8df3\u52a8\u52a8\u753b\u3002 | `number` | - |\n| type | \u6807\u70b9\u7c7b\u578b\uff0c\u9ed8\u8ba4\u81ea\u5b9a\u4e49\u6807\u70b9 `location`, `end`, `start`, `simple_red`, `simple_blue`, `loc_blue`, `loc_red`, `dot_red`, `dot_blue', 'red1`, `red2`, `red3`, `red4`, `red5`, `red6`, `red7`, `red8`, `red9', 'blue1`, `blue2`, `blue3`, `blue4`, `blue5`, `blue6`, `blue7`, `blue8`, `blue9`\u3002| `string` | - |\n| offset | \u6807\u6ce8\u7684\u4f4d\u7f6e\u504f\u79fb\u503c | `Size` | - |\n| enableMassClear | \u662f\u5426\u5728\u8c03\u7528 `map.clearOverlays` \u6e05\u9664\u6b64\u8986\u76d6\u7269 | `boolean` | `true` |\n| icon | \u6807\u6ce8\u6240\u7528\u7684\u56fe\u6807\u5bf9\u8c61 | `Icon` | - |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| enableDragging | \u662f\u5426\u542f\u7528\u62d6\u62fd | `boolean` | `false` |\n| enableClicking | \u662f\u5426\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6 | `boolean` | `true` |\n| enableMassClear | \u5141\u8bb8\u8986\u76d6\u7269\u5728map.clearOverlays\u65b9\u6cd5\u4e2d\u88ab\u6e05\u9664 | `boolean` | `true` |\n| raiseOnDrag | \u62d6\u62fd\u6807\u6ce8\u65f6\uff0c\u6807\u6ce8\u662f\u5426\u5f00\u542f\u79bb\u5f00\u5730\u56fe\u8868\u9762\u6548\u679c\u3002 | `boolean` | `false` |\n| draggingCursor | \u62d6\u62fd\u6807\u6ce8\u65f6\u7684\u9f20\u6807\u6307\u9488\u6837\u5f0f\u3002\u6b64\u5c5e\u6027\u503c\u9700\u9075\u5faaCSS\u7684cursor\u5c5e\u6027\u89c4\u8303 | `string` | - |\n| rotation | \u662f\u5426\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6 | `number` | - |\n| shadow | \u9634\u5f71\u56fe\u6807 | `Icon` | - |\n| title | \u9f20\u6807\u79fb\u5230 marker \u4e0a\u7684\u663e\u793a\u5185\u5bb9 | `string` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| onClick | \u70b9\u51fb\u6807\u6ce8\u56fe\u6807\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }): void; | - |\n| onDblClick | \u53cc\u51fb\u6807\u6ce8\u56fe\u6807\u540e\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onMouseDown | \u9f20\u6807\u5728\u6807\u6ce8\u56fe\u4e0a\u6309\u4e0b\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onMouseUp | \u9f20\u6807\u5728\u6807\u6ce8\u56fe\u4e0a\u91ca\u653e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onMouseOut | \u9f20\u6807\u79bb\u5f00\u6807\u6ce8\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onMouseOver | \u5f53\u9f20\u6807\u8fdb\u5165\u6807\u6ce8\u56fe\u6807\u533a\u57df\u65f6\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onRemove | \u79fb\u9664\u6807\u6ce8\u65f6\u89e6\u53d1 | (event: { type: string, target: any }): void; | - |\n| onInfowindowClose | \u4fe1\u606f\u7a97\u5728\u6b64\u6807\u6ce8\u4e0a\u5173\u95ed\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }): void; | - |\n| onInfowindowOpen | \u4fe1\u606f\u7a97\u5728\u6b64\u6807\u6ce8\u4e0a\u6253\u5f00\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }): void; | - |\n| onDragStart | \u5f00\u59cb\u62d6\u62fd\u6807\u6ce8\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }): void; | - |\n| onDragging | \u62d6\u62fd\u6807\u6ce8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onDragEnd | \u62d6\u62fd\u7ed3\u675f\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |\n| onRightClick | \u53f3\u952e\u70b9\u51fb\u6807\u6ce8\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: string, target: any }): void; | - |\n\n### ShapeType\n\n| \u5e38\u91cf | \u63cf\u8ff0 |\n| ---- | ---- |\n| BMAP_ANIMATION_DROP | \u5760\u843d\u52a8\u753b |\n| BMAP_ANIMATION_BOUNCE | \u8df3\u52a8\u52a8\u753b |\n"}}]);
//# sourceMappingURL=60.69c57adf.chunk.js.map