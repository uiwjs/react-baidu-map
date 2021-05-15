import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, TileLayer, useTileLayer } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/TileLayer/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    TileLayer,
    useTileLayer,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/TileLayer/README.md');
}
