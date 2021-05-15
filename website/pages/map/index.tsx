import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, useMap } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Map/README.md';
  dependencies = { useRef, useEffect, useState, Map, APILoader, useMap };
  getMdStr = () => import('../../../src/Map/README.md');
}
