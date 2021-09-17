import { useRef, useState, useEffect } from 'react';
import { Map, APILoader, useMap, Marker, useMarker, CustomOverlay, useCustomOverlay } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/custom-overla/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-custom-overlay/README.md');
  dependencies = {
    Map,
    APILoader,
    useMap,
    Marker,
    useMarker,
    CustomOverlay,
    useCustomOverlay,
    useRef,
    useState,
    useEffect,
  };
}
