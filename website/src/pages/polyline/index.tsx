import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Polyline, usePolyline } from '@uiw/react-baidu-map';

export default class Page extends Markdown {
  editorUrl = '/packages/polyline/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-polyline/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    Polyline,
    usePolyline,
    useRef,
    useEffect,
    useState,
  };
}
