import { useRef, useEffect, useState, createRef } from 'react';
import { APILoader, Map, useMap, OverviewMapControl, useOverviewMapControl } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/overview-map-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-overview-map-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    OverviewMapControl,
    useOverviewMapControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
