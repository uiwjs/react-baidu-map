import { useRef, useState, useEffect } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, useMap, Marker, useMarker, CustomOverlay, useCustomOverlay } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/CustomOverlay/README.md';
  dependencies = {
    Map,
    APILoader,
    useMap,
    Marker,
    useMarker,
    CustomOverlay,
    useCustomOverlay,
    useRef,
    useState,
    useEffect,
  };
  getMdStr = () => import('../../../src/CustomOverlay/README.md');
}
