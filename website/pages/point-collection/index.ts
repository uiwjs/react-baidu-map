import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import {
  requireScript,
  APILoader,
  Map,
  PointCollection,
  useMap,
  usePointCollection,
} from '../../../';

export default class Page extends Markdown {
  dependencies = {
    requireScript,
    APILoader,
    Map,
    PointCollection,
    useMap,
    usePointCollection,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/PointCollection/README.md');
}
