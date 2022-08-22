import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/custom-overla/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-custom-overlay/README.md');
}
