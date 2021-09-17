import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, withMap } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-with-map/README.md');
  editorUrl = '/packages/with-map/README.md';
  dependencies = {
    useRef,
    useEffect,
    useState,
    Map,
    APILoader,
    useMap,
    withMap,
  };
}
