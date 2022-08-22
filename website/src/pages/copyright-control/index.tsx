import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/copyright-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-copyright-control/README.md');
}
