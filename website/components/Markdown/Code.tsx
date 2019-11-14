import React from 'react';
import CodePreview, { ICodePreviewProps } from '@uiw/react-code-preview';
// import CodeView from '../CodeView';

const regxOpts = /^;{{\/\*\*(.*).\*\*\/}};/g;

export interface CodeProps {
  language: string;
  value: string;
  dependencies: any;
}

export default function Code({ language, value, dependencies, ...other }: CodeProps) {
  const props: ICodePreviewProps = {};
  if(/\^(js|jsx)/.test(language) || !regxOpts.test(value)) {
    props.onlyEdit = true;
  }
  props.code = value.replace(regxOpts, '');
  return (
    <CodePreview {...props} language={language} dependencies={dependencies} />
  );
}
