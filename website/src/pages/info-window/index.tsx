import { useRef, useState, useEffect } from 'react';
import { Map, APILoader, InfoWindow, useInfoWindow, useMap } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/info-window/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-info-window/README.md');
  dependencies = {
    Map,
    APILoader,
    InfoWindow,
    useInfoWindow,
    useMap,
    useRef,
    useState,
    useEffect,
  };
}
