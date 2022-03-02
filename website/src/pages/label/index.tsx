import { useRef, useState, useEffect } from 'react';
import * as map from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/label/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-label/README.md');
  dependencies = {
    useRef,
    useState,
    useEffect,
    ...map,
  };
}
