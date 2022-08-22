import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/navigation-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-navigation-control/README.md');
}
