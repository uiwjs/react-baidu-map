import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, CopyrightControl, useCopyrightControl } from '@uiw/react-baidu-map';

export default class Page extends Markdown {
  editorUrl = '/packages/copyright-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-copyright-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    CopyrightControl,
    useCopyrightControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
