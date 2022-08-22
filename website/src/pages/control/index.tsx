import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-control/README.md');
  editorUrl = '/packages/control/README.md';
}
