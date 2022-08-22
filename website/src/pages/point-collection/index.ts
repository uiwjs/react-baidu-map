import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-point-collection/README.md');
  editorUrl = '/packages/point-collection/README.md';
}
