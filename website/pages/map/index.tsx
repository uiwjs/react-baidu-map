import React from 'react';
import Markdown from '../../components/Markdown';
import { Map, APILoader } from '../../../'; 

export default class Page extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '300px' }}>
        <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
          <Map />
        </APILoader>
        <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
          <Map />
        </APILoader>
      </div>
    )
  }
}


// export default class Page extends Markdown {
//   dependencies = { Map };
//   getMdStr = () => import('../../../src/map/README.md');
// }
