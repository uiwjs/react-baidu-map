import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-tile-layer/README.md');
  editorUrl = '/packages/tile-layer/README.md';
}
