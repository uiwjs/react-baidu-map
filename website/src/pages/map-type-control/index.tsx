import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, MapTypeControl, useMapTypeControl } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/type-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-type-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    MapTypeControl,
    useMapTypeControl,
    useRef,
    useEffect,
    useState,
  };
}
