import React from 'react';
import TestRenderer from 'react-test-renderer';
import withMap from '../src';

describe('<MapTypeControl />', () => {
  it('MapTypeControl test case', () => {
    class ExampleMap extends React.Component {
      componentDidMount() {
        const { BMap, map, container } = this.props as any;
        // 启用滚轮放大缩小，默认禁用
        // map.enableScrollWheelZoom();
        // 添加地图类型控件
        map.addControl(
          new BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
          }),
        );
        const point = new BMap.Point(121.458965, 31.238775);
        const marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); // 跳动的动画

        // 添加自定义菜单
        const menu = new BMap.ContextMenu();
        const menuItem = [
          { text: '放大', callback: () => map.zoomIn() },
          { text: '缩小', callback: () => map.zoomOut() },
        ];
        for (let i = 0; i < menuItem.length; i++) {
          menu.addItem(new BMap.MenuItem(menuItem[i].text, menuItem[i].callback, 100));
        }
        map.addContextMenu(menu);
      }
      render() {
        return null;
      }
    }
    const CustomWithMap = withMap(ExampleMap);
    expect(typeof withMap).toEqual('function');
    expect(typeof CustomWithMap).toEqual('object');
    const component = TestRenderer.create(<CustomWithMap />);
    let tree = component.toJSON();
    expect(tree).toMatchObject({
      type: 'div',
      props: { className: undefined, style: { fontSize: 1, height: '100%' } },
      children: null,
    });
  });
});
