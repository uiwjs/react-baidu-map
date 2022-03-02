import { useRef, useEffect, useState, createRef } from 'react';
import * as map from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-control/README.md');
  editorUrl = '/packages/control/README.md';
  dependencies = {
    useRef,
    useEffect,
    useState,
    createRef,
    ...map,
  };
}
