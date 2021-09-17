import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, NavigationControl, useNavigationControl } from '@uiw/react-baidu-map';

export default class Page extends Markdown {
  editorUrl = '/packages/navigation-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-navigation-control/README.md');
  dependencies = {
    APILoader,
    Map,
    useMap,
    NavigationControl,
    useNavigationControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
}
