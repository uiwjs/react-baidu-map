import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/label/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-label/README.md');
}
