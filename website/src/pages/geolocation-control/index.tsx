import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/geolocation-control/README.md';
  getMdStr = () => import('@uiw/react-baidu-map-geolocation-control/README.md');
}
