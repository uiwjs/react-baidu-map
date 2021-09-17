import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/map/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-map/README.md');
  dependencies = { useRef, useEffect, useState, Map, APILoader, useMap };
}
