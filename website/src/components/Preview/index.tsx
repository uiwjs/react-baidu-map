import { useEffect, useState, useRef } from 'react';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example/markdown';
import type { CodeBlockData } from 'markdown-react-code-preview-loader';
import styled from 'styled-components';
import BackToUp from '@uiw/react-back-to-top';
import Footer from '../Footer';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const MarkdownPreview = styled(MarkdownPreviewExample)`
  padding: 20px 26px;
  box-shadow: 0 0 0;
  border-width: 0;
  max-width: 1024px;
  margin: 0 0;
  pre[data-type='rehyp'] {
    overflow: initial;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      display: none;
    }
  }
`;

interface MarkdownProps {
  path?: () => Promise<{ default: CodeBlockData }>;
  editor?: string;
}

export default function Markdown(props: MarkdownProps) {
  const $dom = useRef<any>(null);
  const [mdStr, setMdStr] = useState('');
  const [data, setData] = useState<CodeBlockData>();
  const path = props.path;
  useEffect(() => {
    if (path) {
      path().then((str) => {
        setMdStr(str.default.source);
        setData(str.default);
      });
    }
  }, [path]);
  return (
    <Wrapper ref={$dom}>
      {mdStr && <MarkdownPreview source={mdStr || ''} data={data!} />}
      <BackToUp style={{ float: 'right' }}>Top</BackToUp>
      <Footer editorUrl={props.editor} />
    </Wrapper>
  );
}
