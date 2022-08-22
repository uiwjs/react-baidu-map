import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/drawing-manager/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-drawing-manager/README.md');
}
