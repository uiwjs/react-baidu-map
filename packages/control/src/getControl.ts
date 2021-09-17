export default function getCustomOverlay() {
  return class extends BMap.Control {
    public container: HTMLDivElement;
    public map!: BMap.Map;
    constructor(elm: HTMLDivElement, defaultAnchor?: BMap.ControlAnchor, defaultOffset?: BMap.Size) {
      super();
      this.container = elm;
      this.defaultAnchor = defaultAnchor || BMAP_ANCHOR_TOP_LEFT;
      this.defaultOffset = defaultOffset || new BMap.Size(10, 10);
    }
    public initialize: (map: BMap.Map) => HTMLElement = (map) => {
      this.map = map;
      // 添加DOM元素到地图中
      map.getContainer().appendChild(this.container);
      return this.container;
    };
    public draw = () => {};
  };
}
