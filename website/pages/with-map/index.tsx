import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, useMap, withMap } from '../../../';

export default class Page extends Markdown {
  getMdStr = () => import('../../../src/withMap/README.md');
  editorUrl = '/src/withMap/README.md';
  dependencies = {
    useRef,
    useEffect,
    useState,
    Map,
    APILoader,
    useMap,
    withMap,
  };
}
