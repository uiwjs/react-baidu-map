import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, PanoramaControl, usePanoramaControl } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/PanoramaControl/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    PanoramaControl,
    usePanoramaControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
  getMdStr = () => import('../../../src/PanoramaControl/README.md');
}
