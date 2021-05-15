import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, Marker, useMap, useMarker } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Marker/README.md';
  dependencies = {
    APILoader,
    Map,
    Marker,
    useMap,
    useMarker,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/Marker/README.md');
}
