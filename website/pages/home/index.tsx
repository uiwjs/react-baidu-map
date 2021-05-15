import Markdown from '../../components/Markdown';
import { Map, APILoader } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/README.md';
  dependencies = { Map, APILoader };
  getMdStr = () => import('../../../README.md');
}
