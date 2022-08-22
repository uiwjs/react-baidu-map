import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/baidu-map/README.md';
  getMdStr = () => import('@uiw/react-baidu-map/README.md');
}
