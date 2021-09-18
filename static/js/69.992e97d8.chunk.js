(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[69],{771:function(n,e,a){"use strict";a.r(e),e.default="withMap\n===\n\n\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u7528\u4e8e\u5c06\u5f53\u524d\u4e0a\u4e0b\u6587\u7684 `BMap.Map` \u5b9e\u4f8b\u6ce8\u5165\u5230\u76ee\u6807\u7ec4\u4ef6\u4e2d\uff0c\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u5bf9\u5730\u56fe\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u3002\n\n```jsx\nimport { withMap, APILoader } from '@uiw/react-baidu-map';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport withMap from '@uiw/react-baidu-map-with-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { withMap, APILoader } from '@uiw/react-baidu-map';\n\nclass ExampleMap extends React.Component {\n  componentDidMount() {\n    const { BMap, map, container } = this.props;\n    // \u542f\u7528\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\uff0c\u9ed8\u8ba4\u7981\u7528\n    // map.enableScrollWheelZoom();\n    // \u6dfb\u52a0\u5730\u56fe\u7c7b\u578b\u63a7\u4ef6\n    map.addControl(new BMap.MapTypeControl({\n      mapTypes:[\n        BMAP_NORMAL_MAP,\n        BMAP_HYBRID_MAP\n      ]\n    }));\n    const point = new BMap.Point(121.458965, 31.238775);\n    const marker = new BMap.Marker(point);      // \u521b\u5efa\u6807\u6ce8\n    map.addOverlay(marker);                     // \u5c06\u6807\u6ce8\u6dfb\u52a0\u5230\u5730\u56fe\u4e2d\n    marker.setAnimation(BMAP_ANIMATION_BOUNCE); // \u8df3\u52a8\u7684\u52a8\u753b\n\n    // \u6dfb\u52a0\u81ea\u5b9a\u4e49\u83dc\u5355\n    const menu = new BMap.ContextMenu()\n    const menuItem = [\n      { text: '\u653e\u5927', callback: () => map.zoomIn() },\n      { text: '\u7f29\u5c0f', callback: () => map.zoomOut() },\n    ]\n    for (let i = 0; i < menuItem.length; i++) {\n      menu.addItem(new BMap.MenuItem(menuItem[i].text, menuItem[i].callback, 100));\n    }\n    map.addContextMenu(menu);\n  }\n  render() {\n    return null;\n  }\n}\n\nconst CustomWithMap = withMap(ExampleMap);\n\nconst Demo = () => {\n  return (\n    <div style={{ width: '100%', height: '300px' }}>\n      <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n        <CustomWithMap\n          enableScrollWheelZoom\n          zoom={8}\n          ref={(instance) => {\n            console.log('instance>', instance);\n          }}\n        />\n      </APILoader>\n    </div>\n  )\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n\u9ad8\u9636\u7ec4\u4ef6 `withMap` \u53ef\u4ee5\u4f5c\u4e3a `Map` \u7ec4\u4ef6\u6765\u4f7f\u7528\uff0c\u7ee7\u627f `Map` \u53ef\u4ee5\u9ed8\u8ba4\u4f20\u9012 `Map` \u7684\u5c5e\u6027\uff0c\u76f8\u5173\u5c5e\u6027\u53c2\u8003 [`<Map>`](#/map)\u3002"}}]);
//# sourceMappingURL=69.992e97d8.chunk.js.map