import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, Marker, useMap, useMarker, Provider } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/marker/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-marker/README.md');
  dependencies = {
    APILoader,
    Map,
    Marker,
    useMap,
    useMarker,
    useRef,
    useEffect,
    useState,
    Provider,
  };
}
