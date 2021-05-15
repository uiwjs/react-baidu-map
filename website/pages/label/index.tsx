import { useRef, useState, useEffect } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, Label, useLabel, useMap } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/Label/README.md';
  dependencies = {
    Map,
    APILoader,
    Label,
    useLabel,
    useMap,
    useRef,
    useState,
    useEffect,
  };
  getMdStr = () => import('../../../src/Label/README.md');
}
