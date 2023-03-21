import { Outlet } from 'react-router-dom';
import GitHubCorners from '@uiw/react-github-corners';
import styled from 'styled-components';
import SideMenu from './components/SideMenu';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
  min-height: 100%;
  box-sizing: border-box;
  margin-left: 250px;
`;

export default function Layout() {
  return (
    <Wrapper className="wmde-markdown-var">
      <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-baidu-map" />
      <SideMenu />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
