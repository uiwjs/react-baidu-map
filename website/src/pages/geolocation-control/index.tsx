import { useRef, useEffect, useState, createRef } from 'react';
import { APILoader, Map, useMap, GeolocationControl, useGeolocationControl } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/geolocation-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-geolocation-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    GeolocationControl,
    useGeolocationControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
