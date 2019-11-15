import Markdown from '../../components/Markdown';
import { Map, APILoader } from '../../../';

export default class Page extends Markdown {
  dependencies = { Map, APILoader };
  getMdStr = () => import('../../../src/api-loader/README.md');
}
