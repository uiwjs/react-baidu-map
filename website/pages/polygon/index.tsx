import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, Polygon, useMap, usePolygon } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Polygon/README.md';
  dependencies = {
    APILoader,
    Map,
    Polygon,
    useMap,
    usePolygon,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/Polygon/README.md');
}
