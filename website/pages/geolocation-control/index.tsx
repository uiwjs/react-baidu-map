import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import {
  APILoader,
  Map,
  useMap,
  GeolocationControl,
  useGeolocationControl,
} from '../../../';

export default class Page extends Markdown {
  dependencies = {
    APILoader,
    Map,
    useMap,
    GeolocationControl,
    useGeolocationControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
  getMdStr = () => import('../../../src/GeolocationControl/README.md');
}
