import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/info-window/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-info-window/README.md');
}
