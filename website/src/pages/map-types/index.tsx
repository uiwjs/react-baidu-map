import { useRef, useEffect, useState } from 'react';
import { APILoader, Map, useMap } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/types/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-types/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    useRef,
    useEffect,
    useState,
  };
}
