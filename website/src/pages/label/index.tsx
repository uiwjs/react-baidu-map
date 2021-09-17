import { useRef, useState, useEffect } from 'react';
import { Map, APILoader, Label, useLabel, useMap } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/label/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-label/README.md');
  dependencies = {
    Map,
    APILoader,
    Label,
    useLabel,
    useMap,
    useRef,
    useState,
    useEffect,
  };
}
