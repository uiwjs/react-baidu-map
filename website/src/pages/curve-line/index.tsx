import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/curve-line/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-curve-line/README.md');
}
