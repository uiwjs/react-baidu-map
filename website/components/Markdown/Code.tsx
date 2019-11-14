import React from 'react';
import CodePreview, { ICodePreviewProps } from '@uiw/react-code-preview';
// import CodeView from '../CodeView';

export interface CodeProps {
  language: string;
  value: string;
  dependencies: any;
}

export default function Code({ language, value, dependencies, ...other }: CodeProps) {
  console.log('~~:||:~~',language,other,value);
  const props: ICodePreviewProps = {};
  if(language !== 'jsx') {
    props.noPreview = true;
  }
  return (
    <CodePreview
      {...props}
      code={value}
      dependencies={dependencies}
    />
  );
}
