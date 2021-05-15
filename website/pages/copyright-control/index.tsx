import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, CopyrightControl, useCopyrightControl } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/CopyrightControl/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    CopyrightControl,
    useCopyrightControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
  getMdStr = () => import('../../../src/CopyrightControl/README.md');
}
