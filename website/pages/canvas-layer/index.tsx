import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, CanvasLayer, useCanvasLayer } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/CanvasLayer/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    CanvasLayer,
    useCanvasLayer,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/CanvasLayer/README.md');
}
