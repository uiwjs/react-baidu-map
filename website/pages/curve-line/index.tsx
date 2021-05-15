import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, CurveLine, useCurveLine } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/CurveLine/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    CurveLine,
    useCurveLine,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/CurveLine/README.md');
}
