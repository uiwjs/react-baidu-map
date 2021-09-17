import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, TileLayer, useTileLayer } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-tile-layer/README.md');
  editorUrl = '/packages/tile-layer/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    TileLayer,
    useTileLayer,
    useRef,
    useEffect,
    useState,
  };
}
