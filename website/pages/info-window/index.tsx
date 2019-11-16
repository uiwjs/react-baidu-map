import { useState } from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader, InfoWindow, useInfoWindow } from '../../../';

export default class Page extends Markdown {
  dependencies = { Map, APILoader, InfoWindow, useInfoWindow, useState };
  getMdStr = () => import('../../../src/info-window/README.md');
}
