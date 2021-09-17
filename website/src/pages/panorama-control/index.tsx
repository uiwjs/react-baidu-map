import { useRef, useEffect, useState, createRef } from 'react';
import { APILoader, Map, useMap, PanoramaControl, usePanoramaControl } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/panorama-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-panorama-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    PanoramaControl,
    usePanoramaControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
