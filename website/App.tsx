import React from 'react';
import { Map } from '../';
import './App.less';

export default class App extends React.PureComponent {
  render () {
    return (
      <div className="warpper">
        <Map
          akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f"
          widget={[
            'GeolocationControl',
            {
              name: 'OverviewMapControl',
              options: {
                isOpen: true,
              }
            },
            {
              name: 'NavigationControl',
              options: (BMap: any) => {
                return {
                  offset: new BMap.Size(150, 5),
                  showZoomInfo: false,
                  enableGeolocation: true,
                }
              }
            }
          ]}
        />
      </div>
    )
  }
}