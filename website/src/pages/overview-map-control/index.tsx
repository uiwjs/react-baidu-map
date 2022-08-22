import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/overview-map-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-overview-map-control/README.md');
}
