import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, CanvasLayer, useCanvasLayer } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/canvas-layer/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    CanvasLayer,
    useCanvasLayer,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('@uiw/react-baidu-map-canvas-layer/README.md');
}
