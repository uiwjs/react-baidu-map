import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, CurveLine, useCurveLine } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/curve-line/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-curve-line/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    CurveLine,
    useCurveLine,
    useRef,
    useEffect,
    useState,
  };
}
