import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/types/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-types/README.md');
}
