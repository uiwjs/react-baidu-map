import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, Circle, useCircle } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/circle/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-circle/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    Circle,
    useCircle,
    useRef,
    useEffect,
    useState,
  };
}
