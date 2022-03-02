"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2150],{32150:function(e,n,t){t.r(n),n.default="TileLayer \u5730\u56fe\u56fe\u5c42\n===\n\n\u6b64\u7c7b\u8868\u793a\u4e00\u4e2a\u5730\u56fe\u56fe\u5c42\uff0c\u60a8\u53ef\u4ee5\u5411\u5730\u56fe\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u5c42\uff0c\u5b98\u65b9\u539f\u751f\u5b9e\u4f8b\uff1ahttps://lbsyun.baidu.com/jsdemo.htm#g0_2\u3002\n\n```jsx\nimport { TileLayer, useTileLayer } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport TileLayer, { useTileLayer } from '@uiw/react-baidu-map-tile-layer';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { useState, useRef } from 'react';\nimport { Map, APILoader, TileLayer } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map widget={['NavigationControl']} zoom={16} center={{ lng: 116.332782, lat: 40.007978 }} style={{ height: 350 }}>\n          <TileLayer\n            visiable={show}\n            getTilesUrl={(tileCoord, zoom) => {\n              const { x, y } = tileCoord;\n              // \u6839\u636e\u5f53\u524d\u5750\u6807\uff0c\u9009\u53d6\u5408\u9002\u7684\u74e6\u7247\u56fe\n              return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;\n            }}\n          />\n      </Map>\n    </>\n  );\n}\n\nReactDOM.render((\n  <div style={{ width: '100%' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\n### \u4f7f\u7528 hooks\n\n`tileLayer`, `setTileLayer`, `visiable`, `setVisiable`\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useTileLayer } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap({\n    zoom: 16, center: { lng: 116.332782, lat: 40.007978 },\n    widget: ['NavigationControl']\n  });\n\n  const { setVisiable } = useTileLayer({\n    visiable: show,\n    map, getTilesUrl: (tileCoord, zoom) => {\n      const { x, y } = tileCoord;\n      // \u6839\u636e\u5f53\u524d\u5750\u6807\uff0c\u9009\u53d6\u5408\u9002\u7684\u74e6\u7247\u56fe\n      return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;\n    }\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => {\n        setShow(!show)\n        setVisiable(!show)\n      }}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u5730\u56fe\u56fe\u5c42\u662f\u5426\u53ef\u89c1 | `Boolean` | - |\n| transparentPng | \u662f\u5426\u4f7f\u7528\u4e86\u5e26\u6709\u900f\u660e\u4fe1\u606f\u7684PNG\u3002\u7531\u4e8eIE6\u4e0d\u652f\u6301PNG\u900f\u660e\uff0c\u56e0\u6b64\u9700\u8981\u7279\u6b8a\u5904\u7406\u3002 | `Boolean` | - |\n| tileUrlTemplate | \u6307\u5b9a\u56fe\u5757\u7f51\u5740\u6a21\u677f\uff0c\u8be5\u6a21\u677f\u53ef\u4ee5\u9488\u5bf9\u6bcf\u4e2a\u56fe\u5757\u8bf7\u6c42\u800c\u5c55\u5f00\uff0c\u4ee5\u6839\u636e\u73b0\u6709\u7684\u56fe\u5757\u5750\u6807\u7cfb\u5f15\u7528\u552f\u4e00\u7684\u56fe\u5757\u3002\u6a21\u677f\u7684\u683c\u5f0f\u5e94\u8be5\u4e3a\uff1a`http://yourhost/tile?x={X}&y={Y}&z={Z}.png` \u5176\u4e2dX\u548cY\u5206\u522b\u6307\u7eac\u5ea6\u548c\u7ecf\u5ea6\u56fe\u5757\u5750\u6807\uff0cZ\u6307\u7f29\u653e\u7ea7\u522b\uff0c\u6bd4\u5982\uff1a `http://yourhost/tile?x=3&y=27&z=5.png` \u5982\u679c\u60a8\u6ca1\u6709\u63d0\u4f9b\u56fe\u5757\u7f51\u5740\u6a21\u677f\uff0c\u60a8\u9700\u8981\u5b9e\u73b0`TileLayer.getTileUrl()` \u62bd\u8c61\u65b9\u6cd5\u3002 | `string` | - |\n| getTilesUrl | \u62bd\u8c61\u3002\u5411\u5730\u56fe\u8fd4\u56de\u5730\u56fe\u56fe\u5757\u7684\u7f51\u5740\uff0c\u56fe\u5757\u7d22\u5f15\u7531 `tileCoord` \u7684 `x` \u548c `y` \u5c5e\u6027\u5728\u6307\u5b9a\u7684\u7f29\u653e\u7ea7\u522b `zoom` \u63d0\u4f9b\u3002\u5982\u679c\u60a8\u5728 `TileLayerOptions` \u4e2d\u63d0\u4f9b\u4e86tileUrlTemplate\u53c2\u6570\uff0c\u5219\u53ef\u4e0d\u5b9e\u73b0\u6b64\u63a5\u53e3\u3002| `(tileCoord: Pixel, zoom: number): string;` | - |\n| getCopyright | \u8fd4\u56de\u5730\u56fe\u56fe\u5c42\u6570\u636e\u7684\u7248\u6743\u5bf9\u8c61 | `(): Copyright` | - |\n| copyright | \u5730\u56fe\u56fe\u5c42\u7684\u7248\u6743\u4fe1\u606f | `Copyright` | - |\n| zIndex | \u56fe\u5c42\u7684 `zIndex` | `number` | - |\n"}}]);
//# sourceMappingURL=2150.77f96825.chunk.js.map