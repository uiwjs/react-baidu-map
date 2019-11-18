import { useRef, useState, useEffect } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, InfoWindow, useInfoWindow, useMap } from '../../../';

export default class Page extends Markdown {
  dependencies = { Map, APILoader, InfoWindow, useInfoWindow, useMap, useRef, useState, useEffect };
  getMdStr = () => import('../../../src/InfoWindow/README.md');
}
