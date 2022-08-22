import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/map/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-map/README.md');
}
