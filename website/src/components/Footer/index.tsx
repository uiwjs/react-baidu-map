import styled from 'styled-components';

type FooterProps = {
  editorUrl?: string;
};

const Wrapper = styled.div`
  padding: 20px 23px 60px 23px;
  a {
    color: #ced1d4;
    text-decoration: none;
    transition: color 0.3s;
    margin: 0 3px;
    &:hover {
      color: black;
    }
    & + a {
      margin-left: 10px;
    }
    &::after {
      content: ' ';
      height: 13px;
      width: 1px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: middle;
      background-color: #e5e9ec;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const Footer = (props: FooterProps) => {
  const { editorUrl } = props || {};
  return (
    <Wrapper>
      {editorUrl && (
        <a title="Editor Current Page" target="_blank" rel="noreferrer" href={editorUrl}>
          编辑当前页面
        </a>
      )}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-baidu-map/issues/new">
        提交 Bug
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-baidu-map">
        GitHub
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt">
        kkt
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">
        uiwjs
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-amap">
        高德地图 React 版本
      </a>
    </Wrapper>
  );
};

export default Footer;
