import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/ground-overlay/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-ground-overlay/README.md');
}
