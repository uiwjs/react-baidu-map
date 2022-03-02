import { useRef, useEffect, useState } from 'react';
import { APILoader } from '@uiw/react-baidu-map';
import Map, { useMap, useMapContext, Context } from '@uiw/react-baidu-map-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/map/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-map/README.md');
  dependencies = { useRef, useEffect, useState, Map, APILoader, useMap, useMapContext, Context };
}
