import { useRef, useEffect, useState, createRef } from 'react';
import { APILoader, Map, useMap, Control, useControl } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-control/README.md');
  editorUrl = '/packages/control/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    Control,
    useControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
