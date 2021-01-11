import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import {
  APILoader,
  Map,
  useMap,
  NavigationControl,
  useNavigationControl,
} from '../../../';

export default class Page extends Markdown {
  dependencies = {
    APILoader,
    Map,
    useMap,
    NavigationControl,
    useNavigationControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
  getMdStr = () => import('../../../src/NavigationControl/README.md');
}
