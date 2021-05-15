import { useRef, useEffect, useState, createRef } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Control, useControl } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Control/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    Control,
    useControl,
    useRef,
    useEffect,
    useState,
    createRef,
  };
  getMdStr = () => import('../../../src/Control/README.md');
}
