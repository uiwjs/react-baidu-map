import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/api-loader/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-api-loader/README.md');
}
