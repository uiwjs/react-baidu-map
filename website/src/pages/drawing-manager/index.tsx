import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, DrawingManager, useDrawingManager } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/drawing-manager/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-drawing-manager/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    DrawingManager,
    useDrawingManager,
    useRef,
    useEffect,
    useState,
  };
}
