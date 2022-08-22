import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/panorama-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-panorama-control/README.md');
}
