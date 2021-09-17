import { useRef, useEffect, useState, createRef } from 'react';
import { APILoader, Map, useMap, GroundOverlay, useGroundOverlay } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/ground-overlay/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-ground-overlay/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    GroundOverlay,
    useGroundOverlay,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
