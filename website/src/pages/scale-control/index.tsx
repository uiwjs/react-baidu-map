import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, ScaleControl, useScaleControl } from '@uiw/react-baidu-map';

export default class Page extends Markdown {
  editorUrl = '/packages/scale-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-scale-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    ScaleControl,
    useScaleControl,
    useRef,
    useEffect,
    useState,
  };
}
