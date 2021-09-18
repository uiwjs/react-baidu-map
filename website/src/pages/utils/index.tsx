import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/utils/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-utils/README.md');
  dependencies = {};
}
