import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap, RequireScript } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/require-script/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-require-script/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    RequireScript,
    useRef,
    useEffect,
    useState,
  };
}
