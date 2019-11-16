import { useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, InfoWindow } from '../../../';

export default class Page extends Markdown {
  dependencies = { Map, APILoader, InfoWindow, useState };
  getMdStr = () => import('../../../src/info-window/README.md');
}
