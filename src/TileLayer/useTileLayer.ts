import { useEffect, useState } from 'react';
import { TileLayerProps } from './';

export interface UseTileLayer extends TileLayerProps {}
/**
 * https://lbsyun.baidu.com/jsdemo.htm#g0_2
 */
export default function(props = {} as UseTileLayer) {
  const [tileLayer, setTileLayer] = useState<BMap.TileLayer>();
  const { map, transparentPng = true, tileUrlTemplate, copyright, zIndex } = props;

  useEffect(() => {
    if (map && !tileLayer) {
      const instance = new BMap.TileLayer({
        transparentPng, tileUrlTemplate, copyright, zIndex
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
      }
    }
  }, [map]);


  const [visiable, setVisiable] = useState(props.visiable);
  useEffect(() => {
    if (map && tileLayer) {
      visiable ? map.addTileLayer(tileLayer) : map.removeTileLayer(tileLayer);
    }
  }, [visiable, map]);
  

  return {
    tileLayer, setTileLayer,
    visiable, setVisiable,
  };
}