import { Map, APILoader } from '@uiw/react-baidu-map';
import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/api-loader/README.md';
  dependencies = { Map, APILoader };
  getMdStr = () => import('@uiw/react-baidu-map-api-loader/README.md');
}
