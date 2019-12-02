import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, useMap, withMap } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { useRef, useEffect, useState, Map, APILoader, useMap, withMap };
  getMdStr = () => import('../../../src/withMap/README.md');
}
