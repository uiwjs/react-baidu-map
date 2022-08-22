import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  getMdStr = () => import('@uiw/react-baidu-map-with-map/README.md');
  editorUrl = '/packages/with-map/README.md';
}
