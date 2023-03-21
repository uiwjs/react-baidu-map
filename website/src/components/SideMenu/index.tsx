import React from 'react';
import { NavLink } from 'react-router-dom';
import DomainVerify from '@uiw/react-domain-verify';
import styled from 'styled-components';
import { routesConfig, MenuRouteObject } from '../../data';

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  overflow: auto;
  position: fixed;
  background: #202225;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.25);
    transition: color 0.2s ease;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0;
  }
  a {
    color: #dcdcdc;
    display: block;
    padding: 8px 10px 8px 15px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    > svg {
      fill: #888;
    }
    &:hover {
      text-decoration: underline;
      color: #eaeaea;
      background-color: #3e3e3e;
    }
    &.active {
      text-decoration: underline;
      background: #333;
      color: #fff;
    }
  }
`;

const Logo = styled.div`
  padding: 18px 0 20px 0;
  margin-bottom: 6px;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  sup {
    color: #6f6f6f;
    margin-left: 5px;
    margin-top: -5px;
    position: absolute;
  }
`;

const Menu = styled.div`
  padding-bottom: 20px;
`;

const Divider = styled.div`
  color: #9e9e9e;
  padding: 5px 10px 5px 20px;
`;

const getMenus = (data: MenuRouteObject[] = [], result: any[] = []) => {
  data.forEach((item, idx) => {
    if (item.element && item.children) {
      result.push(<Divider>{item.menu}</Divider>);
    } else if (item.path && /^https?:\/\//.test(item.path)) {
      // 只有在 github web 的时候显示
      if (/^https?:\/\/uiw.gitee.io/.test(item.path)) {
        result.push(
          <DomainVerify key={idx} href="uiwjs.github.io">
            <a href={item.path} target="__blank">
              {item.menu}
              <svg viewBox="0 0 1024 1024" width={14}>
                <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
                <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
              </svg>
            </a>
          </DomainVerify>,
        );
      } else {
        result.push(
          <a key={idx} href={item.path} target="__blank">
            {item.menu}
            <svg viewBox="0 0 1024 1024" width={14}>
              <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
              <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
            </svg>
          </a>,
        );
      }
    } else {
      result.push(
        <NavLink key={idx} to={item.path || ''}>
          {item.menu}
        </NavLink>,
      );
    }
    if (item.children) {
      result = result.concat(getMenus(item.children));
    }
  });
  return result;
};

export default function SideMenu() {
  // @ts-ignore
  const version = VERSION;
  return (
    <Wrapper id="test">
      <Logo>
        <svg width="42" height="42" viewBox="0 0 200 200">
          <path
            fill="#fff"
            d="M76.2982,97.8642 C83.8948,85.233 106.6152,75.1252 122.604,99.964 C134.404,116.8096 154.6142,132.3964 154.6142,132.3964 C154.6142,132.3964 169.7504,144.1896 160.0774,166.9258 C150.4016,189.6648 115.0254,177.854 115.0254,177.854 C115.0254,177.854 101.9808,173.6724 86.8418,177.0188 C71.6968,180.398 58.646,179.1156 58.646,179.1156 L58.5170013,179.115945 C56.9070615,179.10197 40.68793,178.43222 35.8986,157.2324 C30.8574,134.9048 53.5688,122.6852 55.2622,120.6004 C56.9436,118.4858 68.7348,110.4954 76.2982,97.8642 Z M83.6554,110.6684 L83.6554,125.6678 L71.4089473,125.668111 C71.168535,125.689009 59.126666,126.80248 54.8762,140.512 C53.3864,149.7492 56.1958,155.1804 56.6894,156.3496 C57.192,157.5008 61.1474,164.2624 71.0804,166.234 L71.0804,166.234 L94.0762,166.234 L94.0762,110.8264 L83.6554,110.6684 Z M110.4478,126.822 L99.707,126.995 L99.707,156.1766 C99.707,156.1766 100.1946,163.4392 110.4478,166.076 L110.4478,166.076 L136.9142,166.076 L136.9142,126.995 L125.4972,126.995 L125.4972,156.3496 L114.5886,156.3496 C114.5886,156.3496 111.103,155.8426 110.4478,153.0508 L110.4478,153.0508 L110.4478,126.822 Z M83.4822,134.574 L83.4822,157.1548 L74.2146595,157.154538 C74.021778,157.14285 67.7381323,156.706911 65.7882,149.418 C64.7888,146.1164 65.9466,142.3254 66.4642,140.8432 C66.946,139.358 69.1,135.9012 73.558,134.574 L73.558,134.574 L83.4822,134.574 Z M154.6154,67.9576 C170.1884,67.9576 174.383,83.133 174.383,88.1676 C174.383,93.235 176.5042,114.6976 157.1226,115.1212 C137.7472,115.5506 136.9304,102.0634 136.9304,92.3998 L136.931036,92.0948755 C136.9734,81.9920439 139.168826,67.9576 154.6154,67.9576 Z M41.8012,56.1618 C53.1822,55.1836 61.5626,67.5942 62.4332,74.6986 C62.9628,79.3096 65.3682,100.3876 47.6772,104.1784 C30.025,107.9692 23.4518,87.5982 25.3906,78.063 C25.3906,78.063 27.4818,57.4414 41.8012,56.1618 Z M107.8742,45.2374 C108.9274,35.5886 120.497,20.7922 129.766,22.9096 C139.0108,25.0096 147.4392,37.232 145.7368,47.7456 C144.0674,58.2772 135.669,72.1728 122.6034,70.4848 C109.5706,68.8086 106.6146,57.0304 107.8742,45.2374 Z M80.5208,18.6934 C90.2924,18.6934 98.188,29.9018 98.188,43.7528 C98.188,57.6158 90.2924,68.8274 80.5208,68.8274 C70.7612,68.8274 62.8446,57.6158 62.8446,43.7528 C62.8446,29.9018 70.7612,18.6934 80.5208,18.6934 Z"
          />
        </svg>
        <div>
          百度地图 React 组件<sup>{version}</sup>
        </div>
      </Logo>
      <Menu>
        {getMenus(routesConfig).map((Comps, idx) => {
          if (!React.isValidElement(Comps)) return null;
          return React.cloneElement(Comps, { key: idx });
        })}
      </Menu>
    </Wrapper>
  );
}
