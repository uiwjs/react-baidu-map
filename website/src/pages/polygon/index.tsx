import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, Polygon, useMap, usePolygon } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/polygon/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-polygon/README.md');
  dependencies = {
    APILoader,
    Map,
    Polygon,
    useMap,
    usePolygon,
    useRef,
    useEffect,
    useState,
  };
}
