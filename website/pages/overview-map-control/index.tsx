import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import {
  APILoader,
  Map,
  useMap,
  OverviewMapControl,
  useOverviewMapControl,
} from '../../../';

export default class Page extends Markdown {
  dependencies = {
    APILoader,
    Map,
    useMap,
    OverviewMapControl,
    useOverviewMapControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
  getMdStr = () => import('../../../src/OverviewMapControl/README.md');
}
