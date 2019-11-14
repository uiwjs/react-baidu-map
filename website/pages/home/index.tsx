import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  dependencies = {  };
  getMdStr = () => import('../../../README.md');
}
