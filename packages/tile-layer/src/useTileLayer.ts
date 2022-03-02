import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { TileLayerProps } from './';

export interface UseTileLayer extends TileLayerProps {}
/**
 * https://lbsyun.baidu.com/jsdemo.htm#g0_2
 */
export function useTileLayer(props = {} as UseTileLayer) {
  const [tileLayer, setTileLayer] = useState<BMap.TileLayer>();
  const { transparentPng = true, tileUrlTemplate, copyright, zIndex } = props;
  const { map } = useMapContext();

  useEffect(() => {
    if (map && !tileLayer) {
      const instance = new BMap.TileLayer({
        transparentPng,
        tileUrlTemplate,
        copyright,
        zIndex,
      });
      if (!!props.getTilesUrl) {
        instance.getTilesUrl = props.getTilesUrl;
      }
      if (!!props.getCopyright) {
        instance.getCopyright = props.getCopyright;
      }
      map.addTileLayer(instance);
      setTileLayer(instance);
      return () => {
        if (instance) {
          map.removeTileLayer(instance);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  const [visiable, setVisiable] = useState(props.visiable);
  useEffect(() => {
    if (map && tileLayer) {
      visiable ? map.addTileLayer(tileLayer) : map.removeTileLayer(tileLayer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visiable, map]);

  return {
    tileLayer,
    setTileLayer,
    visiable,
    setVisiable,
  };
}
