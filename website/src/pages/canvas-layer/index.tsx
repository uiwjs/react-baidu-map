import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/canvas-layer/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-canvas-layer/README.md');
}
