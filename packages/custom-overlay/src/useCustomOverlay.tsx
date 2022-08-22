import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, usePrevious } from '@uiw/react-baidu-map-utils';
import { CustomOverlayProps } from './';

function getCustomOverlay() {
  return class extends BMap.Overlay {
    public container: HTMLDivElement;
    public map!: BMap.Map;
    public paneName: keyof BMap.MapPanes;
    public position?: BMap.Point;
    public offset?: BMap.Size;
    constructor(elm: HTMLDivElement, position?: BMap.Point, paneName?: CustomOverlayProps['paneName']) {
      super();
      this.container = elm;
      this.paneName = paneName || 'markerPane';
      this.position = position;
    }
    public initialize: (map: BMap.Map) => HTMLElement = (map) => {
      const panes = map.getPanes();
      this.container.style.position = 'absolute';
      this.map = map;
      panes[this.paneName]!.appendChild(this.container);
      return this.container;
    };
    public draw = () => {
      if (this.position == null || this.map == null) {
        return;
      }
      const position = this.map.pointToOverlayPixel(this.position);
      const { width = 0, height = 0 } = this.offset || {};

      this.container.style.left = `${position.x + width}px`;
      this.container.style.top = `${position.y + height}px`;
    };
    public setOffset = (offset: BMap.Size) => {
      this.offset = offset;
      this.draw();
    };
    public setPosition = (position: BMap.Point) => {
      this.position = position;
      this.draw();
    };
    public setVisiable = (visiable: boolean) => {
      this.container.style.display = visiable ? 'block' : 'none';
    };

    public getPosition = () => {
      return this.position;
    };

    public setZIndex = (index: number) => {
      this.container.style.zIndex = index.toString();
    };
  };
}

export interface UseCustomOverlay extends CustomOverlayProps {}

export function useCustomOverlay(props = {} as UseCustomOverlay) {
  const { children, paneName, position } = props;
  const { map } = useMapContext();
  const [customOverlay, setCustomOverlay] = useState<BMap.Overlay>();
  const [div, setDiv] = useState<HTMLDivElement>();
  const [portal, setPortal] = useState<React.ReactPortal>();
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      if (map && customOverlay) {
        map.removeOverlay(customOverlay);
      }
    };
  }, [customOverlay, map]);
  useMemo(() => {
    if (map && !portal && document) {
      const elm = document.createElement('div');
      const CustomOverlay = getCustomOverlay();
      const portalInstance = createPortal(children, elm);
      const CompOverlay = new CustomOverlay(elm, position, paneName);
      setCount(count + 1);
      setDiv(elm);
      map.addOverlay(CompOverlay);
      setPortal(portalInstance);
      setCustomOverlay(CompOverlay);
    }
  }, [children, count, map, paneName, portal, position]);

  const prevCount = usePrevious(count);
  useMemo(() => {
    if (map && div && children && count === prevCount) {
      const portalInstance = createPortal(children, div);
      setPortal(portalInstance);
      setCount(count + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, customOverlay]);

  useProperties<BMap.Overlay, UseCustomOverlay>(customOverlay!, props, ['ZIndex', 'Offset', 'Position', 'Visiable']);
  return {
    portal,
    setPortal,
    customOverlay,
    setCustomOverlay,
  };
}
