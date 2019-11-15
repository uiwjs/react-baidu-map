import Markdown from '../../components/Markdown';
import { APILoader, Map, Marker } from '../../../'; 

export default class Page extends Markdown {
  dependencies = { APILoader, Map, Marker };
  getMdStr = () => import('../../../src/marker/README.md');
}
