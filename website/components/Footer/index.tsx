import React from 'react';
import styles from './index.module.less';

type FooterProps = {
  editorUrl?: string;
};

const Footer = (props: FooterProps) => {
  const { editorUrl } = props || {};
  return (
    <div className={styles.footer}>
      {editorUrl && (
        <a
          title="Editor Current Page"
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/uiwjs/react-baidu-map/edit/master${editorUrl}`}
        >
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
    </div>
  );
};

export default Footer;
