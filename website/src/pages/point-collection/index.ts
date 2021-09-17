import { useRef, useEffect, useState } from 'react';
import { requireScript } from '@uiw/react-baidu-map-utils';
import { APILoader, Map, PointCollection, useMap, usePointCollection } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-point-collection/README.md');
  editorUrl = '/packages/point-collection/README.md';
  dependencies = {
    requireScript,
    APILoader,
    Map,
    PointCollection,
    useMap,
    usePointCollection,
    useRef,
    useEffect,
    useState,
  };
}
