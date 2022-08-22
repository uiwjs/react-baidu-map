import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/type-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-type-control/README.md');
}
