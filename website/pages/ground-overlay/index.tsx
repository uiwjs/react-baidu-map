import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, GroundOverlay, useGroundOverlay } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, GroundOverlay, useGroundOverlay, useRef, useEffect, useState, createRef };
  getMdStr = () => import('../../../src/GroundOverlay/README.md');
}
