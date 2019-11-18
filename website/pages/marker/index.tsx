import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, Marker, useMap, useMarkers } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, Marker, useMap, useMarkers, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Marker/README.md');
}
